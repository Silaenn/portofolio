import config from '../../config/portfolio.config';
import styles from './Menu.module.scss';

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <>
      <div
        className={`${styles.overlay} ${menuOpen ? styles.active : ''}`}
        onClick={() => setMenuOpen(false)}
      />
      <nav className={`${styles.menu} ${menuOpen ? styles.active : ''}`}>
        <ul>
          {config.navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
