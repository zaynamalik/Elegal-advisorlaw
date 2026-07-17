// ============================================================
// E-Legal Advisor — AI Legal Consultation (Conversational)
// Separate file — only affects AI Consult tab
// Does NOT affect Home search bar
// v2: 19 scenarios, deeper Q&A, Urdu keywords, case summary card
// ============================================================

var CONSULT_FLOWS = {
  "domestic violence": {
    category: "Domestic Violence",
    color: "#f97316",
    questions: [
      "Are you currently in a safe place, or are you still at home with the person harming you?",
      "Has this happened before, or is this the first incident?",
      "Do you have any injuries right now that need medical attention?",
      "Do you have children who witnessed or are affected by this?",
      "Do you have family or friends nearby who can support you right now?",
    ],
    guidance: [
      "① Call 1099 (Women Helpline) — available 24/7, free, guidance in Urdu. They can also arrange shelter.",
      "② File an FIR at the nearest police station under the Domestic Violence Act 2021. The police CANNOT refuse.",
      "③ You can apply for a Protection Order from court — this legally prohibits the abuser from coming near you.",
      "④ Dar-ul-Aman shelters are available in every city if you need a safe place to stay.",
      "⑤ If children are involved, note this — it strengthens custody and protection order applications.",
    ],
    laws: "Domestic Violence (Prevention & Protection) Act 2021 | PPC Section 337",
    punishment:
      "Up to 1 year imprisonment + fine. Physical harm additionally charged under PPC Section 337 with up to 7 years.",
    helplines: [
      { name: "Women Helpline", number: "1099" },
      { name: "Police", number: "15" },
      { name: "Edhi Foundation", number: "115" },
    ],
  },

  harassment: {
    category: "Harassment",
    color: "#f97316",
    questions: [
      "Is this happening at your workplace, university, or somewhere else?",
      "Is the person harassing you someone in authority over you — like a boss, teacher, or supervisor?",
      "Do you have any messages, emails or witnesses that can support your complaint?",
      "Have you already reported this to anyone at your organisation?",
      "Is the harassment verbal, physical, or both?",
    ],
    guidance: [
      "① Write down every incident with date, time, location and what was said or done.",
      "② File a written complaint with HR or the head of your organisation — keep a copy with the date.",
      "③ If the organisation does not act within 30 days, escalate to the Federal Ombudsman at mohtasib.gov.pk.",
      "④ For university harassment, also file with HEC at hec.gov.pk.",
      "⑤ You can additionally file FIR under PPC Section 509.",
    ],
    laws: "Protection Against Harassment of Women at Workplace Act 2010 | PPC Section 509",
    punishment:
      "Up to 3 years imprisonment + fine. Harasser can be forced to resign by the Inquiry Committee.",
    helplines: [
      { name: "Federal Ombudsman", number: "051-9205514" },
      { name: "Women Helpline", number: "1099" },
      { name: "Police", number: "15" },
    ],
  },

  blackmail: {
    category: "Cyber Blackmail",
    color: "#ef4444",
    questions: [
      "Has the person already shared anything, or are they only threatening to share?",
      "Do you know who this person is, or is it an anonymous account?",
      "Have you paid any money to them so far?",
      "What platform is this happening on — WhatsApp, Instagram, Facebook, or something else?",
      "Do you still have the original messages, or have you deleted anything?",
    ],
    guidance: [
      "① Do NOT pay any money — paying never stops blackmailers, it encourages more demands.",
      "② Screenshot ALL messages and the person's profile RIGHT NOW before blocking.",
      "③ Block them on all platforms after taking screenshots.",
      "④ File complaint with FIA Cybercrime: complaint.fia.gov.pk or call 9911.",
      "⑤ If images are already shared, FIA can request removal from platforms — this moves faster once a formal complaint is logged.",
    ],
    laws: "PECA 2016 Section 20 (Privacy Violation) | Section 21 (Cyberstalking)",
    punishment:
      "Up to 5 years imprisonment AND Rs. 10 million fine under PECA 2016.",
    helplines: [
      { name: "FIA Cybercrime", number: "9911" },
      { name: "Women Helpline", number: "1099" },
      { name: "Police", number: "15" },
    ],
  },

  fraud: {
    category: "Fraud / Financial Scam",
    color: "#f97316",
    questions: [
      "How much money was involved, and how was it transferred — bank transfer, cash, or online?",
      "Do you have any receipts, screenshots or contracts showing the transaction?",
      "How long ago did this happen?",
      "Do you know the identity of the person, or was it anonymous?",
      "Have you already contacted your bank about this?",
    ],
    guidance: [
      "① Stop all contact and payments with the fraudster immediately.",
      "② Contact your bank right away — transfers can sometimes be reversed within 24-48 hours.",
      "③ File FIR at the nearest police station under PPC Section 420.",
      "④ If online fraud, also report to FIA Cybercrime at complaint.fia.gov.pk or 9911.",
      "⑤ Save all evidence — receipts, messages, screenshots, contracts.",
    ],
    laws: "PPC Section 420 (Cheating) | PECA 2016 (Online Fraud)",
    punishment:
      "Up to 7 years imprisonment under PPC Section 420. Online fraud carries additional Rs. 10 million fine.",
    helplines: [
      { name: "Police", number: "15" },
      { name: "FIA Cybercrime", number: "9911" },
      { name: "Your Bank", number: "Check card back" },
    ],
  },

  property: {
    category: "Property / Land Dispute",
    color: "#f59e0b",
    questions: [
      "Is someone illegally occupying your property, or is this a dispute over ownership?",
      "Do you have the original property documents — Registry, Fard, Mutation?",
      "Is the other party a family member or an outsider?",
      "Has any force or threats been used to occupy the property?",
      "Has this been reported to police or the local Patwari before?",
    ],
    guidance: [
      "① Secure ALL original documents immediately — Registry, Fard, Mutation (Intiqal), NOC.",
      "② If someone has illegally occupied your property, file FIR under PPC Section 447 immediately.",
      "③ Get certified property record copies from the local Patwari.",
      "④ File a civil suit in District Court for possession — contact District Bar Association for free legal aid.",
      "⑤ Do NOT sign any compromise document under pressure.",
    ],
    laws: "PPC Section 447 (Criminal Trespass) | Land Revenue Act 1967",
    punishment:
      "Up to 3 months imprisonment for criminal trespass. Civil court can restore full possession with compensation.",
    helplines: [
      { name: "Police", number: "15" },
      { name: "Punjab Land Records", number: "0800-02345" },
      { name: "District Bar Association", number: "Visit locally" },
    ],
  },

  inheritance: {
    category: "Inheritance / Wirasat",
    color: "#f59e0b",
    questions: [
      "Has the person recently passed away, or is this an old case?",
      "Are other family members refusing to give you your share, or is the property still undivided?",
      "Do you have a death certificate and any property documents?",
      "How many legal heirs are there in total?",
      "Has any part of the estate already been sold or transferred without your consent?",
    ],
    guidance: [
      "① Get a Legal Heir Certificate from NADRA or Union Council — this officially lists all legal heirs.",
      "② Get property records from the local Patwari / Land Record office.",
      "③ Daughters have a guaranteed share equal to half of son's share — no one can legally deny this.",
      "④ If family refuses, file a Partition suit in District Civil Court.",
      "⑤ Aurat Foundation provides free legal aid for women: 051-2891350.",
    ],
    laws: "Muslim Family Laws Ordinance 1961 | West Pakistan Muslim Personal Law 1962",
    punishment:
      "Illegal occupation of your share can be charged under PPC Section 447 (Criminal Trespass).",
    helplines: [
      { name: "NADRA", number: "051-111-786-100" },
      { name: "Aurat Foundation", number: "051-2891350" },
    ],
  },

  landlord: {
    category: "Tenant / Landlord Dispute",
    color: "#f59e0b",
    questions: [
      "Are you the tenant or the landlord in this situation?",
      "Do you have a written rental agreement or lease contract?",
      "Has the landlord threatened to cut utilities or remove you by force?",
      "Is this about unpaid rent, an unreturned deposit, or eviction?",
      "How long have you lived in / rented out the property?",
    ],
    guidance: [
      "① A landlord CANNOT evict you without a court order — even if rent is overdue.",
      "② File complaint with the Rent Controller at District Court immediately if threatened.",
      "③ If physically threatened, call 15 and file FIR.",
      "④ For landlords: send formal written notice via registered post giving 30 days minimum notice.",
      "⑤ Security deposits are recoverable through Small Claims Court or Rent Controller.",
    ],
    laws: "Punjab Rented Premises Act 2009 | PPC Section 441 (Criminal Trespass)",
    punishment:
      "Illegal eviction by landlord: PPC Section 441 — fines and potential imprisonment.",
    helplines: [
      { name: "Police", number: "15" },
      { name: "Rent Controller", number: "Visit District Court" },
      { name: "Legal Aid", number: "051-111-119-119" },
    ],
  },

  police: {
    category: "Police Misconduct",
    color: "#ef4444",
    questions: [
      "Are you currently detained, or have you already been released?",
      "Do you know the name or badge number of the officer involved?",
      "Were there any witnesses present when this happened?",
      "Were you shown any arrest warrant or told the reason for detention?",
      "Do you have any visible injuries from the encounter?",
    ],
    guidance: [
      "① Police cannot detain you for more than 24 hours without producing you before a magistrate — Article 10 of the Constitution.",
      "② Note the officer's name, badge number and police station immediately.",
      "③ A family member can file a Habeas Corpus petition in High Court if you are held illegally.",
      "④ Get a medical examination immediately upon release — injuries are evidence.",
      "⑤ File complaint with Human Rights Commission of Pakistan: 051-9204688.",
    ],
    laws: "Constitution Article 9, 10, 14 | PPC Section 330 (Torture by police)",
    punishment:
      "Officers found guilty of torture under PPC Section 330 face imprisonment and departmental dismissal.",
    helplines: [
      { name: "Human Rights Commission", number: "051-9204688" },
      { name: "Legal Aid", number: "051-111-119-119" },
    ],
  },

  "forced marriage": {
    category: "Forced Marriage",
    color: "#ef4444",
    questions: [
      "Is the marriage being forced by your family, or by someone else?",
      "Has the ceremony already happened, or is it being planned?",
      "Are you currently in a safe place where you can speak freely?",
      "Is the person you are being forced to marry known to you?",
      "Is there a risk of violence if you refuse?",
    ],
    guidance: [
      "① If in immediate danger, call 1099 or 15 right now.",
      "② Your consent is REQUIRED for a valid nikah — a nikah without consent is legally invalid.",
      "③ Marriage under 18 is illegal under the Child Marriage Restraint Act 2019.",
      "④ You can seek a Protection Order from District Court to prevent the marriage before it happens.",
      "⑤ Rozan Counselling specialises in forced marriage: 051-2890505.",
    ],
    laws: "Child Marriage Restraint Act 2019 | PPC Section 498-B | Muslim Family Laws Ordinance 1961",
    punishment:
      "Up to 5 years imprisonment for forcing a marriage under PPC Section 498-B.",
    helplines: [
      { name: "Women Helpline", number: "1099" },
      { name: "Police", number: "15" },
      { name: "Rozan Counselling", number: "051-2890505" },
    ],
  },

  divorce: {
    category: "Divorce / Khula",
    color: "#f59e0b",
    questions: [
      "Are you seeking Khula (wife-initiated) or is your husband refusing to divorce you?",
      "Do you have a Nikahnama (marriage certificate)?",
      "Do you have children from this marriage?",
      "Is the matter already registered with the Union Council or Arbitration Council?",
      "Are you seeking maintenance (Nafaqa) or dowry (Jahez) items back as well?",
    ],
    guidance: [
      "① A woman can seek Khula in court even without the husband's consent — his refusal does not block it.",
      "② File your case with the Family Court / Union Council Arbitration Council in your area.",
      "③ Prepare your Nikahnama and any evidence of the marriage breakdown for the court.",
      "④ You can claim maintenance and return of dowry items in the same or a linked suit.",
      "⑤ Aurat Foundation and District Bar legal aid cells can assist free of cost.",
    ],
    laws: "Muslim Family Laws Ordinance 1961 | Dissolution of Muslim Marriages Act 1939 | Family Courts Act 1964",
    punishment:
      "Not applicable — this is a civil family matter, not a criminal offence.",
    helplines: [
      { name: "Aurat Foundation", number: "051-2891350" },
      { name: "Legal Aid", number: "051-111-119-119" },
    ],
  },

  custody: {
    category: "Child Custody",
    color: "#f59e0b",
    questions: [
      "Are you the mother or the father seeking custody?",
      "How old are the children involved?",
      "Is the other parent currently denying you access to the children?",
      "Are you and the other parent already separated or divorced?",
      "Is there any history of abuse or neglect affecting the children's safety?",
    ],
    guidance: [
      "① File a custody (Hizanat) petition in the Family Court in your district.",
      "② Mothers generally have first right of custody for young children (Hizanat), subject to the child's welfare.",
      "③ Document any denial of access or contact refusal by the other parent with dates.",
      "④ The court's primary test is the welfare of the child, not just parental rights.",
      "⑤ You can request interim visitation rights while the main case is pending.",
    ],
    laws: "Guardians and Wards Act 1890 | Family Courts Act 1964",
    punishment:
      "Not applicable — this is a civil matter, but denying court-ordered access can lead to contempt proceedings.",
    helplines: [
      { name: "Legal Aid", number: "051-111-119-119" },
      { name: "Aurat Foundation", number: "051-2891350" },
    ],
  },

  dowry: {
    category: "Dowry Harassment",
    color: "#f97316",
    questions: [
      "Is the pressure coming from your husband, in-laws, or both?",
      "Has this involved any physical violence or only verbal/emotional pressure?",
      "Do you have a list or proof of dowry items given at the time of marriage?",
      "Has anyone threatened to send you back to your parents' home or divorce you over this?",
      "Are you currently living in the same house as the people pressuring you?",
    ],
    guidance: [
      "① Keep a written record of every demand made, with dates and who made it.",
      "② If physical harm occurs, this falls under Domestic Violence law — call 1099 immediately.",
      "③ You can file a complaint at the local police station; dowry demands with harassment can be pursued under PPC provisions on cruelty and hurt.",
      "④ Dowry and Bridal Gifts (Restriction) Act limits what can be exchanged and gives you a legal basis to push back.",
      "⑤ Involve your own family or a trusted elder as a witness where possible.",
    ],
    laws: "Dowry and Bridal Gifts (Restriction) Act 1976 | Domestic Violence Act 2021 | PPC Section 337",
    punishment:
      "Violations under the Dowry Act can lead to fines; accompanying violence is punishable under PPC and the DV Act.",
    helplines: [
      { name: "Women Helpline", number: "1099" },
      { name: "Police", number: "15" },
    ],
  },

  onlineshopping: {
    category: "Online Shopping Fraud",
    color: "#f97316",
    questions: [
      "Did you pay in advance, or was it meant to be cash on delivery?",
      "Was this through a known platform (Daraz, Facebook page, Instagram seller) or a personal account?",
      "Do you have the order confirmation, payment receipt, or chat messages?",
      "Has the seller blocked you or stopped responding?",
      "How much money was involved?",
    ],
    guidance: [
      "① Screenshot the product listing, payment proof, and all chat messages immediately.",
      "② If bought through a platform like Daraz, file a dispute/refund request within the platform first.",
      "③ Report the seller's page/account so others aren't scammed too.",
      "④ File a complaint with FIA Cybercrime at complaint.fia.gov.pk or call 9911.",
      "⑤ For larger amounts, you can also file FIR under PPC Section 420 (Cheating) at your local police station.",
    ],
    laws: "PPC Section 420 (Cheating) | PECA 2016 (Electronic Fraud)",
    punishment:
      "Up to 7 years imprisonment under PPC 420; PECA electronic fraud adds further fines up to Rs. 10 million.",
    helplines: [
      { name: "FIA Cybercrime", number: "9911" },
      { name: "Police", number: "15" },
    ],
  },

  forgery: {
    category: "Fake Degree / Document Fraud",
    color: "#ef4444",
    questions: [
      "What kind of document was forged — degree, CNIC, contract, or something else?",
      "How did you discover it was fake?",
      "Was this used to get a job, a loan, or something else?",
      "Do you have a copy of the forged document?",
      "Do you know who created or used the forged document?",
    ],
    guidance: [
      "① Preserve the forged document and any related paperwork as evidence — do not return the original to anyone.",
      "② If it's an academic degree, report it to HEC (hec.gov.pk) for verification and action.",
      "③ File an FIR under PPC Sections 468 and 471 (forgery and using a forged document) at your local police station.",
      "④ If used for employment, also inform the employer/institution in writing.",
      "⑤ Keep copies of all correspondence for your case file.",
    ],
    laws: "PPC Section 468 (Forgery for Cheating) | PPC Section 471 (Using a Forged Document)",
    punishment: "Up to 14 years imprisonment under PPC Section 468.",
    helplines: [
      { name: "Police", number: "15" },
      { name: "HEC", number: "051-90402000" },
    ],
  },

  accident: {
    category: "Accident / Hit and Run",
    color: "#ef4444",
    questions: [
      "Was anyone injured, and has medical attention been given?",
      "Did the other driver flee the scene, or do you have their details?",
      "Were there any witnesses or CCTV cameras nearby?",
      "Do you have photos of the vehicles, damage, and the scene?",
      "Has this already been reported to police (1122/15)?",
    ],
    guidance: [
      "① If anyone is injured, call 1122 for emergency medical help immediately.",
      "② Take photos of the vehicles, number plates, and the accident scene before anything is moved (where safe to do so).",
      "③ File an FIR at the nearest police station under PPC Section 279 (rash driving) and related sections.",
      "④ Ask nearby shops or buildings if they have CCTV footage, and request a copy quickly before it's overwritten.",
      "⑤ Keep all medical bills and repair estimates — they support a compensation claim.",
    ],
    laws: "PPC Section 279 (Rash Driving) | PPC Section 320 (Causing Death by Negligence) | Motor Vehicles Ordinance 1965",
    punishment:
      "Up to 10 years imprisonment if death is caused by rash/negligent driving, plus fines.",
    helplines: [
      { name: "Rescue 1122", number: "1122" },
      { name: "Police", number: "15" },
    ],
  },

  neighbour: {
    category: "Neighbour Dispute",
    color: "#f59e0b",
    questions: [
      "Is this about noise, a boundary wall, construction, or something else?",
      "Have you already spoken to the neighbour directly about it?",
      "Is there any written agreement or property record showing the boundary?",
      "Has this escalated to threats or any physical altercation?",
      "How long has this dispute been going on?",
    ],
    guidance: [
      "① Try a written, polite notice first — many disputes are resolved without court involvement.",
      "② For boundary disputes, get a Patwari to verify the official property lines from land records.",
      "③ If unresolved, you can approach a local Jirga/Musalihat Anjuman (community reconciliation committee) for informal mediation.",
      "④ For persistent nuisance or illegal construction, file a complaint with the local Town/Municipal Committee.",
      "⑤ If threats or violence occur, file an FIR — this is a criminal matter at that point, not just a civil dispute.",
    ],
    laws: "Punjab Local Government Act (building/nuisance bylaws) | PPC Section 447 (Trespass) | PPC Section 268 (Public Nuisance)",
    punishment:
      "Nuisance and trespass offences carry fines and short imprisonment terms depending on severity.",
    helplines: [
      { name: "Police", number: "15" },
      { name: "Municipal Committee", number: "Visit locally" },
    ],
  },

  salary: {
    category: "Salary Not Paid",
    color: "#f59e0b",
    questions: [
      "How many months of salary are unpaid?",
      "Do you have an appointment letter or written employment contract?",
      "Have you already asked your employer in writing for the payment?",
      "Are you still employed there, or have you left/been terminated?",
      "Do you have salary slips or bank statements showing past payments?",
    ],
    guidance: [
      "① Send a written demand (email or letter) to your employer requesting payment with a clear deadline.",
      "② Keep all evidence — contract, salary slips, attendance records, and messages about the unpaid salary.",
      "③ File a complaint with the Labour Department / Labour Court in your province.",
      "④ If your employer is registered, you can also raise it with the relevant Employees' Old-Age Benefits Institution (EOBI) or Social Security office.",
      "⑤ For serious wage theft, a written legal notice from a lawyer often prompts faster payment.",
    ],
    laws: "Payment of Wages Act 1936 | Industrial and Commercial Employment (Standing Orders) Ordinance 1968",
    punishment:
      "Employers can be fined and ordered to pay wages plus compensation through the Labour Court.",
    helplines: [
      { name: "Labour Department", number: "Visit provincial office" },
      { name: "Legal Aid", number: "051-111-119-119" },
    ],
  },

  consumer: {
    category: "Consumer Rights",
    color: "#f59e0b",
    questions: [
      "What product or service is this about?",
      "Have you already contacted the seller/company for a refund or replacement?",
      "Do you have the receipt, warranty card, or purchase proof?",
      "How long ago did you make the purchase?",
      "Is the issue a defective product, false advertising, or overcharging?",
    ],
    guidance: [
      "① Request a refund, replacement, or repair from the seller in writing, referencing the receipt/warranty.",
      "② Keep the product, packaging, and proof of purchase — don't dispose of anything.",
      "③ File a complaint with your provincial Consumer Protection Council (e.g. Punjab Consumer Protection Council).",
      "④ For online purchases, also report the seller to the platform (Daraz, etc.) for buyer protection.",
      "⑤ Small claims for consumer disputes can be filed at the Consumer Court without needing a lawyer.",
    ],
    laws: "Punjab Consumer Protection Act 2005 (and equivalent provincial laws)",
    punishment:
      "Sellers can be fined and ordered to refund/replace by the Consumer Court.",
    helplines: [
      {
        name: "Consumer Protection Council",
        number: "Visit provincial office",
      },
      { name: "Legal Aid", number: "051-111-119-119" },
    ],
  },

  cyberbullying: {
    category: "Cyberbullying",
    color: "#ef4444",
    questions: [
      "Is this happening on a specific platform — Instagram, TikTok, Facebook, WhatsApp?",
      "Do you know who is behind this, or is it anonymous accounts?",
      "Is it a single incident or ongoing over time?",
      "Are threats being made, or is it mainly insults/trolling?",
      "Have you reported the account(s) to the platform already?",
    ],
    guidance: [
      "① Take screenshots of everything — comments, messages, profile links — before blocking or reporting.",
      "② Report the account(s) directly on the platform (most have a 'report harassment' option).",
      "③ Do not engage or respond publicly — this often escalates the bullying.",
      "④ File a complaint with FIA Cybercrime at complaint.fia.gov.pk or call 9911 if it involves threats or persistent harassment.",
      "⑤ If it involves a minor, also inform a parent/guardian and consider looping in the school.",
    ],
    laws: "PECA 2016 Section 24 (Cyberbullying/Offences against dignity) | Section 21 (Cyberstalking)",
    punishment:
      "Up to 3-5 years imprisonment and fines depending on the specific PECA offence.",
    helplines: [
      { name: "FIA Cybercrime", number: "9911" },
      { name: "Police", number: "15" },
    ],
  },
};

