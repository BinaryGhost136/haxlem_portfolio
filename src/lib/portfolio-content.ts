export type Language = "fr" | "en" | "es";
export type LocalText = Record<Language, string>;
export const text = (fr: string, en: string, es: string): LocalText => ({ fr, en, es });

export const content = {
  welcome: text(
    "Bienvenue sur le site de HAXELM",
    "Welcome to the world of HAXELM",
    "Bienvenido al sitio de HAXELM",
  ),
  nav: [
    text("À propos", "About", "Sobre mí"),
    text("Parcours", "Experience", "Trayectoria"),
    text("Réalisations", "Projects", "Proyectos"),
    text("Contact", "Contact", "Contacto"),
  ],
  role: text(
    "Étudiant en Sciences de Gestion · IAE de Tours",
    "Management Sciences student · IAE Tours",
    "Estudiante de Ciencias de Gestión · IAE Tours",
  ),
  founder: text(
    "Initiation HAXELM Financial Intelligence Hub",
    "Introduction to HAXELM Financial Intelligence Hub",
    "Introducción al centro de inteligencia financiera HAXELM",
  ),
  contact: text("Prenons contact", "Let’s connect", "Hablemos"),
  cv: text("Télécharger mon CV", "Download my CV", "Descargar mi CV"),
  scroll: text("Découvrir mon univers", "Discover my world", "Descubre mi universo"),
  about: text(
    "La finance pour métier.",
    "Finance as a profession.",
    "Las finanzas como profesión.",
  ),
  aboutAccent: text(
    "L’ambition pour moteur.",
    "Ambition as a driving force.",
    "La ambición como motor.",
  ),
  identity: text("Qui suis-je ?", "Who am I?", "¿Quién soy?"),
  intro: text(
    "Je suis Yémangnissè Moïse Louis HOUNKPE, étudiant en Licence 3 Sciences de Gestion à l’IAE de Tours et diplômé en Gestion des Banques et Institutions de Microfinance à l’ENEAM, au Bénin.",
    "I am Yémangnissè Moïse Louis HOUNKPE, a third-year Management Sciences student at IAE Tours, with a degree in Banking and Microfinance Institutions Management from ENEAM in Benin.",
    "Soy Yémangnissè Moïse Louis HOUNKPE, estudiante de tercer año de Ciencias de Gestión en IAE Tours y graduado en Gestión Bancaria y de Instituciones de Microfinanzas por ENEAM, en Benín.",
  ),
  bio: text(
    "Du crédit à l’audit interne, mes expériences en banque et en microfinance ont façonné une approche rigoureuse de l’analyse financière. Aujourd’hui, je développe cette expertise à la croisée de la finance, de la technologie et de l’intelligence artificielle.",
    "From credit management to internal audit, my banking and microfinance experience has shaped a rigorous approach to financial analysis. Today, I am developing this expertise at the intersection of finance, technology and artificial intelligence.",
    "Del crédito a la auditoría interna, mi experiencia en banca y microfinanzas ha forjado un enfoque riguroso del análisis financiero. Hoy desarrollo esta experiencia en la intersección entre finanzas, tecnología e inteligencia artificial.",
  ),
  values: text(
    "Rigueur, discrétion professionnelle et sens des responsabilités guident mon travail. Avec HAXELM, je porte des projets tournés vers l’intelligence financière et l'ingénierie des données.",
    "Rigour, professional discretion and responsibility guide my work. Through HAXELM, I am developing projects focused on financial intelligence and data engineering.",
    "El rigor, la discreción profesional y la responsabilidad guían mi trabajo. Con HAXELM, impulso proyectos de inteligencia financiera y la ingeniería de datos.",
  ),
  institutions: text(
    "Institutions financières",
    "Financial institutions",
    "Instituciones financieras",
  ),
  projects: text("Projets en développement", "Projects in development", "Proyectos en desarrollo"),
  profile: text("Profil", "Profile", "Perfil"),
  location: text("Localisation", "Location", "Ubicación"),
  education: text("Formation actuelle", "Current education", "Formación actual"),
  languages: text("Langues", "Languages", "Idiomas"),
  languageDetail: text(
    "Français · Anglais en perfectionnement",
    "French · English, improving",
    "Francés · Inglés en perfeccionamiento",
  ),
  format: text("Modalités", "Work arrangements", "Modalidades"),
  formatDetail: text("Présentiel & télétravail", "On-site & remote", "Presencial y remoto"),
  skills: text("Des compétences,", "Skills,", "Competencias,"),
  skillsAccent: text(
    "au service de la précision.",
    "with precision at their core.",
    "al servicio de la precisión.",
  ),
  expertise: text("Compétences", "Expertise", "Competencias"),
  experience: text("Un parcours ancré", "A career rooted", "Una trayectoria basada"),
  experienceAccent: text("dans le concret.", "in real experience.", "en la práctica."),
  professional: text(
    "Expérience professionnelle",
    "Professional experience",
    "Experiencia profesional",
  ),
  technology: text("Informatique, technologie & IA", "Technology & AI", "Tecnología e IA"),
  projectsTitle: text("L’ambition prend", "Ambition takes", "La ambición toma"),
  projectsAccent: text("forme.", "shape.", "forma."),
  works: text("Réalisations & ouvrages", "Projects & writing", "Proyectos y obras"),
  inProgress: text("En développement", "In development", "En desarrollo"),
  writing: text("En cours de rédaction", "Writing in progress", "En proceso de escritura"),
  writinged: text("En cours de développement", "In development", "En desarrollo"),
  // axeDescription: text(
  //   "Une plateforme de tontine digitale et d’épargne collective, portée par le Groupe HAXELM. Un projet à la rencontre de la finance et de l’innovation.",
  //   "A digital rotating savings and collective savings platform developed by Groupe HAXELM. A project at the intersection of finance and innovation.",
  //   "Una plataforma digital de ahorro rotativo y colectivo impulsada por Groupe HAXELM. Un proyecto que combina finanzas e innovación.",
  // ),
  bookDescription: text(
    "Un ouvrage en cours de rédaction autour du triptyque Projet – Profil – Profit : trois dimensions au cœur de ma réflexion entrepreneuriale.",
    "A book in progress exploring the Project – Profile – Profit triptych: three dimensions at the heart of my entrepreneurial thinking.",
    "Una obra en preparación sobre el tríptico Proyecto – Perfil – Beneficio: tres dimensiones de mi reflexión emprendedora.",
  ),
  bookDescriptioned: text(
    "CLASSE IA est une salle de classe virtuelle animée par une IA, où chacun trouve son domaine et les certifications utiles  son métier.",
    "CLASSE IA is an AI-powered virtual classroom where everyone can find their field of interest and the certifications relevant to their profession.",
    "CLASSE IA es un aula virtual dirigida por una IA, donde cada persona encuentra su ámbito y las certificaciones útiles para su profesión.",
  ),
  academic: text(
    "Formation & distinctions",
    "Education & achievements",
    "Formación y distinciones",
  ),
  foundations: text("Des fondations solides.", "Solid foundations.", "Bases sólidas."),
  cvDescription: text(
    "Mon parcours, mes compétences et mes expériences réunis dans un document.",
    "My education, skills and experience, all in one document.",
    "Mi formación, competencias y experiencia reunidas en un documento.",
  ),
  curriculum: text("Mon Curriculum Vitæ", "My Curriculum Vitæ", "Mi Curriculum Vitæ"),
  news: text("Actualités & publications", "News & publications", "Noticias y publicaciones"),
  newsTitle: text(
    "Réflexions & perspectives.",
    "Reflections & perspectives.",
    "Reflexiones y perspectivas.",
  ),
  newsCopy: text(
    "Retrouvez mes prises de parole et mes contenus sur LinkedIn.",
    "Explore my thoughts and content on LinkedIn.",
    "Encuentra mis reflexiones y contenidos en LinkedIn.",
  ),
  linkedin: text("Me suivre sur LinkedIn", "Follow me on LinkedIn", "Seguirme en LinkedIn"),
  contactTitle: text("Et si nous construisions", "What if we built", "¿Y si construimos"),
  contactAccent: text("la suite ensemble ?", "what comes next together?", "el futuro juntos?"),
  contactCopy: text(
    "Une opportunité, un projet ou une conversation autour de la finance, gestion de projets/données ou de l'IA appliquée à la finance ? Je serai ravi d’échanger avec vous.",
    "An opportunity, a project, or a conversation regarding finance, project/data management, or AI applied to finance? I would be delighted to discuss it with you.",
    "¿Una oportunidad, un proyecto o una conversación sobre finanzas, gestión de proyectos/datos o IA aplicada a las finanzas? Estaré encantado de conversar con usted.",
  ),
  surname: text("Nom", "Last name", "Apellido"),
  firstName: text("Prénom", "First name", "Nombre"),
  contactType: text("Type de contact", "Contact type", "Tipo de contacto"),
  channel: text("Canal préféré", "Preferred channel", "Canal preferido"),
  personal: text("Personnel", "Personal", "Personal"),
  business: text("Professionnel", "Professional", "Profesional"),
  other: text("Autre", "Other", "Otro"),
  message: text("Votre message", "Your message", "Tu mensaje"),
  placeholder: text(
    "Parlons de votre projet…",
    "Tell me about your project…",
    "Hablemos de tu proyecto…",
  ),
  send: text("Échanger sur WhatsApp", "Connect on WhatsApp", "Conversar por WhatsApp"),
  sent: text(
    "Votre message est prêt dans WhatsApp. Confirmez son envoi dans la conversation.",
    "Your message is ready in WhatsApp. Confirm sending it in the conversation.",
    "Tu mensaje está listo en WhatsApp. Confirma el envío en la conversación.",
  ),
  pause: text("Mettre les photos en pause", "Pause photos", "Pausar fotos"),
  resume: text("Relancer les photos", "Resume photos", "Reanudar fotos"),
  footer: text("Finance. Rigueur. Vision.", "Finance. Rigour. Vision.", "Finanzas. Rigor. Visión."),
};

