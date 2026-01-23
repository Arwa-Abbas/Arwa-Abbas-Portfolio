//home
'use client';
import Hero from './components/hero/Hero';
import Contact from './components/contact/page';
import Projects from './components/Projects';
import Skills from './components/skills/page';
import About from './components/about/page';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer/>
    </>
  );
}

export default Home;