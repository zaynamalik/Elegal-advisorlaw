const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = 'elegal_advisor_secret_2024_lcwu';

// If DATABASE_URL exists (Railway sets this automatically), use Postgres.
// Otherwise (your laptop), use local SQLite file.
const USE_POSTGRES = !!process.env.DATABASE_URL;

let pool;   // used if Postgres
let sqlite; // used if SQLite

if (USE_POSTGRES) {
  const { Pool } = require('pg');
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  });
  console.log('🌐 Mode: POSTGRES (Railway)');
} else {
  const sqlite3 = require('sqlite3').verbose();
  const DB_PATH = path.join(__dirname, 'elegal.db');
  sqlite = new sqlite3.Database(DB_PATH, (err) => {
    if (err) console.error('❌ SQLite connection failed:', err.message);
    else console.log('💻 Mode: SQLITE (local) — file: elegal.db');
  });
}

// ── Middleware ─────────────────────────────────────
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// ═══════════════════════════════════════════════════
//  DATABASE ADAPTER — same functions work for both DBs
//  Write queries using "?" placeholders everywhere below.
// ═══════════════════════════════════════════════════

function toPgPlaceholders(sql) {
  let i = 0;
  return sql.replace(/\?/g, () => `$${++i}`);
}

// Run an INSERT/UPDATE/DELETE. Returns { lastID, changes }
function dbRun(sql, params = []) {
  return new Promise((resolve, reject) => {
    if (USE_POSTGRES) {
      let pgSql = toPgPlaceholders(sql);
      const isInsert = /^\s*INSERT/i.test(pgSql) && !/RETURNING/i.test(pgSql);
      if (isInsert) pgSql += ' RETURNING id';
      pool.query(pgSql, params)
        .then((result) => resolve({
          lastID: result.rows[0] ? result.rows[0].id : null,
          changes: result.rowCount
        }))
        .catch(reject);
    } else {
      sqlite.run(sql, params, function (err) {
        if (err) reject(err);
        else resolve({ lastID: this.lastID, changes: this.changes });
      });
    }
  });
}

// Run a SELECT expecting ONE row (or null)
function dbGet(sql, params = []) {
  return new Promise((resolve, reject) => {
    if (USE_POSTGRES) {
      pool.query(toPgPlaceholders(sql), params)
        .then((result) => resolve(result.rows[0] || null))
        .catch(reject);
    } else {
      sqlite.get(sql, params, (err, row) => {
        if (err) reject(err);
        else resolve(row || null);
      });
    }
  });
}

// Run a SELECT expecting MANY rows
function dbAll(sql, params = []) {
  return new Promise((resolve, reject) => {
    if (USE_POSTGRES) {
      pool.query(toPgPlaceholders(sql), params)
        .then((result) => resolve(result.rows))
        .catch(reject);
    } else {
      sqlite.all(sql, params, (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      });
    }
  });
}