export const skillGroups = [
  {
    title: text("Finance & audit", "Finance & audit", "Finanzas y auditoría"),
    items: [
      text(
        "Analyse financière & analyse de crédit",
        "Financial & credit analysis",
        "Análisis financiero y de crédito",
      ),
      text(
        "Audit bancaire & contrôle permanent",
        "Banking audit & continuous control",
        "Auditoría bancaria y control permanente",
      ),
      text(
        "Microfinance & opérations bancaires",
        "Microfinance & banking operations",
        "Microfinanzas y operaciones bancarias",
      ),
      text(
        "Conformité & suivi des garanties",
        "Compliance & collateral monitoring",
        "Cumplimiento y seguimiento de garantías",
      ),
    ],
  },
  {
    title: text("Technologie & outils", "Technology & tools", "Tecnología y herramientas"),
    items: [
      text(
        "Excel avancé & tableaux de bord",
        "Advanced Excel & dashboards",
        "Excel avanzado y cuadros de mando",
      ),
      text(
        "Word, PowerPoint & Outlook",
        "Word, PowerPoint & Outlook",
        "Word, PowerPoint y Outlook",
      ),
      text(
        "Google Sites, Forms & Jotform",
        "Google Sites, Forms & Jotform",
        "Google Sites, Forms y Jotform",
      ),
      text(
        "Data, ETL & IA · en apprentissage",
        "Data, ETL & AI · learning",
        "Datos, ETL e IA · en aprendizaje",
      ),
    ],
  },
  {
    title: text("Qualités humaines", "Personal strengths", "Cualidades personales"),
    items: [
      text(
        "Esprit d’analyse & organisation",
        "Analytical thinking & organisation",
        "Capacidad analítica y organización",
      ),
      text("Discrétion professionnelle", "Professional discretion", "Discreción profesional"),
      text(
        "Autonomie & responsabilité",
        "Autonomy & responsibility",
        "Autonomía y responsabilidad",
      ),
      text(
        "Adaptabilité & esprit d’équipe",
        "Adaptability & teamwork",
        "Adaptabilidad y trabajo en equipo",
      ),
    ],
  },
];

