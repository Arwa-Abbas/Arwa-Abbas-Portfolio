'use client';

import {
  Code2,
  Cpu,
  Database,
  GitBranch,
  Globe,
  Server,
  Terminal,
  Zap,
  FileCode,
  Layers,
  Cloud,
  Activity,
  LineChart,
  Brain,
  FileJson,
  Palette,
  Box,
  BarChart3,
  Sparkles,
} from 'lucide-react';
import { useState } from 'react';


type ColorKey = 'violet' | 'blue' | 'green' | 'orange' | 'purple' | 'pink';

interface SkillItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  category: string;
  color: ColorKey; 
  description: string;
}

const allSkills: SkillItem[] = [
  // Programming Languages
  {
    name: 'C++',
    icon: FileCode,
    category: 'Programming Languages',
    color: 'violet',
    description: 'Systems programming & DSA',
  },
  {
    name: 'C#',
    icon: FileCode,
    category: 'Programming Languages',
    color: 'violet',
    description: '.NET development & web application',
  },
  {
    name: 'Python',
    icon: Terminal,
    category: 'Programming Languages',
    color: 'violet',
    description: 'Data science & ML',
  },
  {
    name: 'SQL',
    icon: Terminal,
    category: 'Programming Languages',
    color: 'violet',
    description: 'databases & data science',
  },
  {
    name: 'JavaScript',
    icon: Code2,
    category: 'Programming Languages',
    color: 'violet',
    description: 'Full-stack development',
  },
  {
    name: 'TypeScript',
    icon: FileJson,
    category: 'Programming Languages',
    color: 'violet',
    description: 'Type-safe JavaScript',
  },
  // Frontend Development
  {
    name: 'React',
    icon: Activity,
    category: 'Frontend',
    color: 'blue',
    description: 'Component-based UI',
  },
  {
    name: 'Next.js',
    icon: Sparkles,
    category: 'Frontend',
    color: 'blue',
    description: 'React framework',
  },
  {
    name: 'Vue.js',
    icon: Layers,
    category: 'Frontend',
    color: 'blue',
    description: 'Progressive & Clean Architecture',
  },
  {
    name: 'Tailwind CSS',
    icon: Palette,
    category: 'Frontend',
    color: 'blue',
    description: 'Utility-first CSS',
  },
  // Backend & APIs
  {
    name: 'Node.js',
    icon: Server,
    category: 'Backend',
    color: 'green',
    description: 'JavaScript runtime',
  },
  {
    name: 'Express.js',
    icon: Box,
    category: 'Backend',
    color: 'green',
    description: 'Web framework',
  },
  {
    name: '.NET',
    icon: FileCode,
    category: 'Backend',
    color: 'green',
    description: 'Clean Architecture',
  },
  {
    name: 'FastAPI',
    icon: Zap,
    category: 'Backend',
    color: 'green',
    description: 'Modern Python API',
  },
  {
    name: 'Flask',
    icon: FileJson,
    category: 'Backend',
    color: 'green',
    description: 'Python microframework',
  },
  // Databases
  {
    name: 'MongoDB',
    icon: Database,
    category: 'Databases',
    color: 'orange',
    description: 'NoSQL database',
  },
  {
    name: 'PostgreSQL',
    icon: Server,
    category: 'Databases',
    color: 'orange',
    description: 'Relational database',
  },
  // Data Science & AI
  {
    name: 'Pandas',
    icon: Layers,
    category: 'Data Science & AI',
    color: 'purple',
    description: 'Data manipulation',
  },
  {
    name: 'NumPy',
    icon: BarChart3,
    category: 'Data Science & AI',
    color: 'purple',
    description: 'Numerical computing',
  },
  {
    name: 'Matplotlib',
    icon: LineChart,
    category: 'Data Science & AI',
    color: 'purple',
    description: 'Data visualization',
  },
  {
    name: 'Scikit-learn',
    icon: Brain,
    category: 'Data Science & AI',
    color: 'purple',
    description: 'Machine learning',
  },
];