// ── Create Tables (syntax differs slightly per DB) ─────────
async function initializeDatabase() {
  try {
    if (USE_POSTGRES) {
      await dbRun(`CREATE TABLE IF NOT EXISTS users (
        id           SERIAL PRIMARY KEY,
        full_name    TEXT NOT NULL,
        email        TEXT UNIQUE NOT NULL,
        password     TEXT NOT NULL,
        account_type TEXT DEFAULT 'citizen',
        theme        TEXT DEFAULT 'dark',
        language     TEXT DEFAULT 'english',
        created_at   TIMESTAMP DEFAULT NOW()
      )`);
      await dbRun(`CREATE TABLE IF NOT EXISTS consultations (
        id          SERIAL PRIMARY KEY,
        user_id     INTEGER NOT NULL REFERENCES users(id),
        user_query  TEXT NOT NULL,
        ai_response TEXT NOT NULL,
        topic       TEXT DEFAULT 'General',
        created_at  TIMESTAMP DEFAULT NOW()
      )`);
      await dbRun(`CREATE TABLE IF NOT EXISTS fir_drafts (
        id            SERIAL PRIMARY KEY,
        user_id       INTEGER NOT NULL REFERENCES users(id),
        document_type TEXT DEFAULT 'FIR Application',
        full_name     TEXT,
        date_time     TEXT,
        location      TEXT,
        nature        TEXT,
        incident      TEXT,
        accused       TEXT,
        witnesses     TEXT,
        evidence      TEXT,
        preview_text  TEXT,
        created_at    TIMESTAMP DEFAULT NOW()
      )`);
      await dbRun(`CREATE TABLE IF NOT EXISTS quiz_results (
        id           SERIAL PRIMARY KEY,
        user_id      INTEGER NOT NULL REFERENCES users(id),
        topic        TEXT DEFAULT 'All Topics',
        score        INTEGER NOT NULL,
        total        INTEGER NOT NULL,
        percentage   REAL NOT NULL,
        answers_json TEXT,
        created_at   TIMESTAMP DEFAULT NOW()
      )`);
      await dbRun(`CREATE TABLE IF NOT EXISTS risk_alerts (
        id           SERIAL PRIMARY KEY,
        user_id      INTEGER NOT NULL REFERENCES users(id),
        situation    TEXT NOT NULL,
        risk_level   TEXT NOT NULL,
        risk_detail  TEXT,
        created_at   TIMESTAMP DEFAULT NOW()
      )`);
      await dbRun(`CREATE TABLE IF NOT EXISTS user_settings (
        id                     SERIAL PRIMARY KEY,
        user_id                INTEGER UNIQUE NOT NULL REFERENCES users(id),
        emergency_contact      TEXT DEFAULT '+92 300 0000000',
        history_retention_days INTEGER DEFAULT 30,
        app_lock_enabled       INTEGER DEFAULT 0,
        app_lock_pin           TEXT
      )`);
    } else {
      await dbRun(`CREATE TABLE IF NOT EXISTS users (
        id         INTEGER PRIMARY KEY AUTOINCREMENT,
        full_name  TEXT    NOT NULL,
        email      TEXT    UNIQUE NOT NULL,
        password   TEXT    NOT NULL,
        account_type TEXT  DEFAULT 'citizen',
        theme      TEXT    DEFAULT 'dark',
        language   TEXT    DEFAULT 'english',
        created_at TEXT    DEFAULT (datetime('now'))
      )`);
      await dbRun(`CREATE TABLE IF NOT EXISTS consultations (
        id          INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id     INTEGER NOT NULL,
        user_query  TEXT    NOT NULL,
        ai_response TEXT    NOT NULL,
        topic       TEXT    DEFAULT 'General',
        created_at  TEXT    DEFAULT (datetime('now')),
        FOREIGN KEY (user_id) REFERENCES users(id)
      )`);
      await dbRun(`CREATE TABLE IF NOT EXISTS fir_drafts (
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
      )`);
      await dbRun(`CREATE TABLE IF NOT EXISTS quiz_results (
        id           INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id      INTEGER NOT NULL,
        topic        TEXT    DEFAULT 'All Topics',
        score        INTEGER NOT NULL,
        total        INTEGER NOT NULL,
        percentage   REAL    NOT NULL,
        answers_json TEXT,
        created_at   TEXT    DEFAULT (datetime('now')),
        FOREIGN KEY (user_id) REFERENCES users(id)
      )`);
      await dbRun(`CREATE TABLE IF NOT EXISTS risk_alerts (
        id           INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id      INTEGER NOT NULL,
        situation    TEXT    NOT NULL,
        risk_level   TEXT    NOT NULL,
        risk_detail  TEXT,
        created_at   TEXT    DEFAULT (datetime('now')),
        FOREIGN KEY (user_id) REFERENCES users(id)
      )`);
      await dbRun(`CREATE TABLE IF NOT EXISTS user_settings (
        id                    INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id               INTEGER UNIQUE NOT NULL,
        emergency_contact     TEXT    DEFAULT '+92 300 0000000',
        history_retention_days INTEGER DEFAULT 30,
        app_lock_enabled      INTEGER DEFAULT 0,
        app_lock_pin          TEXT,
        FOREIGN KEY (user_id) REFERENCES users(id)
      )`);
    }

    console.log('📋 All tables ready');
    await seedDemoUser();
  } catch (err) {
    console.error('❌ Table creation error:', err.message);
  }
}

// Seed a demo account so supervisor can log in immediately
async function seedDemoUser() {
  const demoEmail = 'demo@elegal.pk';
  try {
    const existing = await dbGet('SELECT id FROM users WHERE email = ?', [demoEmail]);
    if (!existing) {
      const hash = bcrypt.hashSync('demo123', 10);
      const result = await dbRun(
        'INSERT INTO users (full_name, email, password, account_type) VALUES (?,?,?,?)',
        ['Demo User', demoEmail, hash, 'citizen']
      );
      await dbRun('INSERT INTO user_settings (user_id) VALUES (?)', [result.lastID]);
      console.log('🌱 Demo user seeded: demo@elegal.pk / demo123');
    }
  } catch (err) {
    console.error('❌ Seed demo user error:', err.message);
  }
}

initializeDatabase();

