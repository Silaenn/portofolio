import useScrollReveal from '../../hooks/useScrollReveal';
import styles from './SectionTitle.module.scss';

export default function SectionTitle({ children }) {
  const ref = useScrollReveal();
  return (
    <h2 ref={ref} className={styles.title}>
      {children}
    </h2>
  );
}