// ── Detect category from user input (English + Urdu keywords) ──
function detectCategory(text) {
  var t = text.toLowerCase();
  if (
    t.match(
      /husband|wife|domestic|beating|maar|shohar|ghar|marital|spouse|mujhe marta|peeta hai/
    )
  )
    return "domestic violence";
  if (
    t.match(
      /harass|boss|office|workplace|teacher|professor|university|job harassment|tang karta|pareshan kar/
    )
  )
    return "harassment";
  if (
    t.match(
      /blackmail|nude|private video|leaked|sextortion|photos share|video leak|tasveer|video dhamki/
    )
  )
    return "blackmail";
  if (
    t.match(
      /fraud|scam|cheat|420|paise le|money fraud|fake job|dhokebaazi|paisa wapas nahi/
    )
  )
    return "fraud";
  if (
    t.match(/property|zameen|land|plot|qabza|makaan dispute|illegal possession/)
  )
    return "property";
  if (
    t.match(
      /inherit|wirasat|jaidad|haq nahi|father died|mother died|daughters right|maraas/
    )
  )
    return "inheritance";
  if (
    t.match(/landlord|tenant|rent|kiraya|eviction|deposit wapas|ghar se nikal/)
  )
    return "landlord";
  if (
    t.match(
      /police|wrongful arrest|illegal detention|false case|police beating|torture|thana|hawalat/
    )
  )
    return "police";
  if (
    t.match(
      /forced marriage|jabri shadi|child marriage|honor killing|nikah force/
    )
  )
    return "forced marriage";
  if (t.match(/divorce|khula|talaq|khulla chahti/)) return "divorce";
  if (t.match(/custody|bachon ka haq|child custody|bache nahi milte/))
    return "custody";
  if (t.match(/dowry|jahez|jahaiz/)) return "dowry";
  if (
    t.match(
      /online order|daraz|delivery nahi|product nahi mila|online kharidari|parcel scam/
    )
  )
    return "onlineshopping";
  if (t.match(/fake degree|jaali document|forged|forgery|jaali sanad/))
    return "forgery";
  if (t.match(/accident|hit and run|car crash|takkar|gaari tasadum/))
    return "accident";
  if (t.match(/neighbour|neighbor|deewar|boundary wall|padosi|shor sharaba/))
    return "neighbour";
  if (
    t.match(
      /salary nahi mila|unpaid salary|tankhwah|wages not paid|employer paisa nahi/
    )
  )
    return "salary";
  if (t.match(/consumer|defective product|refund nahi|warranty|kharab cheez/))
    return "consumer";
  if (
    t.match(
      /cyberbully|trolling|online abuse|troll kar rahe|social media harassment/
    )
  )
    return "cyberbullying";
  return null;
}

