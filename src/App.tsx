import { Github, Linkedin, Mail, Database, Server, Code2 } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-cyan-500 selection:text-white pb-20">
      
      {/* HEADER / HERO */}
      <header className="max-w-4xl mx-auto pt-20 px-6 mb-16">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
          Ryan Edwin 
        </h1>
        <h2 className="text-2xl text-slate-300 mb-6">
          • Élève Ingénieur (4ème année) •
        </h2>
        <p className="text-slate-400 max-w-2xl mb-8 text-lg">
          À la recherche d'un stage de 4 à 6 mois. Passionné par la création de solutions backend robustes 
          et l'analyse de données pour résoudre des problèmes concrets.
        </p>
        <div className="flex gap-4">
          <a href="https://github.com/ryanwi102" target="_blank" className="flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition border border-slate-700">
            <Github size={20} /> GitHub
          </a>
          <a href="www.linkedin.com/in/ryanedwinruban" target="_blank" className="flex items-center gap-2 px-4 py-2 bg-blue-700 rounded-lg hover:bg-blue-600 transition">
            <Linkedin size={20} /> LinkedIn
          </a>
          <a href="edwinruban@et.esiea.fr" className="flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition border border-slate-700">
            <Mail size={20} /> Contact
          </a>
        </div>
      </header>

      {/* PROJETS */}
      <main className="max-w-4xl mx-auto px-6">
        <h3 className="text-3xl font-bold mb-8 border-l-4 border-cyan-500 pl-4">Projets Récents</h3>
        
        <div className="grid gap-8">
          
          {/* PROJET 1 : HAVEN */}
          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition duration-300">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <Server className="text-cyan-400" size={24} />
                <h4 className="text-2xl font-bold">Haven - Mobilité Douce</h4>
              </div>
              <span className="bg-cyan-900/30 text-cyan-300 text-xs px-2 py-1 rounded border border-cyan-800">Projet Annuel</span>
            </div>
            <p className="text-slate-300 mb-4">
              Solution intelligente pour les mobilités douces. Développement d'un backend complet pour la gestion des trajets et des aléas en temps réel.
            </p>
            <ul className="list-disc list-inside text-slate-400 mb-6 space-y-1">
              <li>Architecture Backend & Stockage de données sur <strong>Firebase</strong>.</li>
              <li>Gestion des retours de trajets et signalement d'incidents (accidents, travaux).</li>
              <li>Service d'authentification et sécurisation des données utilisateurs.</li>
            </ul>
            <div className="flex gap-2 text-sm font-mono text-slate-500">
              <span className="bg-slate-900 px-2 py-1 rounded">Python</span>
              <span className="bg-slate-900 px-2 py-1 rounded">Firebase</span>
              <span className="bg-slate-900 px-2 py-1 rounded">NoSQL</span>
            </div>
          </div>

          {/* PROJET 2 : DATA ANALYSIS */}
          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition duration-300">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <Database className="text-purple-400" size={24} />
                <h4 className="text-2xl font-bold">Data Analysis & Certification</h4>
              </div>
              <span className="bg-purple-900/30 text-purple-300 text-xs px-2 py-1 rounded border border-purple-800">FreeCodeCamp</span>
            </div>
            <p className="text-slate-300 mb-4">
              Analyses exploratoires de données et manipulation de datasets complexes via Python.
            </p>
            <ul className="list-disc list-inside text-slate-400 mb-6 space-y-1">
              <li>Nettoyage et structuration de données brutes.</li>
              <li>Visualisation de données (Matplotlib/Seaborn) pour en tirer des insights.</li>
              <li>Obtention de la certification "Data Analysis with Python".</li>
            </ul>
            <div className="flex gap-2 text-sm font-mono text-slate-500">
              <span className="bg-slate-900 px-2 py-1 rounded">Python</span>
              <span className="bg-slate-900 px-2 py-1 rounded">Pandas</span>
              <span className="bg-slate-900 px-2 py-1 rounded">Numpy</span>
            </div>
          </div>

        </div>

        {/* COMPETENCES */}
        <h3 className="text-3xl font-bold mb-8 mt-16 border-l-4 border-cyan-500 pl-4">Compétences</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
          <div className="bg-slate-800 p-4 rounded-lg text-center">
            <Code2 className="mx-auto mb-2 text-blue-400" />
            <h5 className="font-bold mb-2">Développement</h5>
            <p className="text-sm text-slate-400">Python, TypeScript, React, SQL</p>
          </div>
          <div className="bg-slate-800 p-4 rounded-lg text-center">
            <Database className="mx-auto mb-2 text-green-400" />
            <h5 className="font-bold mb-2">Data</h5>
            <p className="text-sm text-slate-400">Pandas, Firebase, Data Viz</p>
          </div>
          <div className="bg-slate-800 p-4 rounded-lg text-center">
            <Server className="mx-auto mb-2 text-orange-400" />
            <h5 className="font-bold mb-2">Tools</h5>
            <p className="text-sm text-slate-400">Git, VS Code, Linux</p>
          </div>
        </div>
      </main>

      <footer className="text-center text-slate-600 text-sm">
        <p>© 2024 - Portfolio réalisé avec React + Vite + Tailwind</p>
      </footer>
    </div>
  )
}

export default App