// =====================================================
// E-Legal Advisor - Node.js Backend Server
// Stack: Node.js + Express + SQLite + JWT Auth
// Author: Group 6 - LCWU Final Year Project
// =====================================================

const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;
const JWT_SECRET = 'elegal_advisor_secret_2024_lcwu';

// ── Middleware ─────────────────────────────────────
app.use(cors());
app.use(express.json());

// Serve the frontend HTML directly from this folder
app.use(express.static(path.join(__dirname)));

// ── Database Setup ─────────────────────────────────
const DB_PATH = path.join(__dirname, 'elegal.db');
const db = new sqlite3.Database(DB_PATH, (err) => {
  if (err) {
    console.error('❌ Database connection failed:', err.message);
  } else {
    console.log('✅ Connected to SQLite database: elegal.db');
    initializeDatabase();
  }
});

// ── Create Tables ──────────────────────────────────
function initializeDatabase() {
  db.serialize(() => {

    // USERS table
    db.run(`CREATE TABLE IF NOT EXISTS users (
      id         INTEGER PRIMARY KEY AUTOINCREMENT,
      full_name  TEXT    NOT NULL,
      email      TEXT    UNIQUE NOT NULL,
      password   TEXT    NOT NULL,
      account_type TEXT  DEFAULT 'citizen',
      theme      TEXT    DEFAULT 'dark',
      language   TEXT    DEFAULT 'english',
      created_at TEXT    DEFAULT (datetime('now'))
    )`, logTable('users'));

    // CONSULTATION HISTORY table
    db.run(`CREATE TABLE IF NOT EXISTS consultations (
      id          INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id     INTEGER NOT NULL,
      user_query  TEXT    NOT NULL,
      ai_response TEXT    NOT NULL,
      topic       TEXT    DEFAULT 'General',
      created_at  TEXT    DEFAULT (datetime('now')),
      FOREIGN KEY (user_id) REFERENCES users(id)
    )`, logTable('consultations'));

    // FIR DRAFTS table
    db.run(`CREATE TABLE IF NOT EXISTS fir_drafts (
      id            INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id       INTEGER NOT NULL,
      document_type TEXT    DEFAULT 'FIR Application',
      full_name     TEXT,
      date_time     TEXT,
      location      TEXT,
      nature        TEXT,
      incident      TEXT,
      accused       TEXT,
      witnesses     TEXT,
      evidence      TEXT,
      preview_text  TEXT,
      created_at    TEXT    DEFAULT (datetime('now')),
      FOREIGN KEY (user_id) REFERENCES users(id)
    )`, logTable('fir_drafts'));

    // QUIZ RESULTS table
    db.run(`CREATE TABLE IF NOT EXISTS quiz_results (
      id           INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id      INTEGER NOT NULL,
      topic        TEXT    DEFAULT 'All Topics',
      score        INTEGER NOT NULL,
      total        INTEGER NOT NULL,
      percentage   REAL    NOT NULL,
      answers_json TEXT,
      created_at   TEXT    DEFAULT (datetime('now')),
      FOREIGN KEY (user_id) REFERENCES users(id)
    )`, logTable('quiz_results'));

    // RISK ALERTS table
    db.run(`CREATE TABLE IF NOT EXISTS risk_alerts (
      id           INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id      INTEGER NOT NULL,
      situation    TEXT    NOT NULL,
      risk_level   TEXT    NOT NULL,
      risk_detail  TEXT,
      created_at   TEXT    DEFAULT (datetime('now')),
      FOREIGN KEY (user_id) REFERENCES users(id)
    )`, logTable('risk_alerts'));

    // USER SETTINGS table
    db.run(`CREATE TABLE IF NOT EXISTS user_settings (
      id                    INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id               INTEGER UNIQUE NOT NULL,
      emergency_contact     TEXT    DEFAULT '+92 300 0000000',
      history_retention_days INTEGER DEFAULT 30,
      app_lock_enabled      INTEGER DEFAULT 0,
      app_lock_pin          TEXT,
      FOREIGN KEY (user_id) REFERENCES users(id)
    )`, logTable('user_settings'));

    // Seed demo user
    seedDemoUser();
  });
}

