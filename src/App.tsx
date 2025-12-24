// @ts-nocheck
import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Github, Linkedin, Mail, Database, Server, Code2, ChevronDown, ExternalLink, Send, Terminal } from 'lucide-react';
import { motion, useScroll, useSpring } from "framer-motion";
import Typewriter from 'typewriter-effect';

function App() {
  const [init, setInit] = useState(false);
  
  // Barre de progression (Scroll)
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // --- CONFIGURATION PARTICULES (Optimisée) ---
  const galaxyOptions = useMemo(() => ({
    background: { color: { value: "transparent" } },
    fpsLimit: 60, // Limité à 60 pour la performance batterie
    interactivity: {
      events: {
        onHover: { enable: true, mode: "grab" }, // Effet "constellation" au survol
        resize: { enable: true },
      },
      modes: { grab: { distance: 140, links: { opacity: 0.5 } } },
    },
    particles: {
      color: { value: "#ffffff" },
      links: { color: "#ffffff", distance: 150, enable: false, opacity: 0.5, width: 1 }, // Liens désactivés par défaut pour clarté
      move: { enable: true, speed: 0.6 },
      number: { density: { enable: true, area: 800 }, value: 100 },
      opacity: { value: { min: 0.1, max: 0.5 }, animation: { enable: true, speed: 1 } },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 2 } },
    },
    detectRetina: true,
  }), []);

  useEffect(() => {
    initParticlesEngine(async (engine) => { await loadSlim(engine); }).then(() => setInit(true));
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) { element.scrollIntoView({ behavior: 'smooth' }); }
  };

  // Fonction pour donner une couleur aux badges technos
  const getTechColor = (tech) => {
    const colors = {
      'Python': 'text-yellow-300 border-yellow-500/30 bg-yellow-500/10',
      'React': 'text-cyan-300 border-cyan-500/30 bg-cyan-500/10',
      'Firebase': 'text-orange-300 border-orange-500/30 bg-orange-500/10',
      'Data': 'text-purple-300 border-purple-500/30 bg-purple-500/10',
      'SQL': 'text-blue-300 border-blue-500/30 bg-blue-500/10',
      'default': 'text-slate-300 border-slate-500/30 bg-slate-500/10'
    };
    return colors[Object.keys(colors).find(key => tech.includes(key))] || colors['default'];
  };

  return (
    <div className="min-h-screen font-sans selection:bg-cyan-500 selection:text-white pb-20 relative overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#090E24] to-black text-slate-200">
      
      {/* BARRE DE PROGRESSION (Tout en haut) */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 origin-left z-[60]" style={{ scaleX }} />

      {/* BACKGROUND */}
      {init && <Particles id="tsparticles" options={galaxyOptions} className="absolute inset-0 -z-10 h-full w-full" />}

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-xl flex items-center gap-2 cursor-pointer group" onClick={() => scrollToSection('hero')}>
            <Terminal size={20} className="text-cyan-400 group-hover:rotate-12 transition" />
            <span className="bg-gradient-to-r from-slate-100 to-slate-400 text-transparent bg-clip-text">Ryan.Dev</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            {['Accueil', 'Projets', 'Compétences'].map((item) => (
              <button key={item} onClick={() => scrollToSection(item === 'Accueil' ? 'hero' : item.toLowerCase().replace('é','e'))} className="hover:text-cyan-400 transition hover:scale-105">
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header id="hero" className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8 }}
          className="max-w-4xl relative"
        >
          {/* Badge Stage */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-medium text-cyan-300 border border-cyan-500/30 rounded-full bg-cyan-500/10 cursor-default"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Dispo pour Stage (4-6 mois)
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white tracking-tight">
            Ryan Edwin
          </h1>
          
          <div className="text-2xl md:text-3xl text-slate-300 mb-8 font-light h-16 flex justify-center items-center">
            <span className="text-cyan-400 mr-2">{'>'}</span>
            <Typewriter
              options={{
                strings: ['Software Engineer', 'Data Analyst', 'Backend Developer'],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </div>

          <p className="text-slate-400 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
            Étudiant Ingénieur 4A. Je combine logique algorithmique et analyse de données pour créer des solutions performantes et évolutives.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://github.com/ryanwi102" target="_blank" className="flex items-center gap-2 px-6 py-3 bg-white/5 rounded-full hover:bg-white/10 transition border border-white/10 group">
              <Github size={20} className="group-hover:rotate-12 transition" /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/ryanedwinruban" target="_blank" className="flex items-center gap-2 px-6 py-3 bg-blue-600 rounded-full hover:bg-blue-500 transition shadow-lg shadow-blue-900/20 group">
              <Linkedin size={20} /> LinkedIn
              <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-1" />
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
          className="absolute bottom-10 animate-bounce cursor-pointer p-2 hover:bg-white/5 rounded-full transition"
          onClick={() => scrollToSection('projets')}
        >
          <ChevronDown size={32} className="text-slate-500" />
        </motion.div>
      </header>

      {/* PROJETS */}
      <section id="projets" className="max-w-6xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-bold mb-16 flex items-center gap-3">
          <span className="bg-cyan-500 w-2 h-8 rounded-full"></span>
          Projets Réalisés
        </h3>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Carte Projet 1 */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="group bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition">
              <Server size={100} />
            </div>
            
            <div className="flex justify-between items-start mb-6 relative z-10">
              <div className="p-3 bg-cyan-950/50 rounded-xl text-cyan-400 border border-cyan-500/20">
                <Server size={28} />
              </div>
              <span className="text-xs font-mono text-slate-500 px-2 py-1 border border-slate-700 rounded">2024</span>
            </div>

            <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition">Haven</h4>
            <p className="text-slate-400 mb-6 line-clamp-3">
              Backend complet pour la gestion de mobilités douces. Système de signalement d'aléas en temps réel et sécurisation des données trajets.
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {['Python', 'Firebase', 'NoSQL', 'API'].map(tech => (
                <span key={tech} className={`px-3 py-1 text-xs font-mono rounded-full border ${getTechColor(tech)}`}>
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Carte Projet 2 */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="group bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition">
              <Database size={100} />
            </div>

            <div className="flex justify-between items-start mb-6 relative z-10">
              <div className="p-3 bg-purple-950/50 rounded-xl text-purple-400 border border-purple-500/20">
                <Database size={28} />
              </div>
              <span className="text-xs font-mono text-slate-500 px-2 py-1 border border-slate-700 rounded">Certif</span>
            </div>

            <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition">Data Analysis</h4>
            <p className="text-slate-400 mb-6 line-clamp-3">
              Certification FreeCodeCamp. Nettoyage de données (Data Cleaning), visualisation et extraction d'insights via Pandas et Matplotlib.
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {['Python', 'Pandas', 'Data Viz', 'Jupyter'].map(tech => (
                <span key={tech} className={`px-3 py-1 text-xs font-mono rounded-full border ${getTechColor(tech)}`}>
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* COMPÉTENCES & FOOTER CTA */}
      <section id="competences" className="bg-slate-900/30 py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-12">Stack Technique</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
            {[
              { name: "Frontend", icon: Code2, desc: "React, TS" },
              { name: "Backend", icon: Server, desc: "Python, SQL" },
              { name: "Data", icon: Database, desc: "Pandas, Viz" },
              { name: "Tools", icon: Terminal, desc: "Git, Linux" }
            ].map((skill) => (
              <div key={skill.name} className="p-6 bg-slate-800/40 rounded-xl border border-white/5 hover:bg-slate-800 transition">
                <skill.icon className="mx-auto mb-3 text-slate-300" />
                <div className="font-bold text-slate-200">{skill.name}</div>
                <div className="text-xs text-slate-500 mt-1">{skill.desc}</div>
              </div>
            ))}
          </div>

          {/* CALL TO ACTION FINAL */}
          <div className="bg-gradient-to-br from-cyan-900/50 to-blue-900/50 p-8 md:p-12 rounded-3xl border border-cyan-500/20 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Prêt à collaborer ?</h2>
              <p className="text-cyan-100 mb-8 text-lg">
                Je suis actuellement disponible pour un entretien afin de discuter de votre besoin en stage.
              </p>
              <a 
                href="mailto:edwinruban@et.esiea.fr" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-cyan-50 transition transform hover:scale-105 shadow-xl"
              >
                <Send size={20} /> Me Contacter
              </a>
            </div>
            {/* Décoration d'arrière plan */}
            <div className="absolute -right-10 -bottom-20 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl"></div>
          </div>

          <p className="text-slate-600 text-sm mt-16">
            © 2025 Ryan Edwin • Portfolio V4 Ultimate
          </p>
        </div>
      </section>
    </div>
  )
}

export default App