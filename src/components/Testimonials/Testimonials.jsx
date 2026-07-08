import SectionTitle from '../shared/SectionTitle';
import config from '../../config/portfolio.config';
import styles from './Testimonials.module.scss';

export default function Testimonials() {
  const data = config.testimonials;

  return (
    <section className={styles.section} id="testimonials">
      <div className={styles.inner}>
        <span className={styles.number}>05</span>
        <SectionTitle>Testimonials</SectionTitle>
        <div className={styles.grid}>
          {data.map((d) => (
            <div
              key={d.id}
              className={`${styles.card} ${d.featured ? styles.featured : ''}`}
            >
              <div className={styles.quote}>
                <span className={styles.mark}>"</span>
                <p>{d.desc}</p>
              </div>
              <div className={styles.footer}>
                <div className={styles.avatar}>
                  {d.img ? (
                    <img src={d.img} alt={d.name} />
                  ) : (
                    <div className={styles.placeholder}></div>
                  )}
                </div>
                <div>
                  <h4 className={styles.name}>{d.name}</h4>
                  <p className={styles.title}>{d.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
