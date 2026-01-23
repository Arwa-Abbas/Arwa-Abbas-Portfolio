'use client';

import { ExternalLink, Github, Eye, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const featuredProjects = [
  {
    id: 1,
    title: 'NexoOps - Intelligent Network Management Systems',
    description: 'NexoOps is an intelligent network management platform that analyzes raw network logs, classifies alerts, summarizes events, and provides a ChatOps assistant for real-time diagnosis. It combines machine learning, natural language processing, and diagnostic tools to simplify network monitoring.',
    tags: ['Python', 'NLP', 'ML Algorithms', 'React', 'Flask', 'ChatBot'],
    github: 'https://github.com/Arwa-Abbas/NexoOps--Intelligent-Network-Management-System',
  },
  {
    id: 2,
    title: 'Pharmora',
    description: 'A full-stack web application for pharmacy services, medical appointments, and online medicine ordering. It allows patients to browse medicines, manage carts and orders, and view available doctors and pharmacists. Each user - Patient, Doctor, Pharmacist, Supplier, and Admin has access to their own dedicated dashboard with role-specific features.',
    tags: ['PERN Stack (PostgreSQL, ExpressJS, React, NodeJs)', 'REST APIs', 'Vite'],
    github: 'https://github.com/Arwa-Abbas/Pharmora',
  },
  {
    id: 3,
    title: 'SteamUP! - Game Recommendation System',
    description: 'SteamUP! is a game recommendation platform that leverages both knowledge-based (constraint-driven) and content-based filtering techniques to provide personalized game suggestions',
    tags: ['Python', 'FAST API', 'React', 'MongoDB'],
    github: 'https://github.com/Arwa-Abbas/SteamUP--Game-Engine-Recommendation-System',
  },
  {
    id: 4,
    title: 'Customer Segmentation Dashboard',
    description: 'A modern, interactive web application for customer segmentation and analytics using machine learning clustering algorithms.',
    tags: ['Python', 'Matplotlib', 'Numpy', 'Pandas', 'Scikit-learn', 'Streamlit'],
    github: 'https://github.com/Arwa-Abbas/Customer-Segmentation-Dashboard',
    live: 'https://customer-segmentation-dashboard-km6okbks65ksvscisng3ty.streamlit.app/', 
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my Work in Full Stack & DataScience/AI
          </p>
        </div>

        {/* Featured projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 pt-8">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-violet-100 dark:hover:bg-violet-900/30 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  Source Code
                </a>
                
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/components/projects"  
            className="inline-flex items-center gap-3 px-8 py-3 bg-violet-600 text-white rounded-full hover:bg-violet-700 transition-colors font-medium group"
          >
            <Eye className="w-5 h-5" />
            View All Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}