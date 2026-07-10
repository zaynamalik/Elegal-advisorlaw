// ============================================================
//  E-Legal Advisor — Smart Search + Real Legal Consultation
//  15 Pakistan Scenarios | Professional Grade | Victim-Centered
// ============================================================

const EMERGENCY_SCENARIOS = [
  {
    keywords: ["domestic violence","husband beating","wife beating","ghar mein maar","shohar maar","family violence","spouse abuse","marital abuse"],
    title: "Domestic Violence",
    urgency: "HIGH", emergency: true,
    opening: "What you are going through is not your fault, and it is not something you have to accept. Pakistani law treats this as a serious crime, not a private family matter.",
    immediateAction: "Call 1099 (Women Helpline) or 15 (Police) RIGHT NOW if you are in danger.",
    rights: [
      "You have the right to file an FIR without a lawyer",
      "Police MUST register your case under the Domestic Violence Act 2021 — they cannot refuse",
      "You can get a Protection Order within 7 days from court",
      "You have the right to free shelter at Dar-ul-Aman"
    ],
    steps: [
      "① Get to a safe place — neighbour, relative, or any public place away from the abuser",
      "② Call 1099 (Women Helpline) — available 24/7, guidance in Urdu, can arrange shelter",
      "③ Go to the nearest police station and file an FIR — they CANNOT refuse under the 2021 Act",
      "④ Photograph any injuries immediately — this is your evidence",
      "⑤ If you have children, take them with you when you leave"
    ],
    mistakes: [
      "Do not go back alone to talk it out before reporting",
      "Do not delete injury photos or messages thinking they are not needed",
      "Do not sign any paper the abuser's family pressures you to sign"
    ],
    timeline: "FIR: same day (mandatory). Protection order from court: within 7 days.",
    cost: "Free — FIR registration, shelter at Dar-ul-Aman, and legal aid are all free of cost.",
    punishment: "Up to 1 year imprisonment plus fine under Domestic Violence Act 2021. Physical harm is additionally charged under PPC Section 337 with up to 7 years imprisonment.",
    laws: [
      { act: "Domestic Violence (Prevention & Protection) Act", year: "2021", meaning: "Criminalises physical, emotional and economic abuse by a spouse or family member" },
      { act: "PPC Section 337", year: "", meaning: "Punishment for causing hurt — up to 7 years imprisonment depending on severity" }
    ],
    documents: ["Your CNIC", "Photos of injuries", "Medical report if available", "Witness names (neighbours, family)"],
    helplines: [{ name: "Women Helpline", number: "1099" }, { name: "Police Emergency", number: "15" }, { name: "Edhi Foundation", number: "115" }],
    shelter: "Dar-ul-Aman shelters available in every district. Police or 1099 can take you there free.",
    nextStep: "Would you like help drafting an FIR for domestic violence? Click FIR Draft in the sidebar."
  },
  {
    keywords: ["rape","sexual assault","ziadti","zyadti","sexual abuse","molested","touched inappropriately","sexual violence","assault kiya","sexual attack"],
    title: "Sexual Violence",
    urgency: "CRITICAL", emergency: true,
    opening: "You are the victim here, and you have every right to justice. Nothing about what happened was your fault.",
    immediateAction: "Call 1099 or 15 immediately. Do NOT bathe or change clothes — this preserves critical evidence.",
    rights: [
      "You have the right to a female police officer during your statement",
      "Police CANNOT refuse your FIR under Anti-Rape Act 2021",
      "You have the right to a free medico-legal examination at any government hospital",
      "Your identity must be kept confidential by law throughout the case"
    ],
    steps: [
      "① Do NOT bathe, change clothes, or clean anything — DNA evidence is critical",
      "② Go to the nearest government hospital for a free medico-legal examination",
      "③ Call 1099 — they can send a female officer to assist you",
      "④ File FIR with a female officer present — police CANNOT refuse under the 2021 Act",
      "⑤ Keep the medico-legal report safe — it is your strongest evidence"
    ],
    mistakes: [
      "Do not shower or change clothing before the medical exam",
      "Do not let family pressure you into settling privately — this is a criminal offence",
      "Do not wait days to report — evidence and legal options weaken with delay"
    ],
    timeline: "Anti-Rape Act 2021 requires trial completion within 4 months of FIR registration.",
    cost: "Free — medico-legal exam, FIR registration, and government legal aid are all free.",
    punishment: "PPC Section 376: 10 years to life imprisonment. Death penalty applies when victim is a minor or in aggravated cases.",
    laws: [
      { act: "Anti-Rape (Investigation & Trial) Act", year: "2021", meaning: "Mandates fast-track courts and 4-month trial completion" },
      { act: "PPC Section 375-376", year: "", meaning: "Defines rape and prescribes 10 years to life imprisonment" }
    ],
    documents: ["Medico-legal examination report", "Your CNIC", "Original clothing in a sealed bag — do not wash", "Screenshots if any online harassment involved"],
    helplines: [{ name: "Women Helpline", number: "1099" }, { name: "Police Emergency", number: "15" }, { name: "Rescue / Ambulance", number: "1122" }],
    shelter: "Government shelter homes available through 1099 after reporting.",
    nextStep: "Would you like help drafting an FIR for this case? Click FIR Draft in the sidebar."
  },
  {
    keywords: ["acid attack","tezab","acid phenkna","acid violence","acid dalna","burned with acid","tezab attack"],
    title: "Acid Attack",
    urgency: "CRITICAL", emergency: true,
    opening: "This is a medical emergency first and a criminal case second. Let us get through both step by step.",
    immediateAction: "Call 1122 (Ambulance) IMMEDIATELY. Flush the burned area with clean running water for 20 minutes.",
    rights: [
      "This is a non-bailable offence — the attacker will be arrested immediately",
      "You have the right to compensation for medical treatment from the attacker",
      "Free long-term rehabilitation available through Acid Survivors Foundation"
    ],
    steps: [
      "① Call 1122 for ambulance immediately",
      "② Flush burned area with large amounts of clean water for at least 20 minutes — only water, nothing else",
      "③ Remove clothing and jewellery from the burned area carefully",
      "④ Go to Mayo Hospital Lahore / JPMC Karachi / PIMS Islamabad — specialist burn units",
      "⑤ After treatment, file FIR at the nearest police station",
      "⑥ Call Acid Survivors Foundation: 0800-22444 — free legal, medical and psychological support"
    ],
    mistakes: [
      "Do not apply ice — use running water only",
      "Do not delay calling 1122 to first find a private hospital — go to nearest emergency room",
      "Do not skip the FIR even if the attacker is a family member — it is required by law"
    ],
    timeline: "Investigation begins within 24 hours of FIR. Non-bailable arrest warrant issued immediately.",
    cost: "Free emergency treatment at government hospitals. Acid Survivors Foundation provides free long-term support.",
    punishment: "PPC Section 336-B: Life imprisonment or death penalty plus substantial fines payable to victim for medical costs.",
    laws: [
      { act: "Prevention of Acid Crime Act", year: "2011", meaning: "Makes acid attacks a non-bailable offence with life imprisonment" },
      { act: "PPC Section 336-A and 336-B", year: "", meaning: "Life imprisonment or death penalty plus victim compensation fines" }
    ],
    documents: ["Hospital medical reports", "CNIC", "Witness statements", "CCTV footage if available"],
    helplines: [{ name: "Rescue / Ambulance", number: "1122" }, { name: "Police", number: "15" }, { name: "Acid Survivors Foundation", number: "0800-22444" }],
    shelter: "Acid Survivors Foundation provides free long-term rehabilitation, reconstructive surgery and legal aid.",
    nextStep: "Would you like help drafting an FIR? Click FIR Draft in the sidebar."
  },
  {
    keywords: ["child abuse","bacha","child sexual abuse","bachay ke saath","child harassment","minor abuse","child molested","zainab alert","child rape"],
    title: "Child Abuse",
    urgency: "CRITICAL", emergency: true,
    opening: "A child's safety is the absolute priority. Pakistan's law has a fast-track process specifically for this — let's use it now.",
    immediateAction: "Call 1098 (Child Helpline) or 15 immediately. Remove the child from danger first.",
    rights: [
      "Police must register FIR within 2 hours under Zainab Alert Act 2020",
      "Child's identity must remain confidential by law throughout the case",
      "Free medical examination available at all government hospitals",
      "Free legal support available through Sahil NGO"
    ],
    steps: [
      "① Remove the child to a safe place immediately",
      "② Call 1098 — Child Protection Helpline, available 24/7",
      "③ Do NOT repeatedly question the child — reassure them it was not their fault",
      "④ Take child to a government hospital for a confidential medical examination",
      "⑤ File FIR at police station — under Zainab Alert Act police must register within 2 hours",
      "⑥ Contact Sahil NGO: 03008266653 for free legal support"
    ],
    mistakes: [
      "Do not interrogate the child repeatedly — this causes additional trauma",
      "Do not confront the suspected abuser yourself before involving police",
      "Do not post about the case on social media — it can compromise the legal process"
    ],
    timeline: "FIR registration: within 2 hours (legally mandated). Investigation completion: within 3 months.",
    cost: "Free — medical examination, FIR registration, and Sahil NGO legal support are all free.",
    punishment: "PPC Section 376: Life imprisonment or death penalty for child rape. Other abuse carries up to 14 years imprisonment.",
    laws: [
      { act: "Zainab Alert, Recovery and Response Act", year: "2020", meaning: "Police must respond within 2 hours and complete investigation within 3 months" },
      { act: "PPC Section 376", year: "", meaning: "Life imprisonment or death penalty for child sexual abuse" }
    ],
    documents: ["Child B-Form or birth certificate", "Medical examination report", "Witness statements", "Screenshots if online abuse"],
    helplines: [{ name: "Child Helpline", number: "1098" }, { name: "Police", number: "15" }, { name: "Sahil NGO", number: "03008266653" }],
    shelter: "Child Protection Bureaus in all major cities — immediate shelter available.",
    nextStep: "Would you like help drafting an FIR for this case? Click FIR Draft in the sidebar."
  },
  {
    keywords: ["kidnapping","kidnapped","abducted","agwa","agwa kar liya","missing person","child missing","person missing","ghayab","missing"],
    title: "Kidnapping / Missing Person",
    urgency: "CRITICAL", emergency: true,
    opening: "Every minute matters in this situation — let us move fast and methodically together.",
    immediateAction: "Call 15 (Police) immediately. Do not wait.",
    rights: [
      "Police must respond within 2 hours for missing children under Zainab Alert Act",
      "No mandatory 24-hour waiting period — you can and should report immediately",
      "You have the right to demand FIR registration on the spot"
    ],
    steps: [
      "① Call 15 (Police Emergency) immediately",
      "② For missing child — demand response within 2 hours under Zainab Alert Act 2020",
      "③ Provide: full name, last seen location, time, clothing description, recent photo",
      "④ Call the person's phone repeatedly — sometimes it helps locate them",
      "⑤ Share photo and last known location on social media immediately",
      "⑥ Go to police station in person if phone call is not taken seriously — demand FIR registration"
    ],
    mistakes: [
      "Do not wait 24 hours — report immediately, there is no mandatory waiting period",
      "Do not negotiate directly with a suspected kidnapper without police involvement",
      "Do not stop publicizing after filing — continued visibility helps recovery"
    ],
    timeline: "Missing children: police response mandated within 2 hours. Adults: immediate FIR should be registered.",
    cost: "Free — FIR registration and police investigation are free.",
    punishment: "PPC Section 364: Up to 14 years imprisonment for kidnapping with intent to harm. Ransom kidnapping: life imprisonment.",
    laws: [
      { act: "PPC Section 359-374", year: "", meaning: "Kidnapping and abduction — up to 14 years to life imprisonment" },
      { act: "Zainab Alert Act", year: "2020", meaning: "Fast-track recovery for missing children with 2-hour police response mandate" }
    ],
    documents: ["Recent photo of missing person", "Their CNIC or B-Form", "Last known location details", "List of their contacts"],
    helplines: [{ name: "Police Emergency", number: "15" }, { name: "Rescue", number: "1122" }, { name: "Child Helpline", number: "1098" }],
    shelter: null,
    nextStep: "Would you like help drafting a missing person complaint? Click FIR Draft in the sidebar."
  },
  {
    keywords: ["blackmail","nude photos","private videos","leaked photos","online blackmail","cyber blackmail","photos share","video leak","sextortion","social media blackmail","intimate photos"],
    title: "Online Blackmail / Cyber Harassment",
    urgency: "HIGH", emergency: false,
    opening: "This is happening to many people and there is a clear legal process to stop it. You are the victim — the person blackmailing you is the criminal.",
    immediateAction: "Do NOT pay any money. Take screenshots of everything first, then block the person.",
    rights: [
      "Sharing private images without consent is a criminal offence under PECA 2016",
      "FIA can get images removed from platforms within 24 to 48 hours of formal complaint",
      "You have the right to file a complaint without a lawyer",
      "Your identity will be protected during the FIA investigation"
    ],
    steps: [
      "① Do NOT pay money — paying never stops blackmailers, it encourages more demands",
      "② Screenshot all messages, threats and the blackmailer's profile RIGHT NOW before blocking",
      "③ Block the person on all platforms after taking screenshots",
      "④ Report to FIA Cybercrime: complaint.fia.gov.pk, phone 9911, or visit nearest FIA office",
      "⑤ File complaint under PECA 2016 — FIA can request platform removal quickly once complaint is logged"
    ],
    mistakes: [
      "Do not pay even a small amount — this confirms you can be pressured for more demands",
      "Do not delete the conversation before screenshotting — you need this as evidence",
      "Do not contact or argue with the blackmailer — route everything through FIA"
    ],
    timeline: "FIA complaint acknowledgment: 24 to 48 hours. Platform content removal: faster once FIA complaint number is attached.",
    cost: "Free — FIA complaint and investigation are completely free of cost.",
    punishment: "PECA Section 20 and 21: Up to 5 years imprisonment AND Rs. 10 million fine. This is a serious criminal offence, not a minor matter.",
    laws: [
      { act: "PECA Section 21", year: "2016", meaning: "Cyberstalking and online harassment — up to 3 years imprisonment" },
      { act: "PECA Section 20", year: "2016", meaning: "Violation of privacy including sharing private images — up to 5 years plus Rs. 10 million fine" }
    ],
    documents: ["Screenshots of all threatening messages", "Profile links and usernames of blackmailer", "Your CNIC", "Payment receipts if you already paid"],
    helplines: [{ name: "FIA Cybercrime", number: "9911" }, { name: "Women Helpline", number: "1099" }, { name: "Police", number: "15" }],
    shelter: null,
    nextStep: "Would you like help drafting a formal FIA complaint? Click FIR Draft in the sidebar."
  },
  {
    keywords: ["workplace harassment","office harassment","boss harassment","job harassment","sexual harassment at work","teacher harassment","professor harassment","harassment at university","harassment at job"],
    title: "Workplace / Academic Harassment",
    urgency: "MEDIUM", emergency: false,
    opening: "You have strong legal protection in Pakistan for exactly this situation, and a structured process to follow step by step.",
    immediateAction: "Document everything in writing immediately. Do not delete any messages.",
    rights: [
      "Every organisation with 10 or more employees must have an Inquiry Committee by law",
      "You cannot be fired for filing a harassment complaint",
      "You have the right to a confidential inquiry process",
      "Federal Ombudsman can intervene if organisation does not act within 30 days"
    ],
    steps: [
      "① Document EVERYTHING — save all messages, emails, dates, descriptions and witness names",
      "② File written complaint with HR or head of organisation — keep a dated copy for yourself",
      "③ If organisation does not act within 30 days, file with Federal Ombudsman: mohtasib.gov.pk, 051-9205514",
      "④ For university harassment, also file with HEC at hec.gov.pk",
      "⑤ You can additionally file FIR at police station under PPC Section 509",
      "⑥ Keep attending work — do not resign under pressure"
    ],
    mistakes: [
      "Do not resign immediately out of pressure — this weakens your legal position unnecessarily",
      "Do not rely only on verbal complaints — always submit in writing with a dated copy kept for yourself",
      "Do not confront the harasser alone without documentation already in place"
    ],
    timeline: "Inquiry committee must conclude within 30 days of written complaint under the 2010 Act.",
    cost: "Free — all official complaints are free. Lawyer needed only if case escalates to court (Rs. 5000 to 20000).",
    punishment: "PPC Section 509: Up to 3 years imprisonment plus fine. Harasser can also be forced to resign by the Inquiry Committee.",
    laws: [
      { act: "Protection Against Harassment of Women at Workplace Act", year: "2010", meaning: "Mandates inquiry committees and 30-day resolution in all organisations with 10 or more employees" },
      { act: "PPC Section 509", year: "", meaning: "Words or gestures intended to insult — up to 3 years imprisonment" }
    ],
    documents: ["Written complaint copy with date", "Screenshots of messages", "Email records", "Witness names and contact info"],
    helplines: [{ name: "Federal Ombudsman", number: "051-9205514" }, { name: "Women Helpline", number: "1099" }, { name: "Police", number: "15" }],
    shelter: null,
    nextStep: "Would you like help drafting a formal harassment complaint letter? Click FIR Draft in the sidebar."
  },
  {
    keywords: ["property dispute","zameen","land dispute","zameen ka jhagra","plot dispute","makaan","house dispute","qabza","illegal possession","forceful possession","property"],
    title: "Property / Land Dispute",
    urgency: "MEDIUM", emergency: false,
    opening: "Property disputes are very common in Pakistan. There is a clear legal path to protect your rights — let us secure your position step by step.",
    immediateAction: "Do NOT sign any documents under pressure. Secure all original property papers immediately.",
    rights: [
      "You have the right to file FIR for criminal trespass immediately",
      "You can obtain an injunction from Civil Court to stop illegal occupation",
      "Free legal aid is available through District Bar Association"
    ],
    steps: [
      "① Secure ALL original documents immediately — Fard, Registry, Mutation (Intiqal), NOC",
      "② If someone has illegally occupied your property, file FIR under PPC Section 447 at police station",
      "③ Get certified property record copies from local Patwari",
      "④ File civil suit in District Court for possession and declaration of rights",
      "⑤ Contact District Bar Association for free or low-cost legal aid"
    ],
    mistakes: [
      "Do not sign any compromise paper under pressure or urgency",
      "Do not vacate the property voluntarily while dispute is unresolved",
      "Do not rely on verbal assurances — get everything in writing"
    ],
    timeline: "Criminal trespass FIR: investigation within weeks. Civil possession suit: months depending on court schedule.",
    cost: "FIR: Free. Civil suit court fees: Rs. 500 to 2000. Lawyer: Rs. 10000 to 50000 depending on complexity.",
    punishment: "PPC Section 447 (Criminal Trespass): Up to 3 months imprisonment or fine. Civil court can restore full possession with compensation.",
    laws: [
      { act: "PPC Section 447", year: "", meaning: "Criminal trespass — up to 3 months imprisonment or fine" },
      { act: "Land Revenue Act", year: "1967", meaning: "Governs property records and Patwari authority over land records" }
    ],
    documents: ["Original Registry or Sale Deed", "Fard (land record)", "CNIC", "Mutation (Intiqal) papers", "Utility bills showing possession"],
    helplines: [{ name: "Police", number: "15" }, { name: "Punjab Land Records", number: "0800-02345" }, { name: "District Bar Association", number: "Visit locally" }],
    shelter: null,
    nextStep: "Would you like help drafting an FIR for illegal possession? Click FIR Draft in the sidebar."
  },
  {
    keywords: ["fraud","scam","cheating","paise le liye","money fraud","online fraud","investment fraud","fake job","job fraud","dhokebaazi","420","cheated","scammed"],
    title: "Fraud / Financial Scam",
    urgency: "HIGH", emergency: false,
    opening: "Stop right where you are — no more money should move until we secure what has already happened.",
    immediateAction: "Stop all payments immediately. Do NOT transfer any more money.",
    rights: [
      "You have the right to file FIR immediately under PPC Section 420",
      "Bank transfers can potentially be reversed within 24 to 48 hours — time is critical",
      "FIA Cybercrime handles online fraud cases and has authority to freeze accounts"
    ],
    steps: [
      "① Immediately stop all contact and payments with the fraudster",
      "② Screenshot all conversations, transaction receipts, contracts and bank transfers",
      "③ File FIR at nearest police station under PPC Section 420",
      "④ If online fraud, also report to FIA Cybercrime: complaint.fia.gov.pk or call 9911",
      "⑤ Contact your bank immediately — transfers can sometimes be reversed within 24 to 48 hours",
      "⑥ If job scam, also report to NADRA and the company whose name was misused"
    ],
    mistakes: [
      "Do not wait hoping the fraudster will make it right — report immediately while bank reversal is still possible",
      "Do not continue communicating expecting resolution from the fraudster",
      "Do not share any more personal or financial information with them"
    ],
    timeline: "Bank reversal most successful within 24 to 48 hours. FIA acknowledgment: 24 to 48 hours. Police investigation: weeks.",
    cost: "Free — FIR registration, FIA complaint, and bank reversal request are all free.",
    punishment: "PPC Section 420: Up to 7 years imprisonment. Online fraud under PECA 2016 carries additional penalties up to Rs. 10 million fine.",
    laws: [
      { act: "PPC Section 420", year: "", meaning: "Cheating and dishonestly inducing delivery of property — up to 7 years imprisonment" },
      { act: "PECA 2016", year: "", meaning: "Online fraud carries additional penalties including fines up to Rs. 10 million" }
    ],
    documents: ["Transaction receipts and bank statements", "Screenshots of all communications", "Any contracts signed", "CNIC", "Fraudster contact details if known"],
    helplines: [{ name: "Police", number: "15" }, { name: "FIA Cybercrime", number: "9911" }, { name: "Your Bank Helpline", number: "Check back of your card" }],
    shelter: null,
    nextStep: "Would you like help drafting an FIR for fraud? Click FIR Draft in the sidebar."
  },
  {
    keywords: ["drug arrest","drugs","narcotics","caught with drugs","nasha","charas","heroin","drug case","arrested for drugs","drug possession"],
    title: "Drug Arrest / Narcotics Case",
    urgency: "HIGH", emergency: false,
    opening: "This is a serious situation, but you have clear constitutional rights that must be respected from this moment forward.",
    immediateAction: "Do NOT make any statement to police without a lawyer present. This is your legal right.",
    rights: [
      "You have the right to remain silent under Article 13 of the Constitution",
      "Police must produce you before a magistrate within 24 hours under Article 10",
      "You have the right to a lawyer — court must provide one free if you cannot afford it under Article 10-A",
      "You have the right to inform a family member of your arrest immediately"
    ],
    steps: [
      "① Exercise your right to silence — do not confess or make any statement without a lawyer",
      "② Immediately ask to contact a family member — this is your legal right",
      "③ Note the name and badge number of the arresting officer",
      "④ Your lawyer must be present before you sign any document",
      "⑤ Police must produce you before a magistrate within 24 hours — if this does not happen, family can file Habeas Corpus in High Court"
    ],
    mistakes: [
      "Do not sign any statement without a lawyer reading it first",
      "Do not attempt to bribe officers — this adds a second criminal charge",
      "Do not assume staying silent makes you look guilty — it is your legal right"
    ],
    timeline: "Constitutional requirement: produced before magistrate within 24 hours of arrest.",
    cost: "Free court-appointed lawyer available if you cannot afford one. Court fees apply later if case proceeds.",
    punishment: "CNSA 1997: Small quantity possession — up to 2 years. Trafficking or large quantities — life imprisonment in extreme cases.",
    laws: [
      { act: "Control of Narcotic Substances Act (CNSA)", year: "1997", meaning: "Governs all drug-related offences from possession to trafficking" },
      { act: "Constitution Article 10", year: "", meaning: "Must be produced before magistrate within 24 hours of arrest" }
    ],
    documents: ["CNIC", "Note arresting officer name and badge number", "Contact lawyer immediately"],
    helplines: [{ name: "Police", number: "15" }, { name: "Legal Aid Pakistan", number: "051-111-119-119" }],
    shelter: null,
    nextStep: "Contact a lawyer immediately. Legal Aid Pakistan (051-111-119-119) provides free legal assistance."
  },
  {
    keywords: ["forced marriage","jabri shadi","shadi nahi karni","forced nikah","underage marriage","child marriage","watta satta","honor killing","izzat ke naam pe","marrying by force"],
    title: "Forced Marriage / Child Marriage",
    urgency: "HIGH", emergency: true,
    opening: "Your consent matters, and the law is completely on your side here. You have real options even if it does not feel that way right now.",
    immediateAction: "Call 1099 (Women Helpline) immediately if you are being forced.",
    rights: [
      "Your consent is required for a valid nikah — forced nikah is legally invalid",
      "Marriage under 18 is illegal under Child Marriage Restraint Act 2019",
      "You can seek a Protection Order from District Court before the ceremony",
      "You have the right to dissolve a forced marriage through Family Court"
    ],
    steps: [
      "① If in immediate danger, call 1099 or 15 right now",
      "② Marriage under 18 is illegal — it can be declared void by court",
      "③ Forced nikah without your consent is legally invalid under Muslim Family Laws",
      "④ Contact Rozan Counselling: 051-2890505 — they specialise in forced marriage cases",
      "⑤ Seek Protection Order from District Court to prevent the forced marriage before it happens",
      "⑥ If already married by force, file for dissolution in Family Court"
    ],
    mistakes: [
      "Do not sign the Nikah Nama under pressure without legal advice if there is still time",
      "Do not assume it is too late once family pressure has started — protection orders can still be sought",
      "Do not isolate yourself — keep your phone and a trusted contact accessible at all times"
    ],
    timeline: "Protection orders from District Court can be sought urgently before a ceremony takes place.",
    cost: "Free — 1099 helpline, shelter, and legal aid for forced marriage cases are free.",
    punishment: "PPC Section 498-B: Up to 5 years imprisonment for forcing marriage. Child marriage facilitators face fines and imprisonment under the 2019 Act.",
    laws: [
      { act: "Child Marriage Restraint Act", year: "2019", meaning: "Marriage under 18 is illegal — carries fines and imprisonment for those facilitating it" },
      { act: "PPC Section 498-B", year: "", meaning: "Forcing a person into marriage — up to 5 years imprisonment" }
    ],
    documents: ["Your CNIC or B-Form", "Nikah Nama if already married", "Any written threats received"],
    helplines: [{ name: "Women Helpline", number: "1099" }, { name: "Police", number: "15" }, { name: "Rozan Counselling", number: "051-2890505" }],
    shelter: "Dar-ul-Aman shelters available through 1099 call.",
    nextStep: "Would you like help with a protection order application? Click FIR Draft in the sidebar."
  },
  {
    keywords: ["police brutality","wrongful arrest","police beating","illegal detention","false case","fake case","police ne pakad liya","illegal arrest","police torture","police misconduct"],
    title: "Police Misconduct / Wrongful Arrest",
    urgency: "HIGH", emergency: false,
    opening: "Even against the police, your constitutional rights still fully apply and there are real official channels to hold them accountable.",
    immediateAction: "Note the officer name and badge number immediately. Inform a family member of your location.",
    rights: [
      "You cannot be detained more than 24 hours without magistrate production under Article 10",
      "Your family can file Habeas Corpus in High Court if police hold you illegally",
      "You have the right to medical examination if you were assaulted",
      "You can file FIR against police officers for assault under PPC Section 330"
    ],
    steps: [
      "① Note officer name, badge number and police station immediately",
      "② You CANNOT be held more than 24 hours without magistrate production — Article 10 Constitution",
      "③ Family member can file Habeas Corpus petition in High Court if held illegally",
      "④ Get medical examination immediately upon release — injuries serve as evidence",
      "⑤ File complaint with SSP of your district, Police Complaint Authority, or HRCP: 051-9204688",
      "⑥ File FIR against officers for assault under PPC Section 330"
    ],
    mistakes: [
      "Do not skip noting officer details — accountability becomes very difficult without these",
      "Do not delay the medical exam after release — injuries fade and lose evidentiary value quickly",
      "Do not assume nothing can be done against police — Habeas Corpus and HRCP are real, effective mechanisms"
    ],
    timeline: "Constitutional limit: 24 hours before magistrate production. Habeas Corpus petitions heard urgently by High Courts.",
    cost: "Free — Habeas Corpus petition and HRCP complaints are free. Lawyer for Habeas Corpus: Rs. 5000 to 15000.",
    punishment: "PPC Section 330: Imprisonment for officers found guilty of torture. Dismissal through Police Complaint Authority proceedings.",
    laws: [
      { act: "Constitution of Pakistan Article 9, 10, 14", year: "", meaning: "Right to life, right against illegal detention, right to dignity — all protected against police" },
      { act: "PPC Section 330", year: "", meaning: "Causing hurt to extort confession — police officers face imprisonment" }
    ],
    documents: ["Officer name and badge number", "Date, time and location of incident", "Medical report of injuries", "Witness names"],
    helplines: [{ name: "Human Rights Commission", number: "051-9204688" }, { name: "Police Complaint", number: "15" }, { name: "Legal Aid", number: "051-111-119-119" }],
    shelter: null,
    nextStep: "Would you like help drafting a formal complaint against the officer? Click FIR Draft in the sidebar."
  },
  {
    keywords: ["inheritance","wirasat","jaidad","haq mera nahi de rahe","will","wasiyat","property after death","father died","mother died property","sisters inheritance","daughters right","wirasat ka haq"],
    title: "Inheritance / Wirasat Dispute",
    urgency: "MEDIUM", emergency: false,
    opening: "Your inheritance share is a legal right guaranteed by both Pakistani law and Islamic law — not a favour anyone is granting you.",
    immediateAction: "Do not sign any documents transferring your share before consulting a lawyer.",
    rights: [
      "Daughters have a guaranteed share equal to half of a son's share — this cannot legally be denied",
      "Your right to inheritance does not expire over time",
      "You can file for partition in Civil Court if family refuses to share",
      "Free legal aid is available through Aurat Foundation specifically for women"
    ],
    steps: [
      "① Do NOT sign any waiver document giving up your share, even informally or to keep peace",
      "② Get a Legal Heir Certificate from NADRA or Union Council listing all legal heirs",
      "③ Get property records from local Patwari or Land Record office",
      "④ If family refuses your share, file suit for Partition in District Civil Court",
      "⑤ Contact Aurat Foundation for free legal aid: 051-2891350"
    ],
    mistakes: [
      "Do not sign any waiver to keep peace in the family — this permanently removes your legal right",
      "Do not accept verbal promises of future compensation instead of your actual legal share",
      "Do not delay indefinitely — while the right does not expire, evidence becomes harder to establish over time"
    ],
    timeline: "Legal Heir Certificate from NADRA: 1 to 2 weeks. Partition suit in civil court: months depending on complexity.",
    cost: "NADRA heir certificate: low cost. Aurat Foundation provides free legal aid for women. Civil court fees Rs. 500 to 2000.",
    punishment: "Inheritance denial is a civil matter resolved through partition suits. Illegal occupation of your share can additionally be charged under PPC Section 447 (Criminal Trespass).",
    laws: [
      { act: "Muslim Family Laws Ordinance", year: "1961", meaning: "Governs inheritance shares — daughters receive half of son's share as guaranteed minimum" },
      { act: "West Pakistan Muslim Personal Law", year: "1962", meaning: "Makes Islamic inheritance shares legally enforceable through Pakistani courts" }
    ],
    documents: ["Death certificate of deceased", "Legal Heir Certificate from NADRA", "Property documents", "Your CNIC", "Family registration certificate"],
    helplines: [{ name: "NADRA", number: "051-111-786-100" }, { name: "Aurat Foundation", number: "051-2891350" }, { name: "District Court", number: "Visit locally" }],
    shelter: null,
    nextStep: "Would you like help drafting a partition claim letter? Click FIR Draft in the sidebar."
  },
  {
    keywords: ["landlord","tenant","rent","kiraya","makaan khali karo","eviction","security deposit","deposit wapas","ghar se nikal","illegal eviction","rented house","rental"],
    title: "Tenant / Landlord Dispute",
    urgency: "MEDIUM", emergency: false,
    opening: "Both tenants and landlords have clear rights under Pakistani law — let us identify exactly where you stand and what to do next.",
    immediateAction: "Do not vacate the property under verbal pressure. A court order is required for legal eviction.",
    rights: [
      "Landlord CANNOT evict you without a court order — even if rent is overdue",
      "Cutting electricity or water without a court order is itself a criminal offence",
      "Security deposit is legally recoverable through Rent Controller",
      "A tenant cannot be physically removed without police involvement following a court order"
    ],
    steps: [
      "FOR TENANTS being illegally evicted:",
      "① Landlord CANNOT evict you without a court order. Cutting utilities is an additional offence.",
      "② File complaint with Rent Controller at District Court immediately",
      "③ If physically threatened, call 15 and file FIR",
      "",
      "FOR LANDLORDS not getting rent or property back:",
      "① Send formal written notice via registered post giving 30 days notice minimum",
      "② File eviction suit before Rent Controller in District Court",
      "③ Court issues eviction order — police then legally execute it",
      "",
      "FOR SECURITY DEPOSIT disputes:",
      "① File recovery claim with Small Claims Court or Rent Controller",
      "② Keep all payment receipts and rental agreements as evidence"
    ],
    mistakes: [
      "Tenants: do not vacate voluntarily under verbal pressure — insist on a written court order first",
      "Do not pay rent in cash without keeping receipts — these become critical evidence",
      "Landlords: do not cut utilities or change locks without court order — this becomes an offence against you"
    ],
    timeline: "Eviction suits before Rent Controller: few months depending on court schedule. Notice period: 30 days minimum.",
    cost: "Rent Controller filing: Rs. 500 to 1000. Lawyer if case is contested: Rs. 10000 to 30000.",
    punishment: "Illegal eviction or utility cut by landlord: PPC Section 441 (Criminal Trespass) — fines and potential imprisonment.",
    laws: [
      { act: "Punjab Rented Premises Act", year: "2009", meaning: "Governs landlord-tenant rights, eviction procedures and rent disputes in Punjab" },
      { act: "PPC Section 441", year: "", meaning: "Criminal trespass by landlord — fines and imprisonment" }
    ],
    documents: ["Rental agreement or lease contract", "Payment receipts", "CNIC", "Written notices exchanged", "Property ownership documents if landlord"],
    helplines: [{ name: "Police", number: "15" }, { name: "Rent Controller", number: "Visit District Court" }, { name: "Legal Aid", number: "051-111-119-119" }],
    shelter: null,
    nextStep: "Would you like help drafting a formal notice or complaint? Click FIR Draft in the sidebar."
  },
  {
    keywords: ["suicide","khudkushi","self harm","depression","khatam karna chahta","jeena nahi chahta","zindagi khatam","mental health","koi nahi hai","akela","help me","I want to die","mar jana chahta","zindagi se tang"],
    title: "You Matter — Help Is Here",
    urgency: "CRITICAL", emergency: true,
    opening: "Please stop for a moment. Whatever you are feeling right now — it is real, it is valid, and there is support available for exactly this moment.",
    immediateAction: "Call Umang helpline: 0317-4288665. You are not alone.",
    rights: [
      "Suicide attempts were decriminalized in Pakistan — you will NOT be arrested for seeking help",
      "Mental health treatment is available free at government psychiatric hospitals",
      "Your call to helplines is completely confidential"
    ],
    steps: [
      "Please call right now:",
      "Umang Mental Health Helpline: 0317-4288665",
      "Rozan Counselling: 051-2890505",
      "Rescue: 1122",
      "",
      "You do not have to explain everything. Just call and say: I need help. That is enough.",
      "",
      "If you are with someone right now — please tell them how you are feeling.",
      "If you are alone — please move to a place where there are other people nearby."
    ],
    mistakes: [],
    timeline: "",
    cost: "Free — all helplines and government psychiatric hospitals are completely free of cost.",
    punishment: "You will NOT face any legal consequences for seeking help. Suicide attempts were decriminalized in Pakistan.",
    laws: [
      { act: "Mental Health Ordinance", year: "2001", meaning: "Governs mental health care and protects people seeking help — no criminalisation applies" }
    ],
    documents: [],
    helplines: [{ name: "Umang Helpline", number: "0317-4288665" }, { name: "Rozan Counselling", number: "051-2890505" }, { name: "Rescue", number: "1122" }],
    shelter: "Government psychiatric hospitals provide free inpatient care. Rescue 1122 can assist.",
    nextStep: "Please make that call. Umang: 0317-4288665"
  }
];

