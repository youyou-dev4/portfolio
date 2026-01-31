import React, { useState } from 'react';
import { Github, Linkedin, Mail, MapPin, Phone, Code, Database, Smartphone, Terminal, Download, ArrowRight, Moon, Sun } from 'lucide-react';

const Portfolio = () => {
  // État pour gérer le mode sombre (faux par défaut = mode clair)
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const personalInfo = {
    name: "Younes Matoub",
    title: "Développeur Informatique Junior",
    subtitle: "Étudiant L3 & Ambassadeur International - Université de Lille",
    location: "Villeneuve D'Ascq, 59650",
    phone: "(+33) 780 86 34 66",
    email: "matoub.youness@gmail.com",
    linkedin: "linkedin.com/in/younes-matoub",
    github: "github.com/youyou-dev4",
    availability: "Recherche stage de 3 mois min. à partir du 13 avril 2026"
  };

  const projects = [
    {
      id: 1,
      title: "Application de Covoiturage",
      category: "Mobile & Web",
      period: "Fév 2025 - Juin 2025",
      description: "Solution complète de covoiturage avec app mobile et dashboard admin.",
      tags: ["Flutter", "Firebase", "React", "UML"],
      image: "/projet-covoit.jpg", 
      githubLink: "https://github.com/Sofiane-Meziane/Bladiway", 
      details: [
        "Architecture et modèles de données sur Firebase",
        "App mobile cross-platform avec Flutter",
        "Dashboard administrateur en React"
      ]
    },
    {
      id: 2,
      title: "Système de Vélos Libre-service",
      category: "Backend & Architecture",
      period: "Oct 2025 - Déc 2025",
      description: "Conception orientée objet d'un système de location robuste.",
      tags: ["Java", "Maven", "JUnit 5", "Design Patterns"],
      image: "/projet-velo.jpg",
      githubLink: "https://github.com/youyou-dev4/Velos-libre-service",
      details: [
        "Mise en œuvre des principes SOLID",
        "Tests unitaires avec JUnit 5",
        "Documentation technique et UML"
      ]
    },
    {
      id: 3,
      title: "Gestion d'Auto-école",
      category: "Desktop",
      period: "Oct 2024 - Jan 2025",
      description: "Logiciel de gestion administrative complet (élèves, planning, compta).",
      tags: ["Java", "JavaFX", "SQL", "MVC"],
      image: "/projet-auto.jpg",
      githubLink: "https://github.com/youyou-dev4/autoEcole",
      details: [
        "Gestion des élèves, moniteurs et plannings",
        "Conception UML (Use cases, Séquences)",
        "Connexion base de données SQL"
      ]
    },
    {
      id: 4,
      title: "Plateforme Web (Stage)",
      category: "Fullstack Web",
      period: "Sept 2023 - Mars 2024",
      description: "Développement web au Centre de recherche en langue amazighes.",
      tags: ["HTML/CSS", "PHP", "JavaScript", "SQL"],
      image: "/projet-web.jpg",
      githubLink: "https://github.com/youyou-dev4/WikiZed",
      details: [
        "Rédaction du cahier des charges",
        "Développement Fullstack",
        "Débogage et maintenance"
      ]
    }
  ];

  // Compétences sans niveaux, juste la liste
  const skills = [
    { name: "Java / JavaFX", icon: <Code size={20} /> },
    { name: "React / JS", icon: <Code size={20} /> },
    { name: "Flutter / Dart", icon: <Smartphone size={20} /> },
    { name: "PHP / SQL", icon: <Database size={20} /> },
    { name: "Python / C++", icon: <Terminal size={20} /> },
    { name: "Node.js", icon: <Terminal size={20} /> },
    { name: "Git / GitHub", icon: <Code size={20} /> },
    { name: "MongoDB", icon: <Database size={20} /> }
  ];

  // Styles dynamiques selon le mode
  const theme = {
    bg: darkMode ? "bg-gray-900" : "bg-gray-50",
    text: darkMode ? "text-gray-100" : "text-gray-800",
    cardBg: darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200",
    navBg: darkMode ? "bg-gray-900/90 border-gray-700" : "bg-white/90 border-gray-100",
    subText: darkMode ? "text-gray-400" : "text-gray-600",
    accent: "text-blue-500",
    tagBg: darkMode ? "bg-gray-700 text-gray-300" : "bg-blue-50 text-blue-700",
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${theme.bg} ${theme.text}`}>
      
      {/* Navigation */}
      <nav className={`backdrop-blur-md border-b sticky top-0 z-50 transition-colors duration-300 ${theme.navBg}`}>
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-500 tracking-tighter">YM.</h1>
          
          <div className="flex items-center gap-6">
            <div className="hidden md:flex space-x-8 font-medium text-sm">
              <a href="#about" className="hover:text-blue-500 transition">À propos</a>
              <a href="#skills" className="hover:text-blue-500 transition">Compétences</a>
              <a href="#projects" className="hover:text-blue-500 transition">Projets</a>
              <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
            </div>
            
            {/* Bouton Toggle Dark Mode */}
            <button 
              onClick={toggleTheme} 
              className={`p-2 rounded-full transition-colors ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'}`}
              aria-label="Changer le thème"
            >
              {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-600" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className={`pt-24 pb-32 transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          
          <div className="mb-8 relative inline-block">
            <div className={`w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 shadow-xl mx-auto ${darkMode ? 'border-gray-700' : 'border-white'}`}>
              <img 
                src="/photo-profil.jpg" 
                alt="Younes Matoub" 
                className="w-full h-full object-cover"
                onError={(e) => {e.target.onerror = null; e.target.src = "https://via.placeholder.com/150"}}
              />
            </div>
            <div className="absolute bottom-2 right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-transparent" title="Disponible"></div>
          </div>

          <div className={`inline-block px-4 py-1.5 rounded-full font-semibold text-sm mb-6 border ${theme.tagBg} ${darkMode ? 'border-gray-600' : 'border-blue-100'}`}>
            🚀 {personalInfo.availability}
          </div>
          
          <h1 className={`text-4xl md:text-6xl font-extrabold mb-6 tracking-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Younes <span className="text-blue-500">Matoub</span>
          </h1>
          
          <p className={`text-xl mb-10 max-w-2xl mx-auto leading-relaxed ${theme.subText}`}>
            {personalInfo.title}. Passionné par le développement <span className={`font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Fullstack</span> et <span className={`font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Mobile</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#contact" className="px-8 py-3.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition shadow-lg shadow-blue-600/20 font-medium">
              Me contacter
            </a>
            <a 
              href="/cv.pdf" 
              download="CV_Younes_MATOUB.pdf"
              className={`px-8 py-3.5 border rounded-xl transition flex items-center justify-center gap-2 font-medium ${darkMode ? 'bg-gray-800 border-gray-700 hover:bg-gray-700' : 'bg-white border-gray-200 hover:bg-gray-50 text-gray-700'}`}
            >
              <Download size={18} /> Télécharger mon CV
            </a>
          </div>
        </div>
      </header>

      {/* Skills Section - Nouvelle Version Grille */}
      <section id="skills" className={`py-20 transition-colors duration-300 ${theme.bg}`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-8">Compétences Techniques</h2>
              {/* Grille de compétences simple sans pourcentage */}
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className={`p-4 rounded-xl border flex items-center gap-3 hover:border-blue-500 transition-colors ${theme.cardBg}`}>
                    <span className="text-blue-500">{skill.icon}</span>
                    <span className="font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full md:w-1/2">
               <h2 className="text-3xl font-bold mb-8">Langues & Outils</h2>
               <div className={`p-8 rounded-2xl border h-fit ${theme.cardBg}`}>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {['UML', 'Merise', 'JUnit', 'Maven', 'Express', 'Firebase', 'VBA', 'Pack Office'].map((tag) => (
                      <span key={tag} className={`px-3 py-1.5 rounded-lg text-sm font-medium border ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-300' : 'bg-gray-50 border-gray-200 text-gray-600'}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-bold mb-4 border-b pb-2 border-gray-700">Langues</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>Français</span>
                      <span className="px-2 py-1 bg-green-900/30 text-green-500 rounded text-xs font-bold border border-green-500/20">C1 Expert</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Anglais</span>
                      <span className="px-2 py-1 bg-blue-900/30 text-blue-500 rounded text-xs font-bold border border-blue-500/20">B2 Avancé</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Arabe</span>
                      <span className="px-2 py-1 bg-orange-900/30 text-orange-500 rounded text-xs font-bold border border-orange-500/20">Natif</span>
                    </div>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-24 transition-colors duration-300 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Projets Récents</h2>
              <p className={theme.subText}>Une sélection de mes travaux académiques et stages.</p>
            </div>
            <a href={`https://${personalInfo.github}`} target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 text-blue-500 font-medium hover:underline">
              Voir tout sur GitHub <ArrowRight size={16} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className={`group rounded-2xl border overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col ${theme.cardBg}`}>
                
                {/* Image du projet */}
                <div className="h-48 overflow-hidden bg-gray-100 relative">
                   <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-white text-gray-900 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2">
                        <Github size={18} /> Voir le code
                      </a>
                   </div>
                   <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {e.target.onerror = null; e.target.src = "https://via.placeholder.com/800x400?text=Projet+Code"}} 
                   />
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${theme.tagBg}`}>
                      {project.category}
                    </span>
                    <a href={project.githubLink} className={`${theme.subText} hover:text-blue-500 transition`}>
                      <Github size={20} />
                    </a>
                  </div>

                  <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>{project.title}</h3>
                  <p className={`${theme.subText} text-sm mb-6 line-clamp-2`}>{project.description}</p>
                  
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className={`text-xs font-medium px-2 py-1 rounded ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact Compact */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-8">Prêt à collaborer ?</h2>
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
            <a href={`mailto:${personalInfo.email}`} className="flex items-center justify-center gap-3 px-6 py-3 bg-white/10 rounded-lg hover:bg-white/20 transition">
              <Mail size={20} /> {personalInfo.email}
            </a>
            <a href={`tel:${personalInfo.phone}`} className="flex items-center justify-center gap-3 px-6 py-3 bg-white/10 rounded-lg hover:bg-white/20 transition">
              <Phone size={20} /> {personalInfo.phone}
            </a>
          </div>
          <div className="flex justify-center gap-6 mb-8">
            <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
              <Linkedin size={24} />
            </a>
            <a href={`https://${personalInfo.github}`} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
              <Github size={24} />
            </a>
          </div>
          <p className="text-gray-500 text-sm">© 2026 Younes Matoub. Portfolio React.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;