// ── Build case summary card (shown after the guidance card) ────
function buildCaseSummaryCard(flow, userAnswers) {
  var today = new Date();
  var dateStr = today.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  var answersHTML = userAnswers
    .map(function (a, i) {
      return (
        '<div style="color:#cbd5e1;font-size:0.82rem;padding:3px 0;">' +
        (i + 1) +
        ". " +
        a +
        "</div>"
      );
    })
    .join("");

  return (
    '<div style="background:rgba(8,12,28,0.97);border:1px solid rgba(139,92,246,0.4);border-radius:16px;padding:15px;margin:8px 0;">' +
    '<div style="color:#c4b5fd;font-weight:700;font-size:0.85rem;margin-bottom:10px;">🗂️ CASE SUMMARY — save or screenshot this</div>' +
    '<div style="color:#e2e8f0;font-size:0.85rem;line-height:1.7;">' +
    "<strong>Date:</strong> " +
    dateStr +
    "<br>" +
    "<strong>Category:</strong> " +
    flow.category +
    "<br>" +
    "<strong>Applicable Law:</strong> " +
    flow.laws +
    "</div>" +
    '<div style="margin-top:9px;padding-top:9px;border-top:1px solid rgba(255,255,255,0.08);">' +
    '<div style="color:#94a3b8;font-size:0.75rem;font-weight:700;margin-bottom:5px;">YOUR ANSWERS</div>' +
    answersHTML +
    "</div></div>"
  );
}

