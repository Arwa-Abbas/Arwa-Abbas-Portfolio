import { Award, Briefcase, Calendar, CheckCircle } from 'lucide-react';

const experiences = [
   {
    year: 'Present, Sep 2025',
    role: 'CS Competition Co-Head',
    company: 'FAST Univeristy - PROCOM 26, Karachi',
    description: [  
      'Led and managed a team of 100+ members across 9 different CS competition modules',
      'Designed UI/UX interfaces and created visual graphics for competition platforms',
      'Managed logistics and coordination for 1000+ participants',
      'Spearheaded marketing and outreach strategies to increase participation'
    ]
  },
  {
    year: 'July 2025 - October 2025',
    role: 'MIS Intern',
    company: 'Vconn Private Limited, Karachi',
    description: [
      'Developed NLP-based ML models using Python and FastAPI for automated resume analysis',
      'Contributed to MERN stack applications with RESTful API development',
      'Worked on .NET/Vue.js full-stack projects for enterprise solutions',
      'Designed and implemented responsive UI/UX components',
    ]
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Computer Science student specializing in Data Science, AI & Full Stack Development
          </p>
        </div>

       <div className="grid md:grid-cols-2 gap-12">
        {/* Bio */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Get to know me!
          </h3>
          <div className="space-y-4 text-gray-600 dark:text-gray-400">
            <p>
              I'm a Computer Science student with dual expertise in <span className="font-medium text-purple-600 dark:text-purple-400">Data Science/AI</span> and 
              <span className="font-medium text-purple-600 dark:text-purple-400"> Full-Stack Development</span>. 
              I build intelligent data systems and the user interfaces that make them accessible.
            </p>
            <p>
              On the data side, I work with machine learning, data pipelines, and AI model deployment to extract 
              meaningful insights. On the development side, I create complete applications with a strong focus on 
              frontend design and user experience.
            </p>
            <p>
              This combination allows me to understand both the analytical complexity of data systems and the 
              practical needs of end-users, enabling me to build solutions that are technically robust and 
              intuitively designed.
            </p>
            <p>
              I'm passionate about creating applications where powerful data capabilities meet beautiful, 
              functional interfaces making complex technology accessible to everyone.
            </p>
          </div>
        </div>

          {/* Experience */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <Briefcase className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                Experience
              </h3>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8">
                  <div className="absolute left-0 top-0 w-4 h-4 bg-purple-600 dark:bg-purple-500 rounded-full"></div>
                  <div className="absolute left-2 top-4 w-0.5 h-full bg-gray-200 dark:bg-gray-700"></div>
                  
                  <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
                    <div className="flex items-center gap-2 text-sm text-purple-600 dark:text-purple-400 mb-3 font-medium">
                      <Calendar className="w-4 h-4" />
                      {exp.year}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                      {exp.role}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 font-medium">{exp.company}</p>
                    
                    <div className="space-y-3">
                      {exp.description.map((description, desIndex) => (
                        <div key={desIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-purple-500 dark:text-purple-400 mt-1 flex-shrink-0" />
                          <p className="text-gray-500 dark:text-gray-400 text-sm">
                            {description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}