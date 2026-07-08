import styles from './PortfolioList.module.scss';

export default function PortfolioList({ title, active, setSelected, id }) {
  return (
    <li
      className={`${styles.item} ${active ? styles.active : ''}`}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}