// ── Build response HTML ──────────────────────────────────────
function buildConsultCard(flow, userAnswers) {
  var color = flow.color;
  var guidanceHTML = flow.guidance
    .map(function (s) {
      return (
        '<div style="color:#e2e8f0;font-size:0.87rem;padding:4px 0;line-height:1.6;">' +
        s +
        "</div>"
      );
    })
    .join("");

  var helplinesHTML = flow.helplines
    .map(function (h) {
      return (
        '<a href="tel:' +
        h.number +
        '" style="display:inline-flex;align-items:center;gap:4px;background:rgba(239,68,68,0.14);border:1px solid rgba(239,68,68,0.38);color:#fca5a5;padding:5px 11px;border-radius:28px;text-decoration:none;font-weight:600;font-size:0.8rem;margin:3px;">📞 ' +
        h.name +
        ": " +
        h.number +
        "</a>"
      );
    })
    .join("");

  var answersHTML = "";
  if (userAnswers && userAnswers.length > 0) {
    answersHTML =
      '<div style="margin-bottom:9px;padding:10px;background:rgba(255,255,255,0.03);border-radius:9px;border:1px solid rgba(255,255,255,0.1);">' +
      '<div style="color:#94a3b8;font-size:0.75rem;font-weight:700;margin-bottom:5px;">📋 BASED ON YOUR RESPONSES</div>' +
      userAnswers
        .map(function (a) {
          return (
            '<div style="color:#cbd5e1;font-size:0.82rem;padding:2px 0;">• ' +
            a +
            "</div>"
          );
        })
        .join("") +
      "</div>";
  }

  return (
    '<div style="background:rgba(8,12,28,0.97);border:2px solid ' +
    color +
    ';border-radius:16px;padding:15px;margin:8px 0;">' +
    '<div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;">' +
    '<span style="background:' +
    color +
    ';color:white;padding:2px 10px;border-radius:18px;font-size:0.7rem;font-weight:700;">LEGAL ANALYSIS</span>' +
    '<span style="color:white;font-weight:700;font-size:0.95rem;">⚖️ ' +
    flow.category +
    "</span></div>" +
    answersHTML +
    '<div style="background:rgba(255,255,255,0.04);border-radius:9px;padding:10px;margin-bottom:9px;">' +
    '<div style="color:#93c5fd;font-weight:700;font-size:0.75rem;margin-bottom:6px;">📋 WHAT YOU SHOULD DO — step by step</div>' +
    guidanceHTML +
    "</div>" +
    '<div style="margin-bottom:9px;padding:10px;background:rgba(251,191,36,0.07);border-radius:9px;border-left:3px solid #fbbf24;">' +
    '<div style="color:#fbbf24;font-weight:700;font-size:0.75rem;margin-bottom:4px;">⚖️ APPLICABLE LAW</div>' +
    '<div style="color:#fde68a;font-size:0.84rem;">' +
    flow.laws +
    "</div></div>" +
    '<div style="margin-bottom:9px;padding:10px;background:rgba(220,38,38,0.09);border-radius:9px;border:1px solid rgba(220,38,38,0.32);">' +
    '<div style="color:#fee2e2;font-weight:700;font-size:0.75rem;margin-bottom:4px;">⚖️ PENALTY FOR THE OFFENDER</div>' +
    '<div style="color:#fecaca;font-size:0.84rem;">' +
    flow.punishment +
    "</div></div>" +
    '<div style="margin-bottom:9px;">' +
    '<div style="color:#f87171;font-weight:700;font-size:0.75rem;margin-bottom:5px;">📞 CALL FOR HELP — tap to dial</div>' +
    '<div style="display:flex;flex-wrap:wrap;gap:3px;">' +
    helplinesHTML +
    "</div></div>" +
    '<div style="padding:9px;background:rgba(139,92,246,0.09);border-radius:9px;border:1px solid rgba(139,92,246,0.28);color:#c4b5fd;font-size:0.82rem;">' +
    "💬 <strong>Next Step:</strong> Would you like help drafting an FIR or formal complaint for this case? Click <strong>FIR Draft</strong> in the sidebar.</div>" +
    '<div style="margin-top:9px;color:#94a3b8;font-size:0.72rem;text-align:center;">⚠️ General legal guidance based on Pakistani law. For urgent danger, call police: 15 immediately.</div>' +
    "</div>"
  );
}