const colorVariants = {
  violet: {
    bg: 'bg-violet-100 dark:bg-violet-900/20',
    text: 'text-violet-600 dark:text-violet-400',
    border: 'border-violet-200 dark:border-violet-800',
    hoverBorder: 'hover:border-violet-400 dark:hover:border-violet-600',
    hoverBg: 'hover:bg-violet-50 dark:hover:bg-violet-900/30',
  },
  blue: {
    bg: 'bg-blue-100 dark:bg-blue-900/20',
    text: 'text-blue-600 dark:text-blue-400',
    border: 'border-blue-200 dark:border-blue-800',
    hoverBorder: 'hover:border-blue-400 dark:hover:border-blue-600',
    hoverBg: 'hover:bg-blue-50 dark:hover:bg-blue-900/30',
  },
  green: {
    bg: 'bg-green-100 dark:bg-green-900/20',
    text: 'text-green-600 dark:text-green-400',
    border: 'border-green-200 dark:border-green-800',
    hoverBorder: 'hover:border-green-400 dark:hover:border-green-600',
    hoverBg: 'hover:bg-green-50 dark:hover:bg-green-900/30',
  },
  orange: {
    bg: 'bg-orange-100 dark:bg-orange-900/20',
    text: 'text-orange-600 dark:text-orange-400',
    border: 'border-orange-200 dark:border-orange-800',
    hoverBorder: 'hover:border-orange-400 dark:hover:border-orange-600',
    hoverBg: 'hover:bg-orange-50 dark:hover:bg-orange-900/30',
  },
  purple: {
    bg: 'bg-purple-100 dark:bg-purple-900/20',
    text: 'text-purple-600 dark:text-purple-400',
    border: 'border-purple-200 dark:border-purple-800',
    hoverBorder: 'hover:border-purple-400 dark:hover:border-purple-600',
    hoverBg: 'hover:bg-purple-50 dark:hover:bg-purple-900/30',
  },
  pink: {
    bg: 'bg-pink-100 dark:bg-pink-900/20',
    text: 'text-pink-600 dark:text-pink-400',
    border: 'border-pink-200 dark:border-pink-800',
    hoverBorder: 'hover:border-pink-400 dark:hover:border-pink-600',
    hoverBg: 'hover:bg-pink-50 dark:hover:bg-pink-900/30',
  },
};

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(allSkills.map((skill) => skill.category))];

  const filteredSkills =
    selectedCategory === 'All'
      ? allSkills
      : allSkills.filter((skill) => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-24 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto pt-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-violet-100 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800 rounded-full mb-6">
            <Cpu className="w-4 h-4 text-violet-600 dark:text-violet-400" />
            <span className="text-violet-600 dark:text-violet-400 text-sm font-medium">
              Technical Expertise
            </span>
          </div>
          <h2 className="text-4xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg md:text-l max-w-2l mx-auto">
            A comprehensive toolkit for building data-driven solutions and modern web applications
          </p>
        </div>

        {/* Category*/}
        <div className="flex flex-wrap justify-center gap-3 mb-12 pt-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-violet-600 text-white shadow-lg scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-2 border-gray-200 dark:border-gray-700 hover:border-violet-400 dark:hover:border-violet-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* All Skills Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-6">
          {filteredSkills.map((skill) => {
            const SkillIcon = skill.icon;
            const colors = colorVariants[skill.color]; // No more TypeScript error!
            const isHovered = hoveredSkill === skill.name;

            return (
              <div
                key={skill.name}
                className="group flex flex-col items-center cursor-pointer"
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div
                  className={`relative w-30 h-30 rounded-full ${colors.bg} flex items-center justify-center border-3 ${colors.border} transition-all duration-400 group-hover:shadow-xl group-hover:scale-105`}
                >
                  <div className="w-10 h-10 flex items-center justify-center">
                    <SkillIcon
                      className={`w-full h-full ${colors.text} transition-all duration-400 group-hover:rotate-12`}
                    />
                  </div>

                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/0 to-purple-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-400"></div>
                </div>
                <span className="text-xs font-semibold text-gray-900 dark:text-white text-center mt-3 max-w-[80px]">
                  {skill.name}
                </span>
                {isHovered && (
                  <span className="text-[10px] text-gray-600 dark:text-gray-400 text-center mt-1 max-w-[90px] absolute top-24 bg-white dark:bg-gray-800 px-2 py-1 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                    {skill.description}
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Skills Count */}
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-400">
            Showing{' '}
            <span className="font-bold text-violet-600 dark:text-violet-400">
              {filteredSkills.length}
            </span>{' '}
            of <span className="font-bold">{allSkills.length}</span> skills
          </p>
        </div>
      </div>
    </section>
  );
}