// ── Match scenario from any query ────────────────────────────
function matchScenario(query) {
  if (!query) return null;
  var q = query.toLowerCase().trim();
  for (var i = 0; i < EMERGENCY_SCENARIOS.length; i++) {
    var s = EMERGENCY_SCENARIOS[i];
    for (var j = 0; j < s.keywords.length; j++) {
      if (q.includes(s.keywords[j].toLowerCase())) return s;
    }
  }
  for (var i = 0; i < EMERGENCY_SCENARIOS.length; i++) {
    var s = EMERGENCY_SCENARIOS[i];
    for (var j = 0; j < s.keywords.length; j++) {
      var words = s.keywords[j].toLowerCase().split(' ');
      for (var k = 0; k < words.length; k++) {
        if (words[k].length > 3 && q.includes(words[k])) return s;
      }
    }
  }
  return null;
}

// ── Build the professional consultation response card ─────────
function buildConsultResponse(scenario) {
  var urgencyColor = scenario.urgency === 'CRITICAL' ? '#ef4444' : scenario.urgency === 'HIGH' ? '#f97316' : '#f59e0b';

  var lawsHTML = '';
  for (var i = 0; i < scenario.laws.length; i++) {
    var l = scenario.laws[i];
    lawsHTML += '<div style="margin:5px 0;padding:8px;background:rgba(251,191,36,0.07);border-radius:8px;border-left:3px solid #fbbf24;">' +
      '<span style="color:#fde68a;font-weight:600;">• ' + l.act + (l.year ? ' ' + l.year : '') + '</span>' +
      '<div style="color:#fef3c7;font-size:0.81rem;margin-top:2px;">' + l.meaning + '</div></div>';
  }

  var rightsHTML = '';
  if (scenario.rights) {
    for (var i = 0; i < scenario.rights.length; i++) {
      rightsHTML += '<div style="color:#86efac;font-size:0.85rem;padding:3px 0;">✓ ' + scenario.rights[i] + '</div>';
    }
  }

  var stepsHTML = '';
  for (var i = 0; i < scenario.steps.length; i++) {
    stepsHTML += scenario.steps[i] ?
      '<div style="color:#e2e8f0;font-size:0.86rem;padding:3px 0;line-height:1.6;">' + scenario.steps[i] + '</div>' :
      '<div style="height:6px;"></div>';
  }

  var mistakesHTML = '';
  if (scenario.mistakes && scenario.mistakes.length > 0) {
    mistakesHTML = '<div style="margin-top:10px;padding:10px;background:rgba(239,68,68,0.07);border-radius:10px;border:1px solid rgba(239,68,68,0.22);">' +
      '<div style="color:#fca5a5;font-weight:600;font-size:0.8rem;margin-bottom:5px;">MISTAKES TO AVOID</div>';
    for (var i = 0; i < scenario.mistakes.length; i++) {
      mistakesHTML += '<div style="color:#fecaca;font-size:0.81rem;padding:2px 0;">✗ ' + scenario.mistakes[i] + '</div>';
    }
    mistakesHTML += '</div>';
  }

  var docsHTML = '';
  if (scenario.documents && scenario.documents.length > 0) {
    docsHTML = '<div style="margin-top:10px;padding:10px;background:rgba(99,102,241,0.07);border-radius:10px;border:1px solid rgba(99,102,241,0.22);">' +
      '<div style="color:#a5b4fc;font-weight:600;font-size:0.8rem;margin-bottom:5px;">DOCUMENTS TO COLLECT</div>';
    for (var i = 0; i < scenario.documents.length; i++) {
      docsHTML += '<div style="color:#c7d2fe;font-size:0.81rem;padding:2px 0;">✓ ' + scenario.documents[i] + '</div>';
    }
    docsHTML += '</div>';
  }

  var helplinesHTML = '';
  for (var i = 0; i < scenario.helplines.length; i++) {
    var h = scenario.helplines[i];
    helplinesHTML += '<a href="tel:' + h.number + '" style="display:inline-flex;align-items:center;gap:4px;background:rgba(239,68,68,0.14);border:1px solid rgba(239,68,68,0.38);color:#fca5a5;padding:5px 11px;border-radius:28px;text-decoration:none;font-weight:600;font-size:0.8rem;margin:3px;">📞 ' + h.name + ': ' + h.number + '</a>';
  }

  var lawNames = scenario.laws.map(function(l) { return l.act; }).join(', ');

  return '<div style="background:rgba(8,12,28,0.97);border:2px solid ' + urgencyColor + ';border-radius:16px;padding:15px;margin:8px 0;">' +

    '<div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;">' +
    '<span style="background:' + urgencyColor + ';color:white;padding:2px 9px;border-radius:18px;font-size:0.68rem;font-weight:700;">' + scenario.urgency + ' PRIORITY</span>' +
    '<span style="color:white;font-weight:700;font-size:0.95rem;">⚖️ LEGAL ADVISOR ANALYSIS — ' + scenario.title + '</span></div>' +

    '<div style="background:rgba(255,255,255,0.04);border-radius:9px;padding:10px;margin-bottom:9px;">' +
    '<div style="color:#93c5fd;font-weight:700;font-size:0.75rem;margin-bottom:4px;">🧭 SITUATION SUMMARY</div>' +
    '<div style="color:#cbd5e1;font-size:0.86rem;font-style:italic;">' + scenario.opening + '</div></div>' +

    (scenario.emergency ? '<div style="background:rgba(239,68,68,0.14);border:1px solid rgba(239,68,68,0.38);border-radius:9px;padding:9px;margin-bottom:9px;">' +
    '<div style="color:#fca5a5;font-weight:700;font-size:0.75rem;">⚡ IMMEDIATE ACTION REQUIRED</div>' +
    '<div style="color:#fee2e2;font-size:0.86rem;margin-top:3px;">' + scenario.immediateAction + '</div></div>' : '') +

    (rightsHTML ? '<div style="background:rgba(16,185,129,0.05);border-radius:9px;padding:10px;margin-bottom:9px;border:1px solid rgba(16,185,129,0.18);">' +
    '<div style="color:#6ee7b7;font-weight:700;font-size:0.75rem;margin-bottom:5px;">✅ YOUR RIGHTS</div>' +
    rightsHTML + '</div>' : '') +

    '<div style="margin-bottom:9px;">' +
    '<div style="color:#fbbf24;font-weight:700;font-size:0.75rem;margin-bottom:5px;">📖 APPLICABLE LAW</div>' +
    lawsHTML + '</div>' +

    '<div style="background:rgba(255,255,255,0.04);border-radius:9px;padding:10px;margin-bottom:9px;">' +
    '<div style="color:#93c5fd;font-weight:700;font-size:0.75rem;margin-bottom:6px;">📋 RECOMMENDED STEPS (in order)</div>' +
    stepsHTML + '</div>' +

    '<div style="display:flex;gap:7px;margin-bottom:9px;flex-wrap:wrap;">' +
    (scenario.timeline ? '<div style="flex:1;min-width:140px;padding:9px;background:rgba(96,165,250,0.07);border-radius:9px;border:1px solid rgba(96,165,250,0.18);"><div style="color:#93c5fd;font-size:0.72rem;font-weight:700;">⏱ TYPICAL TIMELINE</div><div style="color:#bfdbfe;font-size:0.8rem;margin-top:2px;">' + scenario.timeline + '</div></div>' : '') +
    (scenario.cost ? '<div style="flex:1;min-width:140px;padding:9px;background:rgba(16,185,129,0.07);border-radius:9px;border:1px solid rgba(16,185,129,0.18);"><div style="color:#6ee7b7;font-size:0.72rem;font-weight:700;">💰 ESTIMATED COST</div><div style="color:#a7f3d0;font-size:0.8rem;margin-top:2px;">' + scenario.cost + '</div></div>' : '') +
    '</div>' +

    (scenario.punishment ? '<div style="margin-bottom:9px;padding:10px;background:rgba(220,38,38,0.09);border-radius:9px;border:2px solid rgba(220,38,38,0.32);">' +
    '<div style="color:#fee2e2;font-weight:700;font-size:0.75rem;margin-bottom:4px;">⚖️ PENALTY FOR THE OFFENDER</div>' +
    '<div style="color:#fecaca;font-size:0.84rem;">' + scenario.punishment + '</div></div>' : '') +

    mistakesHTML + docsHTML +

    '<div style="margin-top:10px;">' +
    '<div style="color:#f87171;font-weight:700;font-size:0.75rem;margin-bottom:5px;">📞 IMMEDIATE HELP — tap to call</div>' +
    '<div style="display:flex;flex-wrap:wrap;gap:3px;">' + helplinesHTML + '</div></div>' +

    '<div style="margin-top:9px;padding:9px;background:rgba(59,130,246,0.05);border-radius:9px;border:1px solid rgba(59,130,246,0.18);">' +
    '<div style="color:#93c5fd;font-size:0.72rem;font-weight:700;margin-bottom:3px;">🔎 HOW WE REACHED THIS</div>' +
    '<div style="color:#bfdbfe;font-size:0.76rem;">Your situation → ' + scenario.title + ' → Matched Pakistani law database → Guidance generated</div>' +
    '<div style="color:#7dd3fc;font-size:0.72rem;margin-top:2px;">Confidence: High — based on ' + lawNames + '</div></div>' +

    (scenario.nextStep ? '<div style="margin-top:9px;padding:9px;background:rgba(139,92,246,0.09);border-radius:9px;border:1px solid rgba(139,92,246,0.28);color:#c4b5fd;font-size:0.8rem;">💬 <strong>Next Step:</strong> ' + scenario.nextStep + '</div>' : '') +

    '<div style="margin-top:9px;padding:7px;background:rgba(255,255,255,0.02);border-radius:7px;color:#94a3b8;font-size:0.72rem;text-align:center;">⚠️ Disclaimer: This is general legal guidance based on Pakistani law, not a substitute for a licensed lawyer. For urgent danger, contact police (15) immediately.</div>' +

    '</div>';
}