// ── Auth Middleware ────────────────────────────────
function authenticate(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token provided' });

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: 'Invalid token' });
    req.user = user;
    next();
  });
}

// ═══════════════════════════════════════════════════
//  AUTH ROUTES
// ═══════════════════════════════════════════════════

app.post('/api/auth/register', async (req, res) => {
  const { fullName, email, password } = req.body;
  if (!fullName || !email || !password)
    return res.status(400).json({ error: 'All fields required' });
  if (password.length < 6)
    return res.status(400).json({ error: 'Password must be at least 6 characters' });

  try {
    const hash = bcrypt.hashSync(password, 10);
    const result = await dbRun(
      'INSERT INTO users (full_name, email, password) VALUES (?,?,?)',
      [fullName.trim(), email.toLowerCase().trim(), hash]
    );
    const userId = result.lastID;
    await dbRun('INSERT INTO user_settings (user_id) VALUES (?)', [userId]);
    const token = jwt.sign({ id: userId, email, full_name: fullName }, JWT_SECRET, { expiresIn: '7d' });
    res.status(201).json({ message: 'Registered successfully', token, user: { id: userId, fullName, email } });
  } catch (err) {
    if (err.message.includes('UNIQUE') || err.message.includes('duplicate key')) {
      return res.status(409).json({ error: 'Email already registered' });
    }
    res.status(500).json({ error: 'Registration failed' });
  }
});

