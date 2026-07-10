# E-Legal Advisor — Backend Setup Guide
**LCWU Final Year Project | Group 6**

---

## What You Have Now

```
elegal-backend/
├── server.js       ← Node.js backend (Express + SQLite)
├── index.html      ← Your app (patched to call the API)
├── package.json    ← Project config
└── elegal.db       ← SQLite database (auto-created on first run)
```

---

## STEP 1 — Install Node.js (if not installed)

1. Go to https://nodejs.org
2. Download the **LTS** version (e.g. v20)
3. Install it — click Next through all steps
4. Confirm: open any terminal and type:
   ```
   node -v
   ```
   You should see something like `v20.x.x`

---

## STEP 2 — Open the Project in VS Code

1. Open **VS Code**
2. Go to **File → Open Folder**
3. Select your `elegal-backend` folder
4. VS Code will show all files in the sidebar

---

## STEP 3 — Install Dependencies

1. In VS Code, open the **Terminal** (`Ctrl + ~` or Terminal → New Terminal)
2. Make sure you are inside the `elegal-backend` folder. You will see something like:
   ```
   PS C:\Users\YourName\elegal-backend>
   ```
3. Run:
   ```
   npm install
   ```
4. Wait for it to finish. You will see a `node_modules` folder appear.

---

## STEP 4 — Start the Backend Server

In the same terminal, run:
```
node server.js
```

You should see:
```
╔════════════════════════════════════════╗
║     E-Legal Advisor Backend API        ║
║     Running on http://localhost:3000   ║
╚════════════════════════════════════════╝

📂 Database: elegal.db (SQLite)
🔐 Auth:     JWT (7-day tokens)
🌐 Frontend: http://localhost:3000
🌱 Demo user seeded: demo@elegal.pk / demo123
```

**Leave this terminal open. Do not close it.**

---

## STEP 5 — Open Your App

Open your browser (Chrome) and go to:
```
http://localhost:3000
```

Your E-Legal Advisor app opens. Now login with the demo account:
- **Email:** demo@elegal.pk
- **Password:** demo123

Or register a new account — it will be saved to the SQLite database.

---

## STEP 6 — Verify the Database is Working

Open a **second terminal** in VS Code (click the `+` button in the terminal panel) and run:

```
node -e "
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./elegal.db');
db.all('SELECT name FROM sqlite_master WHERE type=\\'table\\'', (e, r) => {
  console.log('Tables:', r.map(x => x.name));
  db.close();
});
"
```

You should see:
```
Tables: [ 'users', 'consultations', 'fir_drafts', 'quiz_results', 'risk_alerts', 'user_settings' ]
```

---

## Database Tables Explained

| Table | What it stores |
|-------|---------------|
| `users` | Registered accounts (email, hashed password, name) |
| `consultations` | Every AI legal chat query + response |
| `fir_drafts` | Saved FIR documents per user |
| `quiz_results` | Quiz scores with topic and percentage |
| `risk_alerts` | Risk analysis logs with severity level |
| `user_settings` | Emergency contact, lock PIN, history retention |

---

## API Endpoints (for viva)

| Method | Route | What it does |
|--------|-------|-------------|
| POST | `/api/auth/register` | Create new account |
| POST | `/api/auth/login` | Login, returns JWT token |
| GET | `/api/auth/me` | Get current user info |
| POST | `/api/consultations` | Save AI chat history |
| GET | `/api/consultations` | Get user's chat history |
| DELETE | `/api/consultations` | Clear history |
| GET | `/api/fir-drafts` | Get saved FIR drafts |
| POST | `/api/fir-drafts` | Save new FIR draft |
| DELETE | `/api/fir-drafts/:id` | Delete a draft |
| POST | `/api/quiz-results` | Save quiz score |
| GET | `/api/quiz-results` | Get quiz history |
| POST | `/api/risk-alerts` | Log a risk analysis |
| GET | `/api/settings` | Get user settings |
| PUT | `/api/settings` | Update settings |
| GET | `/api/admin/stats` | Platform-wide statistics |

---

## Troubleshooting

**"Cannot find module 'sqlite3'"**
→ Run `npm install` again inside the elegal-backend folder

**"Port 3000 already in use"**
→ Change `const PORT = 3000;` to `3001` in server.js, then open `http://localhost:3001`

**App opens but login doesn't go to database**
→ Check the browser Console (F12) — it should show `🔗 API Bridge active → http://localhost:3000`

**Database not created**
→ Make sure you run `node server.js` from inside the `elegal-backend` folder

---

## For Your Viva — Key Points to Mention

1. **Backend:** Node.js with Express framework
2. **Database:** SQLite (lightweight, file-based, no separate server needed)
3. **Authentication:** JWT (JSON Web Tokens) with bcrypt password hashing
4. **Architecture:** REST API with 6 normalized tables
5. **Security:** Passwords are hashed (never stored as plain text), all routes protected by token
6. **Offline fallback:** If server is down, app still works with localStorage
7. **Demo account:** Seeded automatically so supervisor can test immediately