// ── Conversational state per session ────────────────────────
var consultState = {
  stage: "greeting", // greeting → questioning → complete
  category: null,
  flow: null,
  questionIndex: 0,
  userAnswers: [],
};

function resetConsultState() {
  consultState = {
    stage: "greeting",
    category: null,
    flow: null,
    questionIndex: 0,
    userAnswers: [],
  };
}

// ── Generate bot reply based on conversation state ───────────
function getConsultReply(userText) {
  var text = userText.trim();

  // Stage: greeting — user just described their problem
  if (consultState.stage === "greeting") {
    var cat = detectCategory(text);

    if (cat && CONSULT_FLOWS[cat]) {
      consultState.category = cat;
      consultState.flow = CONSULT_FLOWS[cat];
      consultState.stage = "questioning";
      consultState.questionIndex = 0;
      consultState.userAnswers = [];

      return (
        '<div style="background:rgba(8,12,28,0.95);border:1px solid rgba(96,165,250,0.3);border-radius:14px;padding:14px;">' +
        '<div style="color:#93c5fd;font-weight:700;margin-bottom:8px;">⚖️ E-Legal Advisor</div>' +
        '<div style="color:#e2e8f0;font-size:0.9rem;margin-bottom:12px;">I understand — this sounds like a <strong style="color:#fbbf24;">' +
        consultState.flow.category +
        "</strong> situation. I have a few questions to give you the most accurate guidance.</div>" +
        '<div style="background:rgba(37,99,235,0.15);border:1px solid rgba(37,99,235,0.35);border-radius:10px;padding:12px;color:#bfdbfe;font-size:0.9rem;">' +
        "❓ " +
        consultState.flow.questions[0] +
        "</div></div>"
      );
    } else {
      // Can not detect category — ask them to describe more
      return (
        '<div style="background:rgba(8,12,28,0.95);border:1px solid rgba(96,165,250,0.3);border-radius:14px;padding:14px;">' +
        '<div style="color:#93c5fd;font-weight:700;margin-bottom:8px;">⚖️ E-Legal Advisor</div>' +
        '<div style="color:#e2e8f0;font-size:0.9rem;margin-bottom:12px;">I want to help you properly. Could you describe your situation in a bit more detail? For example — is this about:</div>' +
        '<div style="display:flex;flex-wrap:wrap;gap:5px;">' +
        [
          "Domestic Violence",
          "Harassment",
          "Blackmail",
          "Fraud / Scam",
          "Property Dispute",
          "Inheritance",
          "Landlord Issue",
          "Police Misconduct",
          "Forced Marriage",
          "Divorce / Khula",
          "Child Custody",
          "Dowry Harassment",
          "Online Shopping Fraud",
          "Fake Degree / Forgery",
          "Accident / Hit and Run",
          "Neighbour Dispute",
          "Salary Not Paid",
          "Consumer Rights",
          "Cyberbullying",
        ]
          .map(function (t) {
            return (
              '<span class="aiConsultPill" style="cursor:pointer;background:rgba(37,99,235,0.18);border:1px solid rgba(37,99,235,0.38);color:#93c5fd;padding:5px 11px;border-radius:18px;font-size:0.82rem;margin:2px;display:inline-block;">' +
              t +
              "</span>"
            );
          })
          .join("") +
        "</div></div>"
      );
    }
  }

  // Stage: questioning — asking follow-up questions
  if (consultState.stage === "questioning") {
    consultState.userAnswers.push(text);
    consultState.questionIndex++;

    // Still have questions left
    if (consultState.questionIndex < consultState.flow.questions.length) {
      return (
        '<div style="background:rgba(8,12,28,0.95);border:1px solid rgba(96,165,250,0.3);border-radius:14px;padding:14px;">' +
        '<div style="color:#6ee7b7;font-size:0.85rem;margin-bottom:10px;">✓ Understood. One more question:</div>' +
        '<div style="background:rgba(37,99,235,0.15);border:1px solid rgba(37,99,235,0.35);border-radius:10px;padding:12px;color:#bfdbfe;font-size:0.9rem;">' +
        "❓ " +
        consultState.flow.questions[consultState.questionIndex] +
        "</div></div>"
      );
    }

    // All questions answered — show full guidance + case summary
    consultState.stage = "complete";
    var answers = consultState.userAnswers.slice();
    var flow = consultState.flow;
    resetConsultState();

    return (
      '<div style="color:#6ee7b7;font-size:0.85rem;margin-bottom:10px;padding:8px;">✓ Thank you for sharing that. Based on what you have told me, here is your personalised legal guidance:</div>' +
      buildConsultCard(flow, answers) +
      buildCaseSummaryCard(flow, answers)
    );
  }

  // Stage: complete — start fresh
  resetConsultState();
  return getConsultReply(text);
}

