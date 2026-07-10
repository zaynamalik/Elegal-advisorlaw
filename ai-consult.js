// ============================================================
//  E-Legal Advisor — AI Legal Consultation (Conversational)
//  Separate file — only affects AI Consult tab
//  Does NOT affect Home search bar
// ============================================================

var CONSULT_FLOWS = {

  "domestic violence": {
    category: "Domestic Violence",
    color: "#f97316",
    questions: [
      "Are you currently in a safe place, or are you still at home with the person harming you?",
      "Has this happened before, or is this the first incident?",
      "Do you have any injuries right now that need medical attention?"
    ],
    followUp: {
      safe: "Since you are in a safe place right now, let us focus on the legal steps you can take.",
      unsafe: "Your safety comes first. Please go to a neighbour, relative, or any public place right now before taking any other step.",
      injury: "Please photograph your injuries immediately — even minor ones. This is important evidence for your case."
    },
    guidance: [
      "① Call 1099 (Women Helpline) — available 24/7, free, guidance in Urdu. They can also arrange shelter.",
      "② File an FIR at the nearest police station under the Domestic Violence Act 2021. The police CANNOT refuse.",
      "③ You can apply for a Protection Order from court — this legally prohibits the abuser from coming near you.",
      "④ Dar-ul-Aman shelters are available in every city if you need a safe place to stay."
    ],
    laws: "Domestic Violence (Prevention & Protection) Act 2021 | PPC Section 337",
    punishment: "Up to 1 year imprisonment + fine. Physical harm additionally charged under PPC Section 337 with up to 7 years.",
    helplines: [{ name: "Women Helpline", number: "1099" }, { name: "Police", number: "15" }, { name: "Edhi Foundation", number: "115" }]
  },

  "harassment": {
    category: "Harassment",
    color: "#f97316",
    questions: [
      "Is this happening at your workplace, university, or somewhere else?",
      "Is the person harassing you someone in authority over you — like a boss, teacher, or supervisor?",
      "Do you have any messages, emails or witnesses that can support your complaint?"
    ],
    guidance: [
      "① Write down every incident with date, time, location and what was said or done.",
      "② File a written complaint with HR or the head of your organisation — keep a copy with the date.",
      "③ If the organisation does not act within 30 days, escalate to the Federal Ombudsman at mohtasib.gov.pk.",
      "④ For university harassment, also file with HEC at hec.gov.pk.",
      "⑤ You can additionally file FIR under PPC Section 509."
    ],
    laws: "Protection Against Harassment of Women at Workplace Act 2010 | PPC Section 509",
    punishment: "Up to 3 years imprisonment + fine. Harasser can be forced to resign by the Inquiry Committee.",
    helplines: [{ name: "Federal Ombudsman", number: "051-9205514" }, { name: "Women Helpline", number: "1099" }, { name: "Police", number: "15" }]
  },

  "blackmail": {
    category: "Cyber Blackmail",
    color: "#ef4444",
    questions: [
      "Has the person already shared anything, or are they only threatening to share?",
      "Do you know who this person is, or is it an anonymous account?",
      "Have you paid any money to them so far?"
    ],
    guidance: [
      "① Do NOT pay any money — paying never stops blackmailers, it encourages more demands.",
      "② Screenshot ALL messages and the person's profile RIGHT NOW before blocking.",
      "③ Block them on all platforms after taking screenshots.",
      "④ File complaint with FIA Cybercrime: complaint.fia.gov.pk or call 9911.",
      "⑤ If images are already shared, FIA can request removal from platforms — this moves faster once a formal complaint is logged."
    ],
    laws: "PECA 2016 Section 20 (Privacy Violation) | Section 21 (Cyberstalking)",
    punishment: "Up to 5 years imprisonment AND Rs. 10 million fine under PECA 2016.",
    helplines: [{ name: "FIA Cybercrime", number: "9911" }, { name: "Women Helpline", number: "1099" }, { name: "Police", number: "15" }]
  },

  "fraud": {
    category: "Fraud / Financial Scam",
    color: "#f97316",
    questions: [
      "How much money was involved, and how was it transferred — bank transfer, cash, or online?",
      "Do you have any receipts, screenshots or contracts showing the transaction?",
      "How long ago did this happen?"
    ],
    guidance: [
      "① Stop all contact and payments with the fraudster immediately.",
      "② Contact your bank right away — transfers can sometimes be reversed within 24-48 hours.",
      "③ File FIR at the nearest police station under PPC Section 420.",
      "④ If online fraud, also report to FIA Cybercrime at complaint.fia.gov.pk or 9911.",
      "⑤ Save all evidence — receipts, messages, screenshots, contracts."
    ],
    laws: "PPC Section 420 (Cheating) | PECA 2016 (Online Fraud)",
    punishment: "Up to 7 years imprisonment under PPC Section 420. Online fraud carries additional Rs. 10 million fine.",
    helplines: [{ name: "Police", number: "15" }, { name: "FIA Cybercrime", number: "9911" }, { name: "Your Bank", number: "Check card back" }]
  },

  "property": {
    category: "Property / Land Dispute",
    color: "#f59e0b",
    questions: [
      "Is someone illegally occupying your property, or is this a dispute over ownership?",
      "Do you have the original property documents — Registry, Fard, Mutation?",
      "Is the other party a family member or an outsider?"
    ],
    guidance: [
      "① Secure ALL original documents immediately — Registry, Fard, Mutation (Intiqal), NOC.",
      "② If someone has illegally occupied your property, file FIR under PPC Section 447 immediately.",
      "③ Get certified property record copies from the local Patwari.",
      "④ File a civil suit in District Court for possession — contact District Bar Association for free legal aid.",
      "⑤ Do NOT sign any compromise document under pressure."
    ],
    laws: "PPC Section 447 (Criminal Trespass) | Land Revenue Act 1967",
    punishment: "Up to 3 months imprisonment for criminal trespass. Civil court can restore full possession with compensation.",
    helplines: [{ name: "Police", number: "15" }, { name: "Punjab Land Records", number: "0800-02345" }, { name: "District Bar Association", number: "Visit locally" }]
  },

  "inheritance": {
    category: "Inheritance / Wirasat",
    color: "#f59e0b",
    questions: [
      "Has the person recently passed away, or is this an old case?",
      "Are other family members refusing to give you your share, or is the property still undivided?",
      "Do you have a death certificate and any property documents?"
    ],
    guidance: [
      "① Get a Legal Heir Certificate from NADRA or Union Council — this officially lists all legal heirs.",
      "② Get property records from the local Patwari / Land Record office.",
      "③ Daughters have a guaranteed share equal to half of son's share — no one can legally deny this.",
      "④ If family refuses, file a Partition suit in District Civil Court.",
      "⑤ Aurat Foundation provides free legal aid for women: 051-2891350."
    ],
    laws: "Muslim Family Laws Ordinance 1961 | West Pakistan Muslim Personal Law 1962",
    punishment: "Illegal occupation of your share can be charged under PPC Section 447 (Criminal Trespass).",
    helplines: [{ name: "NADRA", number: "051-111-786-100" }, { name: "Aurat Foundation", number: "051-2891350" }]
  },

  "landlord": {
    category: "Tenant / Landlord Dispute",
    color: "#f59e0b",
    questions: [
      "Are you the tenant or the landlord in this situation?",
      "Do you have a written rental agreement or lease contract?",
      "Has the landlord threatened to cut utilities or remove you by force?"
    ],
    guidance: [
      "① A landlord CANNOT evict you without a court order — even if rent is overdue.",
      "② File complaint with the Rent Controller at District Court immediately if threatened.",
      "③ If physically threatened, call 15 and file FIR.",
      "④ For landlords: send formal written notice via registered post giving 30 days minimum notice.",
      "⑤ Security deposits are recoverable through Small Claims Court or Rent Controller."
    ],
    laws: "Punjab Rented Premises Act 2009 | PPC Section 441 (Criminal Trespass)",
    punishment: "Illegal eviction by landlord: PPC Section 441 — fines and potential imprisonment.",
    helplines: [{ name: "Police", number: "15" }, { name: "Rent Controller", number: "Visit District Court" }, { name: "Legal Aid", number: "051-111-119-119" }]
  },

  "police": {
    category: "Police Misconduct",
    color: "#ef4444",
    questions: [
      "Are you currently detained, or have you already been released?",
      "Do you know the name or badge number of the officer involved?",
      "Were there any witnesses present when this happened?"
    ],
    guidance: [
      "① Police cannot detain you for more than 24 hours without producing you before a magistrate — Article 10 of the Constitution.",
      "② Note the officer's name, badge number and police station immediately.",
      "③ A family member can file a Habeas Corpus petition in High Court if you are held illegally.",
      "④ Get a medical examination immediately upon release — injuries are evidence.",
      "⑤ File complaint with Human Rights Commission of Pakistan: 051-9204688."
    ],
    laws: "Constitution Article 9, 10, 14 | PPC Section 330 (Torture by police)",
    punishment: "Officers found guilty of torture under PPC Section 330 face imprisonment and departmental dismissal.",
    helplines: [{ name: "Human Rights Commission", number: "051-9204688" }, { name: "Legal Aid", number: "051-111-119-119" }]
  },

  "forced marriage": {
    category: "Forced Marriage",
    color: "#ef4444",
    questions: [
      "Is the marriage being forced by your family, or by someone else?",
      "Has the ceremony already happened, or is it being planned?",
      "Are you currently in a safe place where you can speak freely?"
    ],
    guidance: [
      "① If in immediate danger, call 1099 or 15 right now.",
      "② Your consent is REQUIRED for a valid nikah — a nikah without consent is legally invalid.",
      "③ Marriage under 18 is illegal under the Child Marriage Restraint Act 2019.",
      "④ You can seek a Protection Order from District Court to prevent the marriage before it happens.",
      "⑤ Rozan Counselling specialises in forced marriage: 051-2890505."
    ],
    laws: "Child Marriage Restraint Act 2019 | PPC Section 498-B | Muslim Family Laws Ordinance 1961",
    punishment: "Up to 5 years imprisonment for forcing a marriage under PPC Section 498-B.",
    helplines: [{ name: "Women Helpline", number: "1099" }, { name: "Police", number: "15" }, { name: "Rozan Counselling", number: "051-2890505" }]
  }

};

