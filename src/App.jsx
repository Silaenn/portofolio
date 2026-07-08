import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Topbar from './components/Topbar/Topbar';
import Menu from './components/Menu/Menu';
import Hero from './components/Hero/Hero';
import Portfolio from './components/Portfolio/Portfolio';
import Works from './components/Works/Works';
import Skills from './components/Skills/Skills';
import About from './components/About/About';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import './styles/global.scss';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    ScrollTrigger.refresh();
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener('load', onLoad);
    return () => window.removeEventListener('load', onLoad);
  }, []);

  useEffect(() => {
    if (window.location.hash) {
      window.scrollTo(0, 0);

      const id = window.location.hash.replace('#', '');
      const tryScroll = () => {
        const el = document.getElementById(id);
        if (el && el.offsetParent !== null) {
          const top = el.getBoundingClientRect().top + window.scrollY - 70;
          window.scrollTo({ top, behavior: 'smooth' });
        } else {
          requestAnimationFrame(tryScroll);
        }
      };
      requestAnimationFrame(tryScroll);
    }
  }, []);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Works />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}

export default App;
