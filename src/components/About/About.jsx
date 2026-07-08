import SectionTitle from '../shared/SectionTitle';
import config from '../../config/portfolio.config';
import styles from './About.module.scss';

export default function About() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.inner}>
        <span className={styles.number}>02</span>
        <SectionTitle>About</SectionTitle>
        <div className={styles.layout}>
          <div className={styles.avatarCol}>
            {config.avatar ? (
              <div className={styles.avatarFrame}>
                <img src={config.avatar} alt={config.name} className={styles.avatar} />
              </div>
            ) : (
              <div className={styles.avatarFrame}>
                <div className={styles.avatarPlaceholder}>
                  <span>{config.name.split(' ').map(n => n[0]).join('').toUpperCase()}</span>
                </div>
              </div>
            )}
          </div>
          <div className={styles.content}>
            <p className={styles.intro}>{config.about}</p>
            <div className={styles.actions}>
              {config.resume && (
                <a href={config.resume} target="_blank" rel="noreferrer" className={styles.btn}>
                  DOWNLOAD_RESUME
                </a>
              )}
              <a href={`mailto:${config.email}`} className={`${styles.btn} ${styles.btnOutline}`}>
                SAY_HELLO
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