// ── Override AI Consult send button ─────────────────────────
function initAIConsult() {
  var sendBtn = document.getElementById("sendConsultBtn");
  var input = document.getElementById("consultInput");
  var chatContainer = document.getElementById("chatContainer");
  if (!sendBtn || !input || !chatContainer) return;
  if (sendBtn.dataset.aiConsultBound) return;

  sendBtn.dataset.aiConsultBound = "true";
  resetConsultState();

  function addUserBubble(text) {
    var div = document.createElement("div");
    div.className = "message user-message";
    div.style.cssText =
      "background:rgba(37,99,235,0.2);border:1px solid rgba(37,99,235,0.4);padding:10px 14px;border-radius:14px;margin:8px 0;max-width:80%;margin-left:auto;color:#e2e8f0;font-size:0.9rem;";
    div.innerHTML = '<strong style="color:#93c5fd;">You:</strong> ' + text;
    chatContainer.appendChild(div);
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }

  function addBotBubble(html) {
    var div = document.createElement("div");
    div.className = "message";
    div.style.cssText = "margin:8px 0;";
    div.innerHTML = html;
    chatContainer.appendChild(div);
    chatContainer.scrollTop = chatContainer.scrollHeight;

    // Handle pill clicks inside bot messages
    div.querySelectorAll(".aiConsultPill").forEach(function (pill) {
      pill.addEventListener("click", function () {
        handleConsultQuery(pill.innerText);
      });
    });
  }

  function addTypingIndicator() {
    var div = document.createElement("div");
    div.id = "aiConsultTyping";
    div.style.cssText =
      "color:#94a3b8;font-size:0.85rem;padding:8px;font-style:italic;";
    div.innerHTML = "⚖️ Analyzing your situation...";
    chatContainer.appendChild(div);
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }

  function removeTypingIndicator() {
    var t = document.getElementById("aiConsultTyping");
    if (t) t.remove();
  }

  function handleConsultQuery(query) {
    if (!query || !query.trim()) return;
    addUserBubble(query);
    input.value = "";
    addTypingIndicator();

    setTimeout(function () {
      removeTypingIndicator();
      addBotBubble(getConsultReply(query));
    }, 600);
  }

  // Override send button
  sendBtn.onclick = function () {
    handleConsultQuery(input.value);
  };
  input.onkeypress = null;
  input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") handleConsultQuery(input.value);
  });

  // Override category pills (Cyber Harassment, Domestic Violence etc.)
  var pills = document.querySelectorAll(".cat-pill");
  for (var i = 0; i < pills.length; i++) {
    (function (pill) {
      pill.onclick = function () {
        handleConsultQuery(pill.getAttribute("data-topic") || pill.innerText);
      };
    })(pills[i]);
  }
}

// ── Auto-init ────────────────────────────────────────────────
function tryInitAIConsult() {
  initAIConsult();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", tryInitAIConsult);
} else {
  tryInitAIConsult();
}

setInterval(tryInitAIConsult, 800);