// ── Detect category from user input ─────────────────────────
function detectCategory(text) {
  var t = text.toLowerCase();
  if (t.match(/husband|wife|domestic|beating|maar|shohar|ghar|marital|spouse/)) return "domestic violence";
  if (t.match(/harass|boss|office|workplace|teacher|professor|university|job harassment/)) return "harassment";
  if (t.match(/blackmail|nude|private video|leaked|sextortion|photos share|video leak/)) return "blackmail";
  if (t.match(/fraud|scam|cheat|420|paise le|money fraud|fake job|dhokebaazi/)) return "fraud";
  if (t.match(/property|zameen|land|plot|qabza|makaan dispute|illegal possession/)) return "property";
  if (t.match(/inherit|wirasat|jaidad|haq nahi|father died|mother died|daughters right/)) return "inheritance";
  if (t.match(/landlord|tenant|rent|kiraya|eviction|deposit wapas|ghar se nikal/)) return "landlord";
  if (t.match(/police|wrongful arrest|illegal detention|false case|police beating|torture/)) return "police";
  if (t.match(/forced marriage|jabri shadi|child marriage|honor killing|nikah force/)) return "forced marriage";
  return null;
}

// ── Build response HTML ──────────────────────────────────────
function buildConsultCard(flow, userAnswers) {
  var color = flow.color;
  var guidanceHTML = flow.guidance.map(function(s) {
    return '<div style="color:#e2e8f0;font-size:0.87rem;padding:4px 0;line-height:1.6;">' + s + '</div>';
  }).join('');

  var helplinesHTML = flow.helplines.map(function(h) {
    return '<a href="tel:' + h.number + '" style="display:inline-flex;align-items:center;gap:4px;background:rgba(239,68,68,0.14);border:1px solid rgba(239,68,68,0.38);color:#fca5a5;padding:5px 11px;border-radius:28px;text-decoration:none;font-weight:600;font-size:0.8rem;margin:3px;">📞 ' + h.name + ': ' + h.number + '</a>';
  }).join('');

  var answersHTML = '';
  if (userAnswers && userAnswers.length > 0) {
    answersHTML = '<div style="margin-bottom:9px;padding:10px;background:rgba(255,255,255,0.03);border-radius:9px;border:1px solid rgba(255,255,255,0.1);">' +
      '<div style="color:#94a3b8;font-size:0.75rem;font-weight:700;margin-bottom:5px;">📋 BASED ON YOUR RESPONSES</div>' +
      userAnswers.map(function(a) {
        return '<div style="color:#cbd5e1;font-size:0.82rem;padding:2px 0;">• ' + a + '</div>';
      }).join('') + '</div>';
  }

  return '<div style="background:rgba(8,12,28,0.97);border:2px solid ' + color + ';border-radius:16px;padding:15px;margin:8px 0;">' +

    '<div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;">' +
    '<span style="background:' + color + ';color:white;padding:2px 10px;border-radius:18px;font-size:0.7rem;font-weight:700;">LEGAL ANALYSIS</span>' +
    '<span style="color:white;font-weight:700;font-size:0.95rem;">⚖️ ' + flow.category + '</span></div>' +

    answersHTML +

    '<div style="background:rgba(255,255,255,0.04);border-radius:9px;padding:10px;margin-bottom:9px;">' +
    '<div style="color:#93c5fd;font-weight:700;font-size:0.75rem;margin-bottom:6px;">📋 WHAT YOU SHOULD DO — step by step</div>' +
    guidanceHTML + '</div>' +

    '<div style="margin-bottom:9px;padding:10px;background:rgba(251,191,36,0.07);border-radius:9px;border-left:3px solid #fbbf24;">' +
    '<div style="color:#fbbf24;font-weight:700;font-size:0.75rem;margin-bottom:4px;">⚖️ APPLICABLE LAW</div>' +
    '<div style="color:#fde68a;font-size:0.84rem;">' + flow.laws + '</div></div>' +

    '<div style="margin-bottom:9px;padding:10px;background:rgba(220,38,38,0.09);border-radius:9px;border:1px solid rgba(220,38,38,0.32);">' +
    '<div style="color:#fee2e2;font-weight:700;font-size:0.75rem;margin-bottom:4px;">⚖️ PENALTY FOR THE OFFENDER</div>' +
    '<div style="color:#fecaca;font-size:0.84rem;">' + flow.punishment + '</div></div>' +

    '<div style="margin-bottom:9px;">' +
    '<div style="color:#f87171;font-weight:700;font-size:0.75rem;margin-bottom:5px;">📞 CALL FOR HELP — tap to dial</div>' +
    '<div style="display:flex;flex-wrap:wrap;gap:3px;">' + helplinesHTML + '</div></div>' +

    '<div style="padding:9px;background:rgba(139,92,246,0.09);border-radius:9px;border:1px solid rgba(139,92,246,0.28);color:#c4b5fd;font-size:0.82rem;">' +
    '💬 <strong>Next Step:</strong> Would you like help drafting an FIR or formal complaint for this case? Click <strong>FIR Draft</strong> in the sidebar.</div>' +

    '<div style="margin-top:9px;color:#94a3b8;font-size:0.72rem;text-align:center;">⚠️ General legal guidance based on Pakistani law. For urgent danger, call police: 15 immediately.</div>' +
    '</div>';
}

