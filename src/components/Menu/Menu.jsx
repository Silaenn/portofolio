import config from '../../config/portfolio.config';
import styles from './Menu.module.scss';

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
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
  );
}
