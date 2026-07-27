// Works both locally (localhost:3000) AND on live Railway URL automatically
const API_BASE = window.location.origin + '/api';

// ── Token Management ─────────────────────────────────────────
function getToken() { return localStorage.getItem('_jwt_token'); }
function setToken(t) { localStorage.setItem('_jwt_token', t); }
function clearToken() { localStorage.removeItem('_jwt_token'); }

function authHeaders() {
  return { 'Content-Type': 'application/json', 'Authorization': `Bearer ${getToken()}` };
}

// ── AUTH ─────────────────────────────────────────────────────
async function apiRegister(fullName, email, password) {
  const res = await fetch(`${API_BASE}/auth/register`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ fullName, email, password })
  });
  const data = await res.json();
  if (res.ok && data.token) {
    setToken(data.token);
    return { success: true, message: data.message, user: data.user };
  }
  return { success: false, message: data.error || 'Registration failed' };
}

async function apiLogin(email, password) {
  const res = await fetch(`${API_BASE}/auth/login`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  const data = await res.json();
  if (res.ok && data.token) {
    setToken(data.token);
    return { success: true, message: data.message, user: data.user };
  }
  return { success: false, message: data.error || 'Invalid email or password' };
}

function apiLogout() { clearToken(); }

async function apiGetMe() {
  const res = await fetch(`${API_BASE}/auth/me`, { headers: authHeaders() });
  return res.json();
}

// ── CONSULTATIONS ─────────────────────────────────────────────
async function apiSaveMessage(userQuery, aiResponse, topic = 'General') {
  if (!getToken()) return;
  await fetch(`${API_BASE}/consultations`, {
    method: 'POST', headers: authHeaders(),
    body: JSON.stringify({ userQuery, aiResponse, topic })
  });
}

async function apiGetHistory() {
  if (!getToken()) return [];
  const res = await fetch(`${API_BASE}/consultations`, { headers: authHeaders() });
  const data = await res.json();
  return Array.isArray(data) ? data : [];
}

async function apiClearHistory() {
  if (!getToken()) return;
  await fetch(`${API_BASE}/consultations`, { method: 'DELETE', headers: authHeaders() });
}

// ── FIR DRAFTS ────────────────────────────────────────────────
async function apiSaveDraft(draft) {
  if (!getToken()) return { success: false };
  const res = await fetch(`${API_BASE}/fir-drafts`, {
    method: 'POST', headers: authHeaders(), body: JSON.stringify(draft)
  });
  return res.json();
}

async function apiGetDrafts() {
  if (!getToken()) return [];
  const res = await fetch(`${API_BASE}/fir-drafts`, { headers: authHeaders() });
  const data = await res.json();
  return Array.isArray(data) ? data : [];
}

async function apiDeleteDraft(id) {
  if (!getToken()) return;
  await fetch(`${API_BASE}/fir-drafts/${id}`, { method: 'DELETE', headers: authHeaders() });
}

// ── QUIZ RESULTS ──────────────────────────────────────────────
async function apiSaveQuizResult(score, total, topic = 'All Topics', answersJson = {}) {
  if (!getToken()) return;
  const res = await fetch(`${API_BASE}/quiz-results`, {
    method: 'POST', headers: authHeaders(),
    body: JSON.stringify({ score, total, topic, answersJson })
  });
  return res.json();
}

async function apiGetQuizHistory() {
  if (!getToken()) return [];
  const res = await fetch(`${API_BASE}/quiz-results`, { headers: authHeaders() });
  const data = await res.json();
  return Array.isArray(data) ? data : [];
}

// ── RISK ALERTS ───────────────────────────────────────────────
async function apiSaveRiskAlert(situation, riskLevel = 'medium', riskDetail = '') {
  if (!getToken()) return;
  await fetch(`${API_BASE}/risk-alerts`, {
    method: 'POST', headers: authHeaders(),
    body: JSON.stringify({ situation, riskLevel, riskDetail })
  });
}

// ── STATS ─────────────────────────────────────────────────────
async function apiGetStats() {
  if (!getToken()) return null;
  const res = await fetch(`${API_BASE}/admin/stats`, { headers: authHeaders() });
  return res.json();
}

console.log('E-Legal Advisor API Bridge loaded. Backend:', API_BASE);