export const experiences = [
  {
    date: text("Mars — Juin 2026", "Mar — Jun 2026", "Mar — Jun 2026"),
    role: text("Guichetier payeur", "Bank teller", "Cajero bancario"),
    company: "NSIA BANQUE BÉNIN · Cotonou",
    description: text(
      "Dépôts et retraits, tenue et équilibrage de caisse, vérification des billets et justificatifs, achat et vente de devises.",
      "Deposits and withdrawals, cash balancing, verification of banknotes and supporting documents, and currency exchange.",
      "Depósitos y retiros, cierre y cuadre de caja, verificación de billetes y documentos, y cambio de divisas.",
    ),
  },
  {
    date: text("Mars — Sept. 2025", "Mar — Sep 2025", "Mar — Sep 2025"),
    role: text(
      "Stagiaire en audit interne",
      "Internal audit intern",
      "Prácticas en auditoría interna",
    ),
    company: "ORABANK BÉNIN · Cotonou",
    description: text(
      "Analyse des états financiers, revue des 50 plus gros engagements, contrôle des garanties et des procédures internes. Élaboration d’états financiers bancaires avec Excel.",
      "Financial statement analysis, review of the 50 largest credit exposures, collateral and internal procedure checks. Preparation of banking financial statements in Excel.",
      "Análisis de estados financieros, revisión de las 50 mayores exposiciones crediticias y control de garantías y procedimientos. Elaboración de estados financieros en Excel.",
    ),
  },
  {
    date: text("Fév. — Mars 2025", "Feb — Mar 2025", "Feb — Mar 2025"),
    role: text(
      "Stagiaire en fiabilisation des données",
      "Data quality intern",
      "Prácticas en calidad de datos",
    ),
    company: "BIIC BÉNIN · Cotonou",
    description: text(
      "Participation à la fiabilisation de la base clientèle et formation à la gestion des données et au processus ETL : extraction, transformation, chargement.",
      "Contributed to customer database reliability and received training in data management and ETL: extraction, transformation and loading.",
      "Participación en la mejora de la base de clientes y formación en gestión de datos y ETL: extracción, transformación y carga.",
    ),
  },
  {
    date: text("Oct. 2024 — Fév. 2025", "Oct 2024 — Feb 2025", "Oct 2024 — Feb 2025"),
    role: text(
      "Stagiaire en administration de crédit",
      "Credit administration intern",
      "Prácticas en administración de crédito",
    ),
    company: "ECOBANK BÉNIN · Cotonou",
    description: text(
      "Assistance gestion documentaire des dossiers de crédit et garanties. Maîtrise des procédures d'octroi du crédit bancaire.",
      "Document management support for credit files and guarantees. Proficiency in bank credit granting procedures.",
      "Asistencia en la gestión documental de expedientes de crédito y garantías. Dominio de los procedimientos de concesión de crédito bancario.",
    ),
  },
  {
    date: text("Mars — Juin 2024", "Mar — Jun 2024", "Mar — Jun 2024"),
    role: text(
      "Stagiaire agent de crédit",
      "Credit officer intern",
      "Prácticas como agente de crédito",
    ),
    company: "ALIDé MICROFINANCE BÉNIN · Cotonou",
    description: text(
      "Enrôlement et mise à jour des clients, montage et étude des dossiers de crédit aux particuliers et accueil client.",
      "Client onboarding and record updates, preparation and assessment of personal credit applications, and customer service.",
      "Registro y actualización de clientes, preparación y estudio de solicitudes de crédito personal y atención al cliente.",
    ),
  },
  {
    date: text("Août — Sept. 2022", "Aug — Sep 2022", "Ago — Sep 2022"),
    role: text("Stagiaire académique", "Academic intern", "Prácticas académicas"),
    company: "CLCAM BÉNIN · Porto-Novo",
    description: text(
      "Stage de découverte en entreprise. Assistance chargé d'acceuil et opérations de caisse.",
      "Work experience internship. Assisting with customer reception and cash register operations.",
      "Prácticas de descubrimiento en empresa. Apoyo en atención al cliente y operaciones de caja.",
    ),
  },
];

