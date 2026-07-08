import styles from './SectionNumber.module.scss';

export default function SectionNumber({ children }) {
  return <span className={styles.number}>{children}</span>;
}
