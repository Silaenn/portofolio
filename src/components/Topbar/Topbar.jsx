import config from '../../config/portfolio.config';
import styles from './Topbar.module.scss';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <header className={`${styles.topbar} ${menuOpen ? styles.active : ''}`}>
      <div className={styles.inner}>
        <a href="#hero" className={styles.logo}>{config.templateName}.</a>
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
