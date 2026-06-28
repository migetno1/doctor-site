export const HOTDOC_URL =
  "https://www.hotdoc.com.au/medical-centres/bathurst-NSW-2795/busby-medical-practice/doctors/dr-alexander-ho-6";

export const HOTDOC_LIGHTBOX = `${HOTDOC_URL}?wp=w_lightbox`;

export const nav = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Visiting", href: "#what-to-expect" },
  { label: "Practice", href: "#practice" },
] as const;

export const hero = {
  eyebrow: "Busby Medical Practice · Bathurst, NSW",
  name: "Dr Alexander Ho",
  role: "General Practitioner",
  lede: "Holistic, patient-centred care for the Bathurst community — unhurried consultations that treat the whole person, not just the symptom.",
};

export const credentials = [
  "Western Sydney University, MD",
  "Westmead-trained",
  "RACGP — GP Registrar",
];

export const about = {
  eyebrow: "About",
  title: "A second career, built on listening.",
  portraitCaption: "Dr Alexander Ho · Busby Medical, Bathurst",
  paragraphs: [
    "I was born and raised in Sydney. I completed a Bachelor of Laws and a Bachelor of Applied Finance and worked in those fields before deciding that medicine was where I wanted to spend my career.",
    "I undertook my medical training with Western Sydney University, and spent a year in Bathurst as part of the program's Rural Stream. I completed my residency across Westmead, Coffs Harbour, Auburn, and Westmead Children's Hospitals, with terms in emergency medicine, geriatrics, infectious diseases, general surgery, and paediatric general surgery.",
    "I have now returned to Bathurst to continue my training in General Practice. I enjoy the wide range of presentations seen in general practice and aim to provide holistic, patient-centred care.",
    "Outside of medicine, I enjoy cooking, baking and rock climbing.",
  ],
};

export const philosophy = {
  quote:
    "Good general practice is mostly about listening. My aim is unhurried, holistic care — treating the whole person, building trust over time, and helping you make sense of your health.",
  attribution: "Dr Alexander Ho",
};

export type ServiceCategory = {
  title: string;
  blurb: string;
  items: string[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    title: "Chronic disease & lifestyle",
    blurb: "Ongoing management and care plans for long-term conditions.",
    items: [
      "Chronic disease management",
      "Diabetes care",
      "Asthma care",
      "Cardiovascular health",
      "Weight management & nutrition",
      "Smoking cessation",
    ],
  },
  {
    title: "Preventive & health checks",
    blurb: "Screening and assessments to keep you ahead of illness.",
    items: [
      "Health assessments",
      "Aboriginal health checks",
      "Immunisations",
      "Travel medicine",
      "Men's health",
    ],
  },
  {
    title: "Procedures & in-clinic diagnostics",
    blurb: "Minor procedures and tests performed on site.",
    items: [
      "Implanon insertion & removal",
      "Ear syringing & wax removal",
      "Wound care & dressings",
      "Spirometry",
      "ECG",
    ],
  },
  {
    title: "Family, work & access",
    blurb: "Everyday care for families, employment and remote needs.",
    items: [
      "Family planning & contraception",
      "Workcover",
      "Pre-employment & insurance medicals",
      "Telehealth consultations",
    ],
  },
];

export const steps = [
  {
    n: "01",
    title: "Book online",
    body: "Choose a time that suits you through HotDoc — it takes under a minute, any time of day.",
  },
  {
    n: "02",
    title: "Your consultation",
    body: "We talk through what's brought you in. No rushing — I want the full picture before we act.",
  },
  {
    n: "03",
    title: "A clear plan",
    body: "You leave knowing the next step: investigations, treatment, referral, or a plan to manage things over time.",
  },
  {
    n: "04",
    title: "Follow-up care",
    body: "General practice is a relationship. We review, adjust, and keep your care joined-up.",
  },
];

export const fees = {
  title: "Fees & billing",
  body: "Busby Medical is a private / mixed-billing practice. GP chronic disease management plans and health assessments are bulk-billed. For other consultations, billing is assessed individually — if cost is a concern, please raise it with me or reception and we'll work something out.",
  note: "Medicare rebates apply to eligible consultations.",
};

export const practice = {
  name: "Busby Medical Practice",
  eyebrow: "The practice",
  rows: [
    {
      label: "Address",
      value: "123 Howick Street, Bathurst, NSW 2795",
      href: "https://www.google.com/maps/search/?api=1&query=123+Howick+Street+Bathurst+NSW+2795",
    },
    { label: "Phone", value: "02 6332 4266", href: "tel:+61263324266" },
    { label: "Email", value: "busby@bathurstgp.com.au", href: "mailto:busby@bathurstgp.com.au" },
    { label: "Website", value: "bathurstgp.com.au", href: "https://bathurstgp.com.au" },
  ],
  hours: { label: "Consulting hours", value: "Tuesday – Friday\n8:00 am – 5:00 pm" },
  mapSrc:
    "https://www.google.com/maps?q=123%20Howick%20Street,%20Bathurst%20NSW%202795&output=embed",
};
