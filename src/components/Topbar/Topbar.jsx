import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import config from '../../config/portfolio.config';
import styles from './Topbar.module.scss';

export default function Topbar({ menuOpen, setMenuOpen }) {
  const ref = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(ref.current, { y: -72 }, { y: 0, duration: 0.5, ease: 'power2.out' });
    });
    return () => ctx.revert();
  }, []);

  return (
    <header ref={ref} className={`${styles.topbar} ${menuOpen ? styles.active : ''}`}>
      <div className={styles.inner}>
        <a href="#hero" className={styles.logo}>{config.name}</a>
        <nav className={styles.nav}>
          {config.navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`} className={styles.navLink}>{link.label}</a>
          ))}
        </nav>
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}