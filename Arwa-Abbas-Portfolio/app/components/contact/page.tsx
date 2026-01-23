'use client';

import { MapPin, Mail, Linkedin, MessageSquare } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'arwaabbaskerani@gmail.com',
      link: 'mailto:arwaabbaskerani@gmail.com',
      color: 'violet',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'Arwa Abbas',
      link: 'https://www.linkedin.com/in/arwa-abbas-kerani-3228ab346/',
      color: 'blue',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Karachi, Pakistan',
      color: 'green',
    },
  ];

  const colorClasses = {
    violet: {
      bg: 'bg-violet-100 dark:bg-violet-900/30',
      icon: 'text-violet-600 dark:text-violet-400',
      text: 'text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300',
    },
    blue: {
      bg: 'bg-blue-100 dark:bg-blue-900/30',
      icon: 'text-blue-600 dark:text-blue-400',
      text: 'text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300',
    },
    green: {
      bg: 'bg-green-100 dark:bg-green-900/30',
      icon: 'text-green-600 dark:text-green-400',
      text: 'text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300',
    },
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-100 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800 rounded-full mb-4">
            <MessageSquare className="w-4 h-4 text-violet-600 dark:text-violet-400" />
            <span className="text-violet-600 dark:text-violet-400 text-sm font-medium">
              Get In Touch
            </span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Let's Connect
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
            Open to collaborations and interships opportunities
          </p>
        </div>

        {/* Contact Information*/}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;
            const colors = colorClasses[item.color as keyof typeof colorClasses];
            
            return (
              <div
                key={index}
                className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-5 border border-gray-200 dark:border-gray-700 hover:border-violet-300 dark:hover:border-violet-600 hover:shadow-lg transition-all duration-300"
              >
                {/* Icon  & Title*/}
                <div className="flex items-center gap-4 mb-4">
                  <div className={`flex-shrink-0 p-3 rounded-lg ${colors.bg}`}>
                    <Icon className={`w-6 h-6 ${colors.icon}`} />
                  </div>
                  <h3 className="text-m font-semibold text-gray-900 dark:text-white flex-grow">
                    {item.title}
                  </h3>
                </div>
                
                {/* Link */}
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block text-sm ${colors.text} transition-colors truncate`}
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {item.value}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-lg mx-auto">
            Feel free to reach out for collaborations, internships, or just to say hello. 
            I'm always open to discussing new projects and opportunities.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="mailto:arwaabbaskerani@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-violet-600 text-white rounded-full hover:bg-violet-700 transition-colors text-sm font-medium"
            >
              <Mail className="w-4 h-4" />
              Send Email
            </a>
            <a
              href="https://www.linkedin.com/in/arwa-abbas-kerani-3228ab346/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors text-sm font-medium"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}