function logTable(name) {
  return (err) => {
    if (err) console.error(`❌ Table "${name}" error:`, err.message);
    else console.log(`📋 Table ready: ${name}`);
  };
}

// Seed a demo account so supervisor can log in immediately
function seedDemoUser() {
  const demoEmail = 'demo@elegal.pk';
  db.get('SELECT id FROM users WHERE email = ?', [demoEmail], (err, row) => {
    if (!row) {
      const hash = bcrypt.hashSync('demo123', 10);
      db.run(
        'INSERT INTO users (full_name, email, password, account_type) VALUES (?,?,?,?)',
        ['Demo User', demoEmail, hash, 'citizen'],
        function (err) {
          if (!err) {
            db.run('INSERT INTO user_settings (user_id) VALUES (?)', [this.lastID]);
            console.log('🌱 Demo user seeded: demo@elegal.pk / demo123');
          }
        }
      );
    }
  });
}

// ── Auth Middleware ────────────────────────────────
function authenticate(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer <token>
  if (!token) return res.status(401).json({ error: 'No token provided' });

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: 'Invalid token' });
    req.user = user; // { id, email, full_name }
    next();
  });
}

// ═══════════════════════════════════════════════════
//  AUTH ROUTES
// ═══════════════════════════════════════════════════

// POST /api/auth/register
app.post('/api/auth/register', (req, res) => {
  const { fullName, email, password } = req.body;
  if (!fullName || !email || !password)
    return res.status(400).json({ error: 'All fields required' });
  if (password.length < 6)
    return res.status(400).json({ error: 'Password must be at least 6 characters' });

  const hash = bcrypt.hashSync(password, 10);
  db.run(
    'INSERT INTO users (full_name, email, password) VALUES (?,?,?)',
    [fullName.trim(), email.toLowerCase().trim(), hash],
    function (err) {
      if (err) {
        if (err.message.includes('UNIQUE')) {
          return res.status(409).json({ error: 'Email already registered' });
        }
        return res.status(500).json({ error: 'Registration failed' });
      }
      const userId = this.lastID;
      db.run('INSERT INTO user_settings (user_id) VALUES (?)', [userId]);
      const token = jwt.sign({ id: userId, email, full_name: fullName }, JWT_SECRET, { expiresIn: '7d' });
      res.status(201).json({ message: 'Registered successfully', token, user: { id: userId, fullName, email } });
    }
  );
});

// POST /api/auth/login
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ error: 'Email and password required' });

  db.get('SELECT * FROM users WHERE email = ?', [email.toLowerCase().trim()], (err, user) => {
    if (err || !user) return res.status(401).json({ error: 'Invalid credentials' });
    if (!bcrypt.compareSync(password, user.password))
      return res.status(401).json({ error: 'Invalid credentials' });

    const token = jwt.sign(
      { id: user.id, email: user.email, full_name: user.full_name },
      JWT_SECRET,
      { expiresIn: '7d' }
    );
    res.json({
      message: 'Login successful',
      token,
      user: { id: user.id, fullName: user.full_name, email: user.email, accountType: user.account_type }
    });
  });
});

// GET /api/auth/me — verify token & get current user
app.get('/api/auth/me', authenticate, (req, res) => {
  db.get('SELECT id, full_name, email, account_type, theme, created_at FROM users WHERE id = ?',
    [req.user.id], (err, user) => {
      if (err || !user) return res.status(404).json({ error: 'User not found' });
      res.json(user);
    });
});

// ═══════════════════════════════════════════════════
//  CONSULTATION ROUTES
// ═══════════════════════════════════════════════════

