'use client';

import { Github, Linkedin, Mail, Download, Sparkles, Code, Database, Cpu, ChevronRight, ArrowDown } from 'lucide-react';
import { useState, useEffect } from 'react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/Arwa-Abbas', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/arwa-abbas-kerani-3228ab346/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:arwaabbaskerani@gmail.com', label: 'Email' },
];

export default function Hero() {
  const [text, setText] = useState('');
  const fullText = 'AI Engineer & Full Stack Developer';
  const [index, setIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index, text, fullText, isClient]);

  const [particlePositions] = useState(() => 
    Array.from({ length: 20 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 2 + Math.random() * 3,
    }))
  );

  if (!isClient) {
    return (
      <section className="relative min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 border border-violet-200 dark:border-violet-800 rounded-full backdrop-blur-sm shadow-md mb-8">
            <Sparkles className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
            <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">
              Welcome to my portfolio
            </span>
          </div>
          <p className="text-violet-600 dark:text-violet-400 font-semibold text-lg md:text-xl tracking-wide mb-4">
            Hello, I'm
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Arwa Abbas
          </h1>
          <p className="text-2xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
            AI Engineer & Full Stack Developer
          </p>
        </div>
      </section>
    );
  }

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div 
        className="absolute inset-0 opacity-15 dark:opacity-8 pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle 500px at ${mousePosition.x}px ${mousePosition.y}px, rgba(139,92,246,0.12), transparent 75%)`
        }}
      />

      <div className="absolute inset-0 pointer-events-none">
        {particlePositions.map((pos, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-violet-750 dark:bg-violet-600 rounded-full animate-twinkle"
            style={{
              left: `${pos.left}%`,
              top: `${pos.top}%`,
              animationDelay: `${pos.delay}s`,
              animationDuration: `${pos.duration}s`
            }}
          />
        ))}
      </div>


      {/* Floating Objects */}
      <div className="absolute inset-0 pointer-events-none">
        <Sparkles 
          className="absolute text-violet-600 dark:text-violet-700 w-10 h-10 animate-float"
          style={{
            left: '10%',
            top: '20%',
            animationDelay: '0s',
            animationDuration: '7s'
          }}
        />
        <Code 
          className="absolute text-violet-600 dark:text-violet-700 w-9 h-9 animate-float"
          style={{
            right: '15%',
            top: '30%',
            animationDelay: '1s',
            animationDuration: '8s'
          }}
        />
        <Database 
          className="absolute text-violet-600  dark:text-violet-700 w-10  h-10 animate-float"
          style={{
            left: '18%',
            bottom: '25%',
            animationDelay: '2s',
            animationDuration: '9s'
          }}
        />
        <Cpu 
          className="absolute text-violet-600  dark:text-violet-700 w-9 h-9 animate-float"
          style={{
            right: '12%',
            bottom: '30%',
            animationDelay: '1.5s',
            animationDuration: '7.5s'
          }}
        />
      </div>


      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(139,92,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Main Content */}
      <div className="max-w-5xl mx-auto relative z-10 text-center px-4">
        <div className="space-y-10">
          
          {/* Welcome */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/90 dark:bg-gray-800/90 border border-violet-200 dark:border-violet-800 rounded-full backdrop-blur-md shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Sparkles className="w-4 h-4 text-violet-600 dark:text-violet-400 animate-pulse" />
            <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">
              Welcome to my Portfolio
            </span>
          </div>

          {/* Main */}
          <div className="space-y-5">
            <p className="text-violet-600 dark:text-violet-400 font-semibold text-xl md:text-2xl tracking-wide animate-fade-in">
              Hello, I'm
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white leading-tight animate-fade-in-up">
              Arwa Abbas
            </h1>
            <div className="h-16 flex items-center justify-center">
              <span className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-700 dark:text-gray-300">
                {text}
                <span className="animate-pulse text-violet-600 dark:text-violet-400">|</span>
              </span>
            </div>
          </div>
          
          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed font-light animate-fade-in">
            Computer Science Student passionate about Data Science, AI & Full Stack Development. 
            Building intelligent solutions through data-driven approaches.
          </p>


          <div className="flex flex-wrap gap-5 justify-center pt-2">
            <a
              href="/components/projects"
              className="group relative px-10 py-4 bg-violet-600 hover:bg-violet-700 dark:bg-violet-600 dark:hover:bg-violet-500 text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden flex items-center gap-2"
            >
              <span className="relative z-10">View My Work</span>
              <ChevronRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-violet-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href="/components/contact"
              className="px-10 py-4 bg-white dark:bg-gray-800 border-2 border-violet-300 dark:border-violet-700 text-gray-900 dark:text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:border-violet-500 dark:hover:border-violet-500 transition-all duration-300 hover:scale-105"
            >
              Contact Me
            </a>
            <a
              href="/Arwa Abbas Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              type="application/pdf"
              onClick={(e) => {
                e.preventDefault();
                window.open('/Arwa Abbas Resume.pdf', '_blank');
              }}
              className="px-10 py-4 bg-gray-100 dark:bg-gray-800/50 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-full font-semibold text-lg hover:border-violet-400 dark:hover:border-violet-600 hover:bg-gray-200 dark:hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 flex items-center gap-3 shadow-md hover:shadow-lg"
            >
              <Download className="w-5 h-5" />
              Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-5 pt-0">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group relative p-5 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-2 border-gray-200 dark:border-gray-700 rounded-full hover:border-violet-400 dark:hover:border-violet-600 hover:bg-violet-50 dark:hover:bg-violet-900/20 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
                aria-label={link.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <link.icon className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300" />
              </a>
            ))}
          </div>
        </div>
\
        <div className="absolute -z-10 w-full h-full top-0 left-0 pointer-events-none">
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-2 border-violet-200/40 dark:border-violet-600 rounded-full animate-spin-slow"
          />
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl aspect-square border border-purple-200/20 dark:border-purple-700/20 rounded-full animate-spin-reverse"
          />
        </div>
      </div>
    </section>
  );
}