'use client';

import { Award, Calendar, ExternalLink, Sparkles, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const certifications = [
  {
    id: 1,
    title: 'Data Science Professional Certificate',
    issuer: 'IBM',
    date: 'September 2025',
    skills: ['Machine Learning', 'Python', 'SQL','Exploratory Data Analysis', 'Data Manipulation','Data Mining','Data Visualizatiom'],
    link: 'https://coursera.org/share/e7b6ffea9a0bfeb19c5d0baaac928a54',
    description: 'Comprehensive data science training covering machine learning, data analysis and visualization, and statistical methods using Python.'
  },
   {
    id: 2,
    title: 'Machine Learning Specialization',
    issuer: 'Stanford University',
    date: 'August 2025',
    skills: ['Applied Machine Learning', 'Data Ethics', 'ML Alogrithms', 'Scikit Learn','Model Evaluation'],
    link: 'https://coursera.org/share/2a960f0cd382174da86a8bd8b52f009e',
    description: 'Comprehensive machine learning course covering algorithms, model evaluation, and practical implementation.',
  },
  {
    id: 3,
    title: 'AI For Everyone',
    issuer: 'DeepLearning.AI',
    date: 'July 2025',
    skills: ['AI Fundamentals', 'Machine Learning', 'NLP', 'LLM','AI Ethics & Security'],
    link: 'https://coursera.org/share/2ea3c9177787b39e4e904932a303d034',
    description: 'Introduction to AI concepts,AI & data security, and practical applications of AI in various industries.',
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Back to Home */}
        <div className="mb-8">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-violet-100 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800 rounded-full mb-6">
            <Award className="w-4 h-4 text-violet-600 dark:text-violet-400" />
            <span className="text-violet-600 dark:text-violet-400 text-sm font-medium">
              Professional Achievements
            </span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications & Credentials
          </h2>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-6 border-2 border-gray-200 dark:border-gray-700 hover:border-violet-400 dark:hover:border-violet-600 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-violet-100 dark:bg-violet-900/30">
                  <Award className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                </div>
              </div>

              {/* Title and Issuer */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                {cert.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{cert.issuer}</p>

              {/* Description */}
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 leading-relaxed">
                {cert.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-6 border-t border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                  <Calendar className="w-4 h-4" />
                  {cert.date}
                </div>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 transition-colors"
                >
                  <span className="text-sm font-medium">Verify</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Continuously learning and expanding my technical expertise
          </p>
          <a
            href="https://linkedin.com/in/arwa-abbas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3 bg-violet-600 text-white rounded-full hover:bg-violet-700 transition-colors font-medium group"
          >
            <Sparkles className="w-5 h-5" />
            <span>View Credentials on LinkedIn</span>
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}