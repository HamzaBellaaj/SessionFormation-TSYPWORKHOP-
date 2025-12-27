export const datawork = [
  {
    id: '1',
    titre: 'Introduction à Angular et TypeScript',
    description: 'Apprenez les fondamentaux d\'Angular, le framework web moderne, et maîtrisez TypeScript pour développer des applications web robustes et scalables.',
    imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    niveau: 'Débutant',
    tags: ['Angular', 'TypeScript', 'Frontend', 'Framework', 'Développement Web'],
    dateDebut: '2025-01-15',
    dateFin: '2025-01-17',
    formateur: 'F1',
    nombreEtudiants: 12,
    sessions: [
      {
        id: '1-1',
        localisation: 'Salle A - IEEE Tunis',
        heure: '09:00 - 12:00',
        dateDebut: '2025-01-15',
        dateFin: '2025-01-17',
        nombreEtudiants: 8,
        formateur: 'F1', // Ahmed Bennour
        formateur1: 'F13' // Sami Ben Ali
      },
      {
        id: '1-2',
        localisation: 'Salle B - IEEE Tunis',
        heure: '14:00 - 17:00',
        dateDebut: '2025-01-15',
        dateFin: '2025-01-17',
        nombreEtudiants: 4,
        formateur: 'F1', // Ahmed Bennour
        formateur1: '' // Pas de deuxième formateur pour cette session
      }
    ]
  },
  {
    id: '2',
    titre: 'Python pour Data Science',
    description: 'Découvrez les bibliothèques Python essentielles (NumPy, Pandas, Matplotlib) pour l\'analyse de données et la visualisation scientifique.',
    imageUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    niveau: 'Intermédiaire',
    tags: ['Python', 'Data Science', 'NumPy', 'Pandas', 'Matplotlib', 'Analyse de Données'],
    dateDebut: '2025-02-01',
    dateFin: '2025-02-05',
    formateur: 'F2',
    nombreEtudiants: 15,
    sessions: [
      {
        id: '2-1',
        localisation: 'Salle C - Polytech Tunis',
        heure: '10:00 - 13:00',
        dateDebut: '2025-01-20',
        dateFin: '2025-01-22',
        nombreEtudiants: 14,
        formateur: 'F2', // Leila Khaled
        formateur1: '' // Pas de deuxième formateur
      }
    ]
  },
  {
    id: '3',
    titre: 'Cybersécurité et Protection des Données',
    description: 'Maîtrisez les principes de cybersécurité, le chiffrement, l\'authentification et les meilleures pratiques pour protéger les systèmes informatiques.',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    niveau: 'Avancé',
    tags: ['Cybersécurité', 'Sécurité', 'Chiffrement', 'Protection des Données', 'Sécurité Informatique'],
    dateDebut: '2025-02-01',
    dateFin: '2025-02-05',
    formateur: 'F3',
    nombreEtudiants: 9,
    sessions: [
      {
        id: '3-1',
        localisation: 'Salle D - INSAT',
        heure: '09:30 - 16:30',
        dateDebut: '2025-02-01',
        dateFin: '2025-02-05',
        nombreEtudiants: 9,
        formateur: 'F3', // Mohamed Trabelsi
        formateur1: 'F14' // Nadia Mansouri
      }
    ]
  },
  {
    id: '4',
    titre: 'Développement d\'Applications Mobile avec Flutter',
    description: 'Créez des applications mobiles multiplateformes (iOS et Android) en utilisant Flutter et Dart pour atteindre un large audience.',
    imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    niveau: 'Intermédiaire',
    tags: ['Flutter', 'Dart', 'Mobile', 'iOS', 'Android', 'Développement Mobile'],
    dateDebut: '2025-02-10',
    dateFin: '2025-02-14',
    formateur: 'F4',
    nombreEtudiants: 11,
    sessions: [
      {
        id: '4-1',
        localisation: 'Salle E - ISET Com',
        heure: '14:00 - 18:00',
        dateDebut: '2025-02-10',
        dateFin: '2025-02-14',
        nombreEtudiants: 7,
        formateur: 'F4', // Rayan Zaidi
        formateur1: '' // Pas de deuxième formateur
      },
      {
        id: '4-2',
        localisation: 'Salle A - IEEE Tunis',
        heure: '09:00 - 13:00',
        dateDebut: '2025-02-10',
        dateFin: '2025-02-14',
        nombreEtudiants: 4,
        formateur: 'F13', // Sami Ben Ali
        formateur1: '' // Pas de deuxième formateur
      }
    ]
  },
  {
    id: '5',
    titre: 'Machine Learning Avancé',
    description: 'Explorez les algorithmes de machine learning, la classification, la régression et les réseaux de neurones profonds avec TensorFlow.',
    imageUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    niveau: 'Avancé',
    tags: ['Machine Learning', 'AI', 'TensorFlow', 'Réseaux de Neurones', 'Intelligence Artificielle'],
    dateDebut: '2025-02-20',
    dateFin: '2025-02-24',
    formateur: 'F5',
    nombreEtudiants: 7,
    sessions: [
      {
        id: '5-1',
        localisation: 'Amphithéâtre - ENIT',
        heure: '10:00 - 17:00',
        dateDebut: '2025-02-20',
        dateFin: '2025-02-24',
        nombreEtudiants: 7,
        formateur: 'F5', // Karim Hamza
        formateur1: 'F15' // Amira Ben Salem
      }
    ]
  },
  {
    id: '6',
    titre: 'Cloud Computing avec AWS',
    description: 'Apprenez à déployer et gérer des applications sur Amazon Web Services, y compris EC2, S3, RDS et les services cloud essentiels.',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    niveau: 'Intermédiaire',
    tags: ['AWS', 'Cloud Computing', 'EC2', 'S3', 'RDS', 'Infrastructure Cloud'],
    dateDebut: '2025-03-01',
    dateFin: '2025-03-05',
    formateur: 'F6',
    nombreEtudiants: 13,
    sessions: [
      {
        id: '6-1',
        localisation: 'Salle F - ESPRIT',
        heure: '09:00 - 13:00',
        dateDebut: '2025-03-01',
        dateFin: '2025-03-05',
        nombreEtudiants: 13,
        formateur: 'F6', // Sonia Meddeb
        formateur1: '' // Pas de deuxième formateur
      }
    ]
  },
  {
    id: '7',
    titre: 'DevOps et CI/CD Pipeline',
    description: 'Automatisez le déploiement d\'applications avec Docker, Kubernetes, Jenkins et les pratiques DevOps modernes pour une livraison continue.',
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    niveau: 'Avancé',
    tags: ['DevOps', 'Docker', 'Kubernetes', 'CI/CD', 'Jenkins', 'Automatisation'],
    dateDebut: '2025-03-10',
    dateFin: '2025-03-13',
    formateur: 'F7',
    nombreEtudiants: 10,
    sessions: [
      {
        id: '7-1',
        localisation: 'Salle G - Sup\'Com',
        heure: '14:00 - 18:00',
        dateDebut: '2025-03-10',
        dateFin: '2025-03-13',
        nombreEtudiants: 10,
        formateur: 'F7', // Tariq Belhadj
        formateur1: 'F16' // Houssem Chérif
      }
    ]
  },
  {
    id: '8',
    titre: 'Développement Backend avec Node.js',
    description: 'Construisez des serveurs performants et scalables avec Node.js, Express.js et apprenez les patterns REST API et la gestion des bases de données.',
    imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    niveau: 'Intermédiaire',
    tags: ['Node.js', 'Express.js', 'Backend', 'REST API', 'JavaScript', 'Server-Side'],
    dateDebut: '2025-03-17',
    dateFin: '2025-03-20',
    formateur: 'F8',
    nombreEtudiants: 15,
    sessions: [
      {
        id: '8-1',
        localisation: 'Salle H - ISAMM',
        heure: '09:00 - 12:00',
        dateDebut: '2025-03-17',
        dateFin: '2025-03-20',
        nombreEtudiants: 15,
        formateur: 'F8', // Nabil Saïdi
        formateur1: '' // Pas de deuxième formateur
      }
    ]
  },
  {
    id: '9',
    titre: 'Blockchain et Smart Contracts',
    description: 'Découvrez la technologie blockchain, Ethereum, et créez des smart contracts pour développer des applications décentralisées innovantes.',
    imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    niveau: 'Avancé',
    tags: ['Blockchain', 'Ethereum', 'Smart Contracts', 'DApps', 'Cryptographie'],
    dateDebut: '2025-03-24',
    dateFin: '2025-03-27',
    formateur: 'F9',
    nombreEtudiants: 8,
    sessions: [
      {
        id: '9-1',
        localisation: 'Salle I - ISG Tunis',
        heure: '10:00 - 16:00',
        dateDebut: '2025-03-24',
        dateFin: '2025-03-27',
        nombreEtudiants: 8,
        formateur: 'F9', // Hatem Ghorbel
        formateur1: 'F17' // Wissem Jendoubi
      }
    ]
  },
  {
    id: '10',
    titre: 'Intelligence Artificielle et NLP',
    description: 'Explorez le traitement du langage naturel, les modèles de language transformers et créez des chatbots intelligents avec GPT et BERT.',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    niveau: 'Avancé',
    tags: ['NLP', 'Intelligence Artificielle', 'GPT', 'BERT', 'Chatbots', 'Traitement du Langage'],
    dateDebut: '2025-04-01',
    dateFin: '2025-04-04',
    formateur: 'F10',
    nombreEtudiants: 6,
    sessions: [
      {
        id: '10-1',
        localisation: 'Amphithéâtre - FST',
        heure: '09:30 - 15:30',
        dateDebut: '2025-04-01',
        dateFin: '2025-04-04',
        nombreEtudiants: 6,
        formateur: 'F10', // Fatima Zahra Ben Ali
        formateur1: 'F18' // Ali Riahi
      }
    ]
  },
  {
    id: '11',
    titre: 'Web Design Responsif et UX/UI',
    description: 'Maîtrisez HTML5, CSS3, et les principes de design responsif pour créer des interfaces web modernes, accessibles et conviviales.',
    imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    niveau: 'Débutant',
    tags: ['UX/UI', 'Web Design', 'HTML5', 'CSS3', 'Responsive Design', 'Design'],
    dateDebut: '2025-04-08',
    dateFin: '2025-04-11',
    formateur: 'F11',
    nombreEtudiants: 4,
    sessions: [
      {
        id: '11-1',
        localisation: 'Salle J - ISD',
        heure: '14:00 - 17:00',
        dateDebut: '2025-04-08',
        dateFin: '2025-04-11',
        nombreEtudiants: 4,
        formateur: 'F11', // Yasmine Mekki
        formateur1: '' // Pas de deuxième formateur
      }
    ]
  },
  {
    id: '12',
    titre: 'Gestion de Bases de Données SQL Avancée',
    description: 'Apprenez les concepts avancés de SQL, l\'optimisation des requêtes, l\'indexation et les stratégies de gestion de grandes bases de données.',
    imageUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    niveau: 'Avancé',
    tags: ['SQL', 'Bases de Données', 'Optimisation', 'Indexation', 'BDD'],
    dateDebut: '2025-04-15',
    dateFin: '2025-04-18',
    formateur: 'F12',
    nombreEtudiants: 5,
    sessions: [
      {
        id: '12-1',
        localisation: 'Salle K - ENSI',
        heure: '09:00 - 13:00',
        dateDebut: '2025-04-15',
        dateFin: '2025-04-18',
        nombreEtudiants: 5,
        formateur: 'F12', // Khaled Ben Romdhane
        formateur1: '' // Pas de deuxième formateur
      }
    ]
  },
  {
    id: '13',
    titre: 'Réalité Augmentée et Virtuelle',
    description: 'Explorez les technologies AR/VR, développez des expériences immersives avec Unity et Unreal Engine pour les applications modernes.',
    imageUrl: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    niveau: 'Intermédiaire',
    tags: ['AR/VR', 'Réalité Augmentée', 'Réalité Virtuelle', 'Unity', 'Unreal Engine'],
    dateDebut: '2025-04-22',
    dateFin: '2025-04-25',
    formateur: '',
    nombreEtudiants: 3,
    sessions: [
      {
        id: '13-1',
        localisation: 'Lab VR - ISAMM',
        heure: '10:00 - 17:00',
        dateDebut: '2025-04-22',
        dateFin: '2025-04-25',
        nombreEtudiants: 3,
        formateur: '', // Pas de formateur
        formateur1: '' // Pas de deuxième formateur
      }
    ]
  },
  {
    id: '14',
    titre: 'IoT et Systèmes Embarqués',
    description: 'Apprenez à programmer des microcontrôleurs Arduino, Raspberry Pi et créez des solutions IoT connectées et intelligentes.',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    niveau: 'Débutant',
    tags: ['IoT', 'Arduino', 'Raspberry Pi', 'Systèmes Embarqués', 'Électronique'],
    dateDebut: '2025-05-01',
    dateFin: '2025-05-04',
    formateur: '',
    nombreEtudiants: 0,
    sessions: [
      {
        id: '14-1',
        localisation: 'Lab Électronique - ENIT',
        heure: '14:00 - 18:00',
        dateDebut: '2025-05-01',
        dateFin: '2025-05-04',
        nombreEtudiants: 0,
        formateur: '', // Pas de formateur
        formateur1: '' // Pas de deuxième formateur
      }
    ]
  },
  {
    id: '15',
    titre: 'Programmation en C++ pour Systèmes',
    description: 'Maîtrisez C++ pour le développement de systèmes performants, les jeux vidéo et les applications critique en temps réel.',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    niveau: 'Avancé',
    tags: ['C++', 'Programmation Système', 'Jeux Vidéo', 'Temps Réel', 'Performance'],
    dateDebut: '2025-05-08',
    dateFin: '2025-05-11',
    formateur: '',
    nombreEtudiants: 2,
    sessions: [
      {
        id: '15-1',
        localisation: 'Salle L - ISI',
        heure: '09:00 - 12:00',
        dateDebut: '2025-05-08',
        dateFin: '2025-05-11',
        nombreEtudiants: 2,
        formateur: '', // Pas de formateur
        formateur1: '' // Pas de deuxième formateur
      }
    ]
  },
  {
    id: '16',
    titre: 'GraphQL et API Modernes',
    description: 'Apprenez GraphQL comme alternative à REST, créez des APIs flexibles et efficaces pour vos applications frontend et backend.',
    imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    niveau: 'Intermédiaire',
    tags: ['GraphQL', 'API', 'Backend', 'REST', 'Web Services'],
    dateDebut: '2025-05-15',
    dateFin: '2025-05-18',
    formateur: '',
    nombreEtudiants: 11,
    sessions: [
      {
        id: '16-1',
        localisation: 'Salle M - ISET Nabeul',
        heure: '10:00 - 13:00',
        dateDebut: '2025-05-15',
        dateFin: '2025-05-18',
        nombreEtudiants: 11,
        formateur: '', // Pas de formateur
        formateur1: '' // Pas de deuxième formateur
      }
    ]
  },
  {
    id: '17',
    titre: 'Sécurité des Applications Web',
    description: 'Découvrez les vulnérabilités courantes (SQL Injection, XSS, CSRF), et implémentez des défenses robustes pour sécuriser vos applications.',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    niveau: 'Avancé',
    tags: ['Sécurité Web', 'SQL Injection', 'XSS', 'CSRF', 'OWASP', 'Hacking Éthique'],
    dateDebut: '2025-05-22',
    dateFin: '2025-05-25',
    formateur: '',
    nombreEtudiants: 9,
    sessions: [
      {
        id: '17-1',
        localisation: 'Salle N - ISSAT Sousse',
        heure: '09:30 - 16:30',
        dateDebut: '2025-05-22',
        dateFin: '2025-05-25',
        nombreEtudiants: 9,
        formateur: '', // Pas de formateur
        formateur1: '' // Pas de deuxième formateur
      }
    ]
  },
  {
    id: '18',
    titre: 'Microservices Architecture',
    description: 'Concevez et déployez des architectures microservices scalables avec Spring Boot, Docker et Kubernetes.',
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    niveau: 'Avancé',
    tags: ['Microservices', 'Spring Boot', 'Architecture', 'Scalabilité', 'Docker', 'Kubernetes'],
    dateDebut: '2025-06-01',
    dateFin: '2025-06-04',
    formateur: '',
    nombreEtudiants: 7,
    sessions: [
      {
        id: '18-1',
        localisation: 'Salle O - ISIMS Sfax',
        heure: '14:00 - 18:00',
        dateDebut: '2025-06-01',
        dateFin: '2025-06-04',
        nombreEtudiants: 7,
        formateur: '', // Pas de formateur
        formateur1: '' // Pas de deuxième formateur
      }
    ]
  },
  {
    id: '19',
    titre: 'Testing et QA Automatisé',
    description: 'Maîtrisez les tests unitaires, l\'intégration et end-to-end avec Jest, Selenium et les frameworks de testing modernes.',
    imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    niveau: 'Intermédiaire',
    tags: ['Testing', 'QA', 'Jest', 'Selenium', 'Tests Automatisés', 'Qualité'],
    dateDebut: '2025-06-08',
    dateFin: '2025-06-11',
    formateur: '',
    nombreEtudiants: 12,
    sessions: [
      {
        id: '19-1',
        localisation: 'Salle P - ISET Béja',
        heure: '09:00 - 13:00',
        dateDebut: '2025-06-08',
        dateFin: '2025-06-11',
        nombreEtudiants: 12,
        formateur: '', // Pas de formateur
        formateur1: '' // Pas de deuxième formateur
      }
    ]
  },
  {
    id: '20',
    titre: 'Big Data et Apache Spark',
    description: 'Traitez et analysez de grandes quantités de données avec Apache Spark, Hadoop et les solutions de Big Data modernes.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    niveau: 'Avancé',
    tags: ['Big Data', 'Apache Spark', 'Hadoop', 'Analyse de Données', 'Data Engineering'],
    dateDebut: '2025-06-15',
    dateFin: '2025-06-18',
    formateur: '',
    nombreEtudiants: 1,
    sessions: [
      {
        id: '20-1',
        localisation: 'Data Lab - INSAT',
        heure: '10:00 - 17:00',
        dateDebut: '2025-06-15',
        dateFin: '2025-06-18',
        nombreEtudiants: 1,
        formateur: '', // Pas de formateur
        formateur1: '' // Pas de deuxième formateur
      }
    ]
  },
  {
    id: '21',
    titre: 'Programmation Fonctionnelle avec Rust',
    description: 'Découvrez Rust, un langage moderne garantissant la sécurité mémoire, idéal pour les systèmes hautes performances.',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    niveau: 'Avancé',
    tags: ['Rust', 'Programmation Fonctionnelle', 'Sécurité Mémoire', 'Systèmes', 'Performance'],
    dateDebut: '2025-06-22',
    dateFin: '2025-06-25',
    formateur: '',
    nombreEtudiants: 10,
    sessions: [
      {
        id: '21-1',
        localisation: 'Salle Q - ENICarthage',
        heure: '09:00 - 12:00',
        dateDebut: '2025-06-22',
        dateFin: '2025-06-25',
        nombreEtudiants: 10,
        formateur: '', // Pas de formateur
        formateur1: '' // Pas de deuxième formateur
      }
    ]
  }
];