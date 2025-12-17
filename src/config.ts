export const siteConfig = {
  name: "Ndongo Medoune Ndiaye",
  title: "Ingénieur Backend",
  description: "Portfolio de Ndongo",
  accentColor: "#1d4ed8",
  social: {
    email: "ndongomedoune.ndiaye@gmail.com",
    linkedin: "https://linkedin.com/in/nmndiaye",
    twitter: "https://x.com/",
    github: "https://github.com/Med-fitgeek",
  },
  aboutMe: "Je suis Ndongo, passionné de technologie et d’architecture logicielle, spécialisé dans le backend, les microservices et les systèmes distribués. J’aime créer des solutions performantes, maintenables et qui ont un vrai impact concret. Curieux et structuré, je jongle entre vision globale et détails techniques, tout en explorant de nouvelles technologies pour transformer des idées complexes en solutions simples.",
  skills: ["Java#", "Spring Boot", "J2EE", "JPA", "Hibernate","Microservices", "Docker", "Jenkins", "Redis"],
  projects: [
    {
      name: "Plateforme de vote en ligne",
      description:
        "Développé une application web de vote en ligne sécurisée, avec authentification centralisée via Keycloak (OAuth2, JWT) et gestion fine des rôles utilisateurs.",
      link: "https://github.com/Med-fitgeek/online-voting-app",
      skills: ["Java", "Spring Boot", "Angular", "PostgreSQL", "Jenkins", "Github Actions"],
    },
    {
      name: "Interpréteur de langage",
      description:
        "Interpréteur complet pour un langage imaginé sur mesure, avec parseur modulaire et couverture de tests à 100 %, assurant stabilité et évolutivité.",
      link: "https://github.com/Med-fitgeek/My_language_compilator",
      skills: ["Java", "ANTLR", "Analyse Lexical", "Parsing"],
    },
    {
      name: "Plateforme bancaire distribuée",
      description:
        "Projet perso où je construis une vraie archi bancaire moderne basée sur des microservices. L’écosystème tourne en .NET 8, RabbitMQ pour la comm’ async (events + retries + DLX), un API Gateway pour centraliser les entrées, et une stack full Docker / Docker Compose pour tout orchestrer proprement.",
      link: "https://github.com/Med-fitgeek/DineroBank",
      skills: ["C#", ".NET", "RabbitMQ", "Linq", "Docker", "Kubernetes"],
    },
    {
      name: "Messagerie instantanée en temps réel",
      description:
        "Master the art of building production-ready, full-stack Chrome Extensions using modern web technologies and best practices",
      link: "https://github.com/Med-fitgeek/HelloFriends-Messagerie-Instantanee",
      skills: ["C#", ".NET", "Angular", "SignalR", "SQL Server"],
    },
    {
      name: "Application de quiz",
      description:
        "Jai co-développé une application de quiz sécurisée avec gestion des rôles, API REST (Flask) et interface web (Vue.js). Avec mes collegues nous avons mené l'ensemble du projet en approche Test-Driven Development avec une couverture de tests exhaustive, assurant robustesse et maintenabilité.",
      link: "https://github.com/Med-fitgeek/formula1-quiz-app",
      skills: ["Python", "Flask", "Vue.js", "Docker", "Test Driven Development"],
    },
  ],
  experience: [
    {
      company: "SLB",
      title: "Stagiaire Ingénieur Logiciel",
      dateRange: "Jan 2025 - Aout 2025",
      bullets: [
        "Développement d’une API interne d’automatisation en .NET (Façade Pattern) pour 5 outils industriels utilisés dans +40 pays",
        "Réduction des cycles QA de 80% via standardisation des scénarios et automatisation complète.",
        "Refactor de modules critiques + documentation des simulateurs et librairies internes.",
        "Mise en place d’une pipeline CI/CD Azure DevOps exécutant les tests en continu, améliorant fiabilité et régularité des livrables"
      ],
    },
    {
      company: "Gainde 2000",
      title: "Stagiaire Ingénieur FullStack ",
      dateRange: "Avr 2024 - Aout 2024",
      bullets: [
        "Développement fullstack pour une plateforme de santé publique nationale (50k+ utilisateurs).",
        "Conception d’un système de stockage multimédia hiérarchisé → -40 % temps d’accès.",
        "Instrumentation monitoring avec Prometheus/Grafana.",
        "Collaboration en Scrum avec l’équipe produit et devs seniors."
      ],
    },
  ],
  education: [
    {
      school: "ESIEE Paris",
      degree: "Diplome d'ingénieur informatique",
      dateRange: "2021 - 2025",
      achievements: [
        "Spécialisation : Génie logiciel et systèmes d’information",
        
      ],
    },
    {
      school: "Excellence Universitaire Africaine",
      degree: "Classes préparatoires MPSI",
      dateRange: "2019 - 2025",
      achievements: [
        "Deux années de préparations aux concours d'entrée des grandes coles",
      ],
    },
  ],
};
