'use client';

import { ExternalLink, Github, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const allProjects = [
  {
    id: 1,
    title: 'NexoOps - Intelligent Network Management Systems',
    description: 'Intelligent network management platform that analyzes raw network logs, classifies alerts, summarizes events, and provides a ChatOps assistant for real-time diagnosis.',
    tags: ['Python', 'NLP', 'ML Algorithms', 'React', 'Flask', 'ChatBot'],
    github: 'https://github.com/Arwa-Abbas/NexoOps--Intelligent-Network-Management-System',
  },
  {
    id: 2,
    title: 'Pharmora',
    description: 'Full-stack web application for pharmacy services, medical appointments, and online medicine ordering with role-based dashboards for patients, doctors, pharmacists, suppliers, and admins.',
    tags: ['PERN Stack (PostgreSQL, ExpressJS, React, NodeJs)', 'REST APIs', 'Vite'],
    github: 'https://github.com/Arwa-Abbas/Pharmora',
  },
  {
    id: 3,
    title: 'SteamUP! - Game Recommendation System',
    description: 'Game recommendation platform leveraging both knowledge-based (constraint-driven) and content-based filtering techniques to provide personalized game suggestions.',
    tags: ['Python', 'FAST API', 'React', 'MongoDB'],
    github: 'https://github.com/Arwa-Abbas/SteamUP--Game-Engine-Recommendation-System',
  },
  {
    id: 4,
    title: 'Customer Segmentation Dashboard',
    description: 'Interactive web application for customer segmentation and analytics using machine learning clustering algorithms with visualization.',
    tags: ['Python', 'Matplotlib', 'Numpy', 'Pandas', 'Scikit-learn', 'Streamlit'],
    github: 'https://github.com/Arwa-Abbas/Customer-Segmentation-Dashboard',
    live: 'https://customer-segmentation-dashboard-km6okbks65ksvscisng3ty.streamlit.app/'
  },
  {
    id: 5,
    title: 'PakWeatherLens Dashboard',
    description: 'PakWeatherLens is a real-time weather dashboard that visually presents current and past weather data across popular cities in Pakistan. It combines real-time API data with beautiful visualizations and pixel-art UI elements.',
    tags: ['Python','Matplotlib', 'Seaborn', 'Pandas','Streamlit'],
    github: 'https://github.com/Arwa-Abbas/PakWeatherLens-Dashboard',
    live: 'https://pakweatherlens-dashboard-kjr8em5ataaebp6qpjsjyt.streamlit.app/'
  },
  {
    id: 6,
    title: 'ForestAI - Forest Classification Dashboard',
    description: 'An interactive machine learning dashboard that predicts forest cover type using the Covertype dataset.The backend is powered by Flask and XGBoost, while the frontend provides an easy interface for visualization and predictions.',
    tags: ['Python','JavaScript','Pandas','Flask','HTML/CSS','ML Algorithms & Feature Engineering'],
    github: 'https://github.com/Arwa-Abbas/ForestAI-Forest-Classification-Dashboard',
  }
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Header*/}
        <div className="mb-12">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              All Projects
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Complete collection of my work in Full-Stack Development and Data Science/AI
            </p>
          </div>
        </div>

        {/* All projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {project.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-lg"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-violet-100 dark:hover:bg-violet-900/30 hover:text-violet-600 dark:hover:text-violet-400 transition-colors font-medium"
                >
                  <Github className="w-4 h-4" />
                  Source Code
                </a>
                
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}