app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ error: 'Email and password required' });

  try {
    const user = await dbGet('SELECT * FROM users WHERE email = ?', [email.toLowerCase().trim()]);
    if (!user) return res.status(401).json({ error: 'Invalid credentials' });
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
  } catch (err) {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

app.get('/api/auth/me', authenticate, async (req, res) => {
  try {
    const user = await dbGet(
      'SELECT id, full_name, email, account_type, theme, created_at FROM users WHERE id = ?',
      [req.user.id]
    );
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(404).json({ error: 'User not found' });
  }
});

// ═══════════════════════════════════════════════════
//  CONSULTATION ROUTES
// ═══════════════════════════════════════════════════

app.post('/api/consultations', authenticate, async (req, res) => {
  const { userQuery, aiResponse, topic } = req.body;
  if (!userQuery || !aiResponse)
    return res.status(400).json({ error: 'Query and response required' });

  try {
    const result = await dbRun(
      'INSERT INTO consultations (user_id, user_query, ai_response, topic) VALUES (?,?,?,?)',
      [req.user.id, userQuery, aiResponse, topic || 'General']
    );
    res.status(201).json({ message: 'Saved', id: result.lastID });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save consultation' });
  }
});

app.get('/api/consultations', authenticate, async (req, res) => {
  try {
    const rows = await dbAll(
      'SELECT * FROM consultations WHERE user_id = ? ORDER BY created_at DESC LIMIT 50',
      [req.user.id]
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch history' });
  }
});

app.delete('/api/consultations', authenticate, async (req, res) => {
  try {
    await dbRun('DELETE FROM consultations WHERE user_id = ?', [req.user.id]);
    res.json({ message: 'History cleared' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to clear history' });
  }
});

// ═══════════════════════════════════════════════════
//  FIR DRAFTS ROUTES
// ═══════════════════════════════════════════════════

app.get('/api/fir-drafts', authenticate, async (req, res) => {
  try {
    const rows = await dbAll(
      'SELECT * FROM fir_drafts WHERE user_id = ? ORDER BY created_at DESC',
      [req.user.id]
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch drafts' });
  }
});

app.post('/api/fir-drafts', authenticate, async (req, res) => {
  const { documentType, fullName, dateTime, location, nature, incident, accused, witnesses, evidence, previewText } = req.body;
  try {
    const result = await dbRun(
      `INSERT INTO fir_drafts
        (user_id, document_type, full_name, date_time, location, nature, incident, accused, witnesses, evidence, preview_text)
        VALUES (?,?,?,?,?,?,?,?,?,?,?)`,
      [req.user.id, documentType, fullName, dateTime, location, nature, incident, accused, witnesses, evidence, previewText]
    );
    res.status(201).json({ message: 'Draft saved', id: result.lastID });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save draft' });
  }
});

app.delete('/api/fir-drafts/:id', authenticate, async (req, res) => {
  try {
    const result = await dbRun(
      'DELETE FROM fir_drafts WHERE id = ? AND user_id = ?',
      [req.params.id, req.user.id]
    );
    if (result.changes === 0) return res.status(404).json({ error: 'Draft not found' });
    res.json({ message: 'Draft deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete draft' });
  }
});

// ═══════════════════════════════════════════════════
//  QUIZ RESULTS ROUTES
// ═══════════════════════════════════════════════════

app.post('/api/quiz-results', authenticate, async (req, res) => {
  const { topic, score, total, answersJson } = req.body;
  const percentage = total > 0 ? ((score / total) * 100).toFixed(1) : 0;
  try {
    const result = await dbRun(
      'INSERT INTO quiz_results (user_id, topic, score, total, percentage, answers_json) VALUES (?,?,?,?,?,?)',
      [req.user.id, topic || 'All Topics', score, total, percentage, JSON.stringify(answersJson || {})]
    );
    res.status(201).json({ message: 'Result saved', id: result.lastID, percentage });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save result' });
  }
});

app.get('/api/quiz-results', authenticate, async (req, res) => {
  try {
    const rows = await dbAll(
      'SELECT id, topic, score, total, percentage, created_at FROM quiz_results WHERE user_id = ? ORDER BY created_at DESC LIMIT 20',
      [req.user.id]
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch results' });
  }
});

// ═══════════════════════════════════════════════════
//  RISK ALERTS ROUTES
// ═══════════════════════════════════════════════════

app.post('/api/risk-alerts', authenticate, async (req, res) => {
  const { situation, riskLevel, riskDetail } = req.body;
  try {
    const result = await dbRun(
      'INSERT INTO risk_alerts (user_id, situation, risk_level, risk_detail) VALUES (?,?,?,?)',
      [req.user.id, situation, riskLevel, riskDetail]
    );
    res.status(201).json({ message: 'Alert logged', id: result.lastID });
  } catch (err) {
    res.status(500).json({ error: 'Failed to log alert' });
  }
});

app.get('/api/risk-alerts', authenticate, async (req, res) => {
  try {
    const rows = await dbAll(
      'SELECT * FROM risk_alerts WHERE user_id = ? ORDER BY created_at DESC LIMIT 20',
      [req.user.id]
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch alerts' });
  }
});

// ═══════════════════════════════════════════════════
//  USER SETTINGS ROUTE
// ═══════════════════════════════════════════════════

app.get('/api/settings', authenticate, async (req, res) => {
  try {
    const row = await dbGet('SELECT * FROM user_settings WHERE user_id = ?', [req.user.id]);
    res.json(row || {});
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch settings' });
  }
});

app.put('/api/settings', authenticate, async (req, res) => {
  const { emergencyContact, historyRetentionDays, appLockEnabled, appLockPin } = req.body;
  try {
    await dbRun(
      `UPDATE user_settings SET
        emergency_contact = COALESCE(?, emergency_contact),
        history_retention_days = COALESCE(?, history_retention_days),
        app_lock_enabled = COALESCE(?, app_lock_enabled),
        app_lock_pin = COALESCE(?, app_lock_pin)
       WHERE user_id = ?`,
      [emergencyContact, historyRetentionDays, appLockEnabled, appLockPin, req.user.id]
    );
    res.json({ message: 'Settings updated' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update settings' });
  }
});

// ═══════════════════════════════════════════════════
//  ADMIN / STATS ROUTE (impress supervisor!)
// ═══════════════════════════════════════════════════

app.get('/api/admin/stats', authenticate, async (req, res) => {
  try {
    const stats = {};
    stats.totalUsers = parseInt((await dbGet('SELECT COUNT(*) as total FROM users')).total) || 0;
    stats.totalConsultations = parseInt((await dbGet('SELECT COUNT(*) as total FROM consultations')).total) || 0;
    stats.totalFIRDrafts = parseInt((await dbGet('SELECT COUNT(*) as total FROM fir_drafts')).total) || 0;
    stats.totalQuizAttempts = parseInt((await dbGet('SELECT COUNT(*) as total FROM quiz_results')).total) || 0;
    const avgRow = await dbGet('SELECT AVG(percentage) as avg FROM quiz_results');
    stats.avgQuizScore = avgRow.avg ? parseFloat(avgRow.avg).toFixed(1) : 0;
    res.json(stats);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch stats' });
  }
});

// ── Start Server ────────────────────────────────────
app.listen(PORT, () => {
  console.log('');
  console.log('╔════════════════════════════════════════╗');
  console.log('║     E-Legal Advisor Backend API        ║');
  console.log('║     Running on port ' + PORT + '               ║');
  console.log('╚════════════════════════════════════════╝');
  console.log('');
  console.log('📂 Database mode:', USE_POSTGRES ? 'Postgres' : 'SQLite');
  console.log('🔐 Auth:     JWT (7-day tokens)');
  console.log('');
});
