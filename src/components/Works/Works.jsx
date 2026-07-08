import SectionTitle from '../shared/SectionTitle';
import config from '../../config/portfolio.config';
import styles from './Works.module.scss';

export default function Works() {
  return (
    <section className={styles.section} id="works">
      <div className={styles.inner}>
        <span className={styles.number}>03</span>
        <SectionTitle>Experience</SectionTitle>
        <div className={styles.timeline}>
          {config.works.map((d, i) => (
            <div className={styles.item} key={d.id}>
              <div className={styles.line}>
                <span className={styles.dot}></span>
                {i < config.works.length - 1 && <span className={styles.connector}></span>}
              </div>
              <div className={styles.card}>
                <span className={styles.year}>{d.year}</span>
                <h3 className={styles.company}>{d.title}</h3>
                <p className={styles.role}>{d.role}</p>
                <p className={styles.desc}>{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