export const qualifications = [
  {
    date: text("Depuis septembre 2026", "Since September 2026", "Desde septiembre de 2026"),
    title: text(
      "Licence 3 Sciences de Gestion",
      "Third-year Management Sciences",
      "Tercer año de Ciencias de Gestión",
    ),
    institution: "IAE (Institut d'Administration des Entreprises) de Tours · France",
  },
  {
    date: text("Août 2026", "August 2026", "Agosto de 2026"),
    title: text(
      "Certificat en Intelligence Artificielle pour tous",
      "Certificate in Artificial Intelligence for All",
      "Certificado en Inteligencia Artificial para todos",
    ),
    institution: "FORCE-N Sénégal",
  },
  {
    date: text("2021 — 2024", "2021 — 2024", "2021 — 2024"),
    title: text(
      "Licence professionnelle Banque & Microfinance",
      "Professional degree in Banking & Microfinance",
      "Grado profesional en Banca y Microfinanzas",
    ),
    institution: "ENEAM (Ecole Nationale d'Economie Appliquée et de Management) · Cotonou, Bénin",
  },
  {
    date: text("2021 · Mention Très Bien", "2021 · Highest honours", "2021 · Máxima distinción"),
    title: text(
      "Baccalauréat G2 (Comptabilité)",
      "G2 Baccalaureate (Accounting)",
      "Bachillerato G2 (Contabilidad)",
    ),
    institution: "Lycée Technique et Professionnel · Porto-Novo",
    additional: text(
      "CAP  (Certificat d'Aptitude Professionnelle) G2 · 2020",
      "CAP (Vocational Aptitude Certificate) G2 · 2020",
      "CAP (Certificado de Aptitud Profesional) G2 · 2020",
    ),
  },
];