// ── Home search bar integration ────────────────────────────────
function initEmergencySearch() {
  var searchInput = document.getElementById('homeSearchInput');
  if (!searchInput || searchInput.dataset.emergencyBound) return;
  searchInput.dataset.emergencyBound = 'true';

  searchInput.placeholder = 'Describe your emergency or legal situation...';

  var resultContainer = document.getElementById('emergencySearchResult');
  if (!resultContainer) {
    resultContainer = document.createElement('div');
    resultContainer.id = 'emergencySearchResult';
    if (searchInput.parentElement && searchInput.parentElement.parentElement) {
      searchInput.parentElement.parentElement.appendChild(resultContainer);
    }
  }

  function handleSearch() {
    var query = searchInput.value.trim();
    if (!query) return;
    var scenario = matchScenario(query);
    resultContainer.innerHTML = scenario ? buildConsultResponse(scenario) :
      '<div style="margin-top:14px;padding:14px;background:rgba(12,18,34,0.8);border:1px solid rgba(96,165,250,0.28);border-radius:14px;color:#93c5fd;">' +
      '<div style="font-weight:600;margin-bottom:7px;">No exact match found.</div>' +
      '<div style="font-size:0.87rem;color:#cbd5e1;">Try describing more specifically. Examples:<br>• "husband is beating me"<br>• "I was blackmailed with photos"<br>• "acid attack happened"<br>• "property dispute with brother"<br>• "police arrested me wrongly"</div></div>';
    resultContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  searchInput.addEventListener('keypress', function(e) { if (e.key === 'Enter') handleSearch(); });

  if (!document.getElementById('emergencySearchBtn')) {
    var btn = document.createElement('button');
    btn.id = 'emergencySearchBtn';
    btn.innerHTML = '<i class="fas fa-search"></i>';
    btn.style.cssText = 'background:linear-gradient(105deg,#2563eb,#1e40af);border:none;padding:0.7rem 1.2rem;border-radius:40px;color:white;cursor:pointer;margin-left:8px;font-size:1rem;';
    btn.addEventListener('click', handleSearch);
    if (searchInput.parentElement) searchInput.parentElement.appendChild(btn);
  }
}
// ── Run and keep checking for SPA re-renders ─────────────────
function tryInitAll() {
  initEmergencySearch();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', tryInitAll);
} else {
  tryInitAll();
}
setInterval(tryInitAll, 800);

window.elegalBotReply = window.elegalBotReply || function(t) { var s=matchScenario(t); return s?buildConsultResponse(s):''; };