// POST /api/consultations — save a chat exchange
app.post('/api/consultations', authenticate, (req, res) => {
  const { userQuery, aiResponse, topic } = req.body;
  if (!userQuery || !aiResponse)
    return res.status(400).json({ error: 'Query and response required' });

  db.run(
    'INSERT INTO consultations (user_id, user_query, ai_response, topic) VALUES (?,?,?,?)',
    [req.user.id, userQuery, aiResponse, topic || 'General'],
    function (err) {
      if (err) return res.status(500).json({ error: 'Failed to save consultation' });
      res.status(201).json({ message: 'Saved', id: this.lastID });
    }
  );
});

// GET /api/consultations — get user's chat history
app.get('/api/consultations', authenticate, (req, res) => {
  db.all(
    'SELECT * FROM consultations WHERE user_id = ? ORDER BY created_at DESC LIMIT 50',
    [req.user.id],
    (err, rows) => {
      if (err) return res.status(500).json({ error: 'Failed to fetch history' });
      res.json(rows);
    }
  );
});

// DELETE /api/consultations — clear all history
app.delete('/api/consultations', authenticate, (req, res) => {
  db.run('DELETE FROM consultations WHERE user_id = ?', [req.user.id], (err) => {
    if (err) return res.status(500).json({ error: 'Failed to clear history' });
    res.json({ message: 'History cleared' });
  });
});

// ═══════════════════════════════════════════════════
//  FIR DRAFTS ROUTES
// ═══════════════════════════════════════════════════

// GET /api/fir-drafts
app.get('/api/fir-drafts', authenticate, (req, res) => {
  db.all('SELECT * FROM fir_drafts WHERE user_id = ? ORDER BY created_at DESC',
    [req.user.id], (err, rows) => {
      if (err) return res.status(500).json({ error: 'Failed to fetch drafts' });
      res.json(rows);
    });
});

// POST /api/fir-drafts — save a new draft
app.post('/api/fir-drafts', authenticate, (req, res) => {
  const { documentType, fullName, dateTime, location, nature, incident, accused, witnesses, evidence, previewText } = req.body;
  db.run(
    `INSERT INTO fir_drafts 
      (user_id, document_type, full_name, date_time, location, nature, incident, accused, witnesses, evidence, preview_text) 
      VALUES (?,?,?,?,?,?,?,?,?,?,?)`,
    [req.user.id, documentType, fullName, dateTime, location, nature, incident, accused, witnesses, evidence, previewText],
    function (err) {
      if (err) return res.status(500).json({ error: 'Failed to save draft' });
      res.status(201).json({ message: 'Draft saved', id: this.lastID });
    }
  );
});

// DELETE /api/fir-drafts/:id
app.delete('/api/fir-drafts/:id', authenticate, (req, res) => {
  db.run('DELETE FROM fir_drafts WHERE id = ? AND user_id = ?',
    [req.params.id, req.user.id], function (err) {
      if (err) return res.status(500).json({ error: 'Failed to delete draft' });
      if (this.changes === 0) return res.status(404).json({ error: 'Draft not found' });
      res.json({ message: 'Draft deleted' });
    });
});

// ═══════════════════════════════════════════════════
//  QUIZ RESULTS ROUTES
// ═══════════════════════════════════════════════════

// POST /api/quiz-results — save a quiz attempt
app.post('/api/quiz-results', authenticate, (req, res) => {
  const { topic, score, total, answersJson } = req.body;
  const percentage = total > 0 ? ((score / total) * 100).toFixed(1) : 0;
  db.run(
    'INSERT INTO quiz_results (user_id, topic, score, total, percentage, answers_json) VALUES (?,?,?,?,?,?)',
    [req.user.id, topic || 'All Topics', score, total, percentage, JSON.stringify(answersJson || {})],
    function (err) {
      if (err) return res.status(500).json({ error: 'Failed to save result' });
      res.status(201).json({ message: 'Result saved', id: this.lastID, percentage });
    }
  );
});

// GET /api/quiz-results — get user's quiz history
app.get('/api/quiz-results', authenticate, (req, res) => {
  db.all('SELECT id, topic, score, total, percentage, created_at FROM quiz_results WHERE user_id = ? ORDER BY created_at DESC LIMIT 20',
    [req.user.id], (err, rows) => {
      if (err) return res.status(500).json({ error: 'Failed to fetch results' });
      res.json(rows);
    });
});

