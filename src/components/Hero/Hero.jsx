import config from '../../config/portfolio.config';
import useGlitchEffect from '../../hooks/useGlitchEffect';
import styles from './Hero.module.scss';

export default function Hero() {
  const glitchedRole = useGlitchEffect(config.role);

  return (
    <section className={styles.section} id="hero">
      <div className={styles.inner}>
        <span className={styles.number}>01</span>
        <div className={styles.layout}>
          <div className={styles.content}>
            <p className={styles.label}>HI_THERE</p>
            <h1 className={styles.name}>{config.name}</h1>
            <h2 className={styles.role}>
              <span className={styles.glitch}>{glitchedRole}</span>
              <span className={styles.cursor}>_</span>
            </h2>
            <p className={styles.tagline}>{config.tagline}</p>
            <div className={styles.actions}>
              <a href="#portfolio" className={styles.btn}>VIEW_WORK</a>
              <a href="#contact" className={`${styles.btn} ${styles.btnOutline}`}>CONTACT</a>
            </div>
            <div className={styles.status}>
              <span className={styles.dot}></span>
              {config.status}
            </div>
          </div>
          <div className={styles.photoCol}>
            {config.avatar ? (
              <div className={styles.photoFrame}>
                <img src={config.avatar} alt={config.name} className={styles.photo} />
              </div>
            ) : (
              <div className={styles.photoFrame}>
                <div className={styles.photoPlaceholder}>
                  <span>PHOTO</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
