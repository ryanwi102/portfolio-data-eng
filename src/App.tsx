// @ts-nocheck
import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Github, Linkedin, Mail, Database, Server, Code2, ChevronDown, ExternalLink } from 'lucide-react';
import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';

function App() {
  const [init, setInit] = useState(false);

  // --- CONFIGURATION GALAXIE ---
  const galaxyOptions = useMemo(() => ({
    background: { color: { value: "transparent" } },
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        resize: { enable: true },
      },
      modes: { repulse: { distance: 100, duration: 0.4 } },
    },
    particles: {
      color: { value: "#ffffff" },
      move: { enable: true, speed: 0.3 }, // Vitesse ralentie pour plus d'élégance
      number: { density: { enable: true, area: 800 }, value: 120 },
      opacity: { value: { min: 0.1, max: 0.5 }, animation: { enable: true, speed: 1 } },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 2 } },
    },
    detectRetina: true,
  }), []);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Fonction de scroll fluide
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-cyan-500 selection:text-white pb-20 relative overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#090E24] to-black text-slate-200">
      
      {/* BACKGROUND ANIMÉ */}
      {init && (
        <Particles id="tsparticles" options={galaxyOptions} className="absolute inset-0 -z-10 h-full w-full" />
      )}

      {/* NAVBAR FLOTTANTE */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/70 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tighter bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text cursor-pointer" onClick={() => scrollToSection('hero')}>
            R.E.
          </div>
          <div className="flex gap-6 text-sm font-medium text-slate-300">
            <button onClick={() => scrollToSection('hero')} className="hover:text-cyan-400 transition">Accueil</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-cyan-400 transition">Projets</button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-cyan-400 transition">Compétences</button>
          </div>
        </div>
      </nav>

      {/* CONTENU PRINCIPAL */}
      <div className="relative z-10">
        
        {/* HERO SECTION */}
        <header id="hero" className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-block px-3 py-1 mb-4 text-xs font-mono text-cyan-400 border border-cyan-500/30 rounded-full bg-cyan-900/10">
              Disponible pour un stage (4-6 mois)
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-cyan-300 via-blue-500 to-purple-600 text-transparent bg-clip-text pb-2">
              Ryan Edwin
            </h1>
            
            <div className="text-2xl md:text-3xl text-slate-300 mb-8 font-light h-20">
              <Typewriter
                options={{
                  strings: [
                    'Élève Ingénieur Informatique 4A',
                    'Backend Developer (Python/Node)',
                    'Data Analyst & Engineer',
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 30,
                }}
              />
            </div>

            <p className="text-slate-400 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
              Je construis des solutions logicielles robustes et je transforme la donnée brute en intelligence exploitable.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a href="https://github.com/ryanwi102" target="_blank" className="flex items-center gap-2 px-6 py-3 bg-slate-800 rounded-full hover:bg-slate-700 transition border border-slate-700 group">
                <Github size={20} className="group-hover:text-white transition" /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/ryanedwinruban" target="_blank" className="flex items-center gap-2 px-6 py-3 bg-blue-700 rounded-full hover:bg-blue-600 transition shadow-lg shadow-blue-900/20">
                <Linkedin size={20} /> LinkedIn
              </a>
              <a href="mailto:edwinruban@et.esiea.fr" className="flex items-center gap-2 px-6 py-3 bg-slate-800 rounded-full hover:bg-slate-700 transition border border-slate-700">
                <Mail size={20} /> Contact
              </a>
            </div>
          </motion.div>

          {/* FLÈCHE QUI DESCEND */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 animate-bounce cursor-pointer"
            onClick={() => scrollToSection('projects')}
          >
            <ChevronDown size={32} className="text-slate-500" />
          </motion.div>
        </header>

        {/* PROJETS */}
        <section id="projects" className="max-w-5xl mx-auto px-6 py-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-12 border-l-4 border-cyan-500 pl-4 flex items-center gap-3">
              <Code2 className="text-cyan-400"/> Projets Récents
            </h3>
          </motion.div>
          
          <div className="grid gap-10">
            
            {/* PROJET 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group bg-slate-900/40 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-cyan-500/50 transition duration-300 shadow-xl hover:shadow-cyan-900/20"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-cyan-950/50 rounded-lg text-cyan-400">
                    <Server size={28} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition">Haven</h4>
                    <span className="text-sm text-slate-400">Solution Mobilité Douce</span>
                  </div>
                </div>
                <span className="bg-cyan-900/20 text-cyan-300 text-xs px-3 py-1 rounded-full border border-cyan-800">Projet Annuel</span>
              </div>
              
              <p className="text-slate-300 mb-6 leading-relaxed">
                Développement d'un backend complet pour une application de sécurité routière. Gestion temps réel des incidents (accidents, travaux) et analyse des trajets utilisateurs.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {['Python', 'Firebase', 'NoSQL', 'GeoSpatial Data', 'API REST'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-slate-800 text-cyan-200 text-xs font-mono rounded-full border border-slate-700">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* PROJET 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group bg-slate-900/40 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-purple-500/50 transition duration-300 shadow-xl hover:shadow-purple-900/20"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-purple-950/50 rounded-lg text-purple-400">
                    <Database size={28} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white group-hover:text-purple-400 transition">Data Analysis</h4>
                    <span className="text-sm text-slate-400">Exploration & Certification</span>
                  </div>
                </div>
                <span className="bg-purple-900/20 text-purple-300 text-xs px-3 py-1 rounded-full border border-purple-800">FreeCodeCamp</span>
              </div>
              
              <p className="text-slate-300 mb-6 leading-relaxed">
                Pipeline complet d'analyse de données : du nettoyage de datasets bruts à la visualisation avancée pour l'extraction d'insights décisionnels.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-slate-800 text-purple-200 text-xs font-mono rounded-full border border-slate-700">
                    {tech}
                  </span>
                ))}
              </div>
              
              <a href="https://www.freecodecamp.org/learn/data-analysis-with-python/" target="_blank" className="inline-flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 font-medium transition">
                Voir la certification <ExternalLink size={14} />
              </a>
            </motion.div>

          </div>
        </section>

        {/* COMPETENCES */}
        <section id="skills" className="bg-slate-900/30 py-20 border-t border-white/5">
          <div className="max-w-5xl mx-auto px-6">
             <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h3 className="text-3xl font-bold mb-4">Arsenal Technique</h3>
                <p className="text-slate-400">Les outils que j'utilise pour construire l'avenir</p>
             </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
               {[
                 { icon: Code2, title: "Frontend", tools: "React, TS, Tailwind", color: "text-blue-400" },
                 { icon: Database, title: "Data Science", tools: "Pandas, NumPy, Viz", color: "text-green-400" },
                 { icon: Server, title: "Backend", tools: "Python, Firebase, SQL", color: "text-orange-400" },
                 { icon: ExternalLink, title: "Outils", tools: "Git, Linux, VS Code", color: "text-pink-400" },
               ].map((skill, index) => (
                 <motion.div 
                    key={skill.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-slate-800/50 p-6 rounded-xl text-center hover:bg-slate-800 transition border border-white/5 hover:border-slate-600 group"
                 >
                    <skill.icon className={`mx-auto mb-4 ${skill.color} group-hover:scale-110 transition duration-300`} size={32} />
                    <h4 className="font-bold text-lg mb-2 text-white">{skill.title}</h4>
                    <p className="text-sm text-slate-400">{skill.tools}</p>
                 </motion.div>
               ))}
            </div>
          </div>
        </section>

        <footer className="text-center text-slate-600 text-sm py-10 bg-black/20">
          <p className="mb-2">© 2025 - Ryan Edwin</p>
          <p>Fait avec React, Tailwind & beaucoup de ☕️</p>
        </footer>
      </div>
    </div>
  )
}

export default App