// ── Conversational state per session ────────────────────────
var consultState = {
  stage: 'greeting',   // greeting → category → q1 → q2 → q3 → guidance
  category: null,
  flow: null,
  questionIndex: 0,
  userAnswers: []
};

function resetConsultState() {
  consultState = { stage: 'greeting', category: null, flow: null, questionIndex: 0, userAnswers: [] };
}

// ── Generate bot reply based on conversation state ───────────
function getConsultReply(userText) {
  var text = userText.trim();

  // Stage: greeting — user just described their problem
  if (consultState.stage === 'greeting') {
    var cat = detectCategory(text);

    if (cat && CONSULT_FLOWS[cat]) {
      consultState.category = cat;
      consultState.flow = CONSULT_FLOWS[cat];
      consultState.stage = 'questioning';
      consultState.questionIndex = 0;
      consultState.userAnswers = [];

      return '<div style="background:rgba(8,12,28,0.95);border:1px solid rgba(96,165,250,0.3);border-radius:14px;padding:14px;">' +
        '<div style="color:#93c5fd;font-weight:700;margin-bottom:8px;">⚖️ E-Legal Advisor</div>' +
        '<div style="color:#e2e8f0;font-size:0.9rem;margin-bottom:12px;">I understand — this sounds like a <strong style="color:#fbbf24;">' + consultState.flow.category + '</strong> situation. I have a few questions to give you the most accurate guidance.</div>' +
        '<div style="background:rgba(37,99,235,0.15);border:1px solid rgba(37,99,235,0.35);border-radius:10px;padding:12px;color:#bfdbfe;font-size:0.9rem;">' +
        '❓ ' + consultState.flow.questions[0] + '</div></div>';
    } else {
      // Can not detect category — ask them to describe more
      return '<div style="background:rgba(8,12,28,0.95);border:1px solid rgba(96,165,250,0.3);border-radius:14px;padding:14px;">' +
        '<div style="color:#93c5fd;font-weight:700;margin-bottom:8px;">⚖️ E-Legal Advisor</div>' +
        '<div style="color:#e2e8f0;font-size:0.9rem;margin-bottom:12px;">I want to help you properly. Could you describe your situation in a bit more detail? For example — is this about:</div>' +
        '<div style="display:flex;flex-wrap:wrap;gap:5px;">' +
        ['Domestic Violence', 'Harassment', 'Blackmail', 'Fraud / Scam', 'Property Dispute', 'Inheritance', 'Landlord Issue', 'Police Misconduct', 'Forced Marriage'].map(function(t) {
          return '<span class="aiConsultPill" style="cursor:pointer;background:rgba(37,99,235,0.18);border:1px solid rgba(37,99,235,0.38);color:#93c5fd;padding:5px 11px;border-radius:18px;font-size:0.82rem;margin:2px;display:inline-block;">' + t + '</span>';
        }).join('') + '</div></div>';
    }
  }

  // Stage: questioning — asking follow-up questions
  if (consultState.stage === 'questioning') {
    consultState.userAnswers.push(text);
    consultState.questionIndex++;

    // Still have questions left
    if (consultState.questionIndex < consultState.flow.questions.length) {
      return '<div style="background:rgba(8,12,28,0.95);border:1px solid rgba(96,165,250,0.3);border-radius:14px;padding:14px;">' +
        '<div style="color:#6ee7b7;font-size:0.85rem;margin-bottom:10px;">✓ Understood. One more question:</div>' +
        '<div style="background:rgba(37,99,235,0.15);border:1px solid rgba(37,99,235,0.35);border-radius:10px;padding:12px;color:#bfdbfe;font-size:0.9rem;">' +
        '❓ ' + consultState.flow.questions[consultState.questionIndex] + '</div></div>';
    }

    // All questions answered — show full guidance
    consultState.stage = 'complete';
    var answers = consultState.userAnswers.slice();
    var flow = consultState.flow;
    resetConsultState();

    return '<div style="color:#6ee7b7;font-size:0.85rem;margin-bottom:10px;padding:8px;">✓ Thank you for sharing that. Based on what you have told me, here is your personalised legal guidance:</div>' +
      buildConsultCard(flow, answers);
  }

  // Stage: complete — start fresh
  resetConsultState();
  return getConsultReply(text);
}

// ── Override AI Consult send button ─────────────────────────
function initAIConsult() {
  var sendBtn = document.getElementById('sendConsultBtn');
  var input = document.getElementById('consultInput');
  var chatContainer = document.getElementById('chatContainer');
  if (!sendBtn || !input || !chatContainer) return;
  if (sendBtn.dataset.aiConsultBound) return;

  sendBtn.dataset.aiConsultBound = 'true';
  resetConsultState();

  function addUserBubble(text) {
    var div = document.createElement('div');
    div.className = 'message user-message';
    div.style.cssText = 'background:rgba(37,99,235,0.2);border:1px solid rgba(37,99,235,0.4);padding:10px 14px;border-radius:14px;margin:8px 0;max-width:80%;margin-left:auto;color:#e2e8f0;font-size:0.9rem;';
    div.innerHTML = '<strong style="color:#93c5fd;">You:</strong> ' + text;
    chatContainer.appendChild(div);
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }

  function addBotBubble(html) {
    var div = document.createElement('div');
    div.className = 'message';
    div.style.cssText = 'margin:8px 0;';
    div.innerHTML = html;
    chatContainer.appendChild(div);
    chatContainer.scrollTop = chatContainer.scrollHeight;

    // Handle pill clicks inside bot messages
    div.querySelectorAll('.aiConsultPill').forEach(function(pill) {
      pill.addEventListener('click', function() {
        handleConsultQuery(pill.innerText);
      });
    });
  }

  function addTypingIndicator() {
    var div = document.createElement('div');
    div.id = 'aiConsultTyping';
    div.style.cssText = 'color:#94a3b8;font-size:0.85rem;padding:8px;font-style:italic;';
    div.innerHTML = '⚖️ Analyzing your situation...';
    chatContainer.appendChild(div);
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }

  function removeTypingIndicator() {
    var t = document.getElementById('aiConsultTyping');
    if (t) t.remove();
  }

  function handleConsultQuery(query) {
    if (!query || !query.trim()) return;
    addUserBubble(query);
    input.value = '';
    addTypingIndicator();

    setTimeout(function() {
      removeTypingIndicator();
      addBotBubble(getConsultReply(query));
    }, 600);
  }

  // Override send button
  sendBtn.onclick = function() { handleConsultQuery(input.value); };
  input.onkeypress = null;
  input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') handleConsultQuery(input.value);
  });

  // Override category pills (Cyber Harassment, Domestic Violence etc.)
  var pills = document.querySelectorAll('.cat-pill');
  for (var i = 0; i < pills.length; i++) {
    (function(pill) {
      pill.onclick = function() {
        handleConsultQuery(pill.getAttribute('data-topic') || pill.innerText);
      };
    })(pills[i]);
  }
}

// ── Auto-init ────────────────────────────────────────────────
function tryInitAIConsult() {
  initAIConsult();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', tryInitAIConsult);
} else {
  tryInitAIConsult();
}

setInterval(tryInitAIConsult, 800);