// ═══════════════════════════════════════════════════
//  RISK ALERTS ROUTES
// ═══════════════════════════════════════════════════

// POST /api/risk-alerts — log a risk check
app.post('/api/risk-alerts', authenticate, (req, res) => {
  const { situation, riskLevel, riskDetail } = req.body;
  db.run(
    'INSERT INTO risk_alerts (user_id, situation, risk_level, risk_detail) VALUES (?,?,?,?)',
    [req.user.id, situation, riskLevel, riskDetail],
    function (err) {
      if (err) return res.status(500).json({ error: 'Failed to log alert' });
      res.status(201).json({ message: 'Alert logged', id: this.lastID });
    }
  );
});

// GET /api/risk-alerts
app.get('/api/risk-alerts', authenticate, (req, res) => {
  db.all('SELECT * FROM risk_alerts WHERE user_id = ? ORDER BY created_at DESC LIMIT 20',
    [req.user.id], (err, rows) => {
      if (err) return res.status(500).json({ error: 'Failed to fetch alerts' });
      res.json(rows);
    });
});

// ═══════════════════════════════════════════════════
//  USER SETTINGS ROUTE
// ═══════════════════════════════════════════════════

// GET /api/settings
app.get('/api/settings', authenticate, (req, res) => {
  db.get('SELECT * FROM user_settings WHERE user_id = ?', [req.user.id], (err, row) => {
    if (err) return res.status(500).json({ error: 'Failed to fetch settings' });
    res.json(row || {});
  });
});

// PUT /api/settings
app.put('/api/settings', authenticate, (req, res) => {
  const { emergencyContact, historyRetentionDays, appLockEnabled, appLockPin } = req.body;
  db.run(
    `UPDATE user_settings SET 
      emergency_contact = COALESCE(?, emergency_contact),
      history_retention_days = COALESCE(?, history_retention_days),
      app_lock_enabled = COALESCE(?, app_lock_enabled),
      app_lock_pin = COALESCE(?, app_lock_pin)
     WHERE user_id = ?`,
    [emergencyContact, historyRetentionDays, appLockEnabled, appLockPin, req.user.id],
    (err) => {
      if (err) return res.status(500).json({ error: 'Failed to update settings' });
      res.json({ message: 'Settings updated' });
    }
  );
});

// ═══════════════════════════════════════════════════
//  ADMIN / STATS ROUTE (impress supervisor!)
// ═══════════════════════════════════════════════════

// GET /api/admin/stats — overall platform stats
app.get('/api/admin/stats', authenticate, (req, res) => {
  const stats = {};
  db.get('SELECT COUNT(*) as total FROM users', (_, r) => { stats.totalUsers = r?.total || 0; });
  db.get('SELECT COUNT(*) as total FROM consultations', (_, r) => { stats.totalConsultations = r?.total || 0; });
  db.get('SELECT COUNT(*) as total FROM fir_drafts', (_, r) => { stats.totalFIRDrafts = r?.total || 0; });
  db.get('SELECT COUNT(*) as total FROM quiz_results', (_, r) => { stats.totalQuizAttempts = r?.total || 0; });
  db.get('SELECT AVG(percentage) as avg FROM quiz_results', (_, r) => {
    stats.avgQuizScore = r?.avg ? parseFloat(r.avg).toFixed(1) : 0;
    res.json(stats);
  });
});

// ── Start Server ────────────────────────────────────
app.listen(PORT, () => {
  console.log('');
  console.log('╔════════════════════════════════════════╗');
  console.log('║     E-Legal Advisor Backend API        ║');
  console.log('║     Running on http://localhost:3000   ║');
  console.log('╚════════════════════════════════════════╝');
  console.log('');
  console.log('📂 Database: elegal.db (SQLite)');
  console.log('🔐 Auth:     JWT (7-day tokens)');
  console.log('🌐 Frontend: http://localhost:3000');
  console.log('');
});
