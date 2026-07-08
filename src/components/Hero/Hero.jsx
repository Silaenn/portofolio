import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import config from '../../config/portfolio.config';
import styles from './Hero.module.scss';

export default function Hero() {
  const contentRef = useRef(null);
  const photoRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    if (contentRef.current?.children) {
      tl.fromTo(
        contentRef.current.children,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power2.out' }
      );
    }
    if (photoRef.current) {
      tl.fromTo(
        photoRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' },
        '-=0.3'
      );
    }
  }, []);

  return (
    <section className={styles.section} id="hero">
      <div className={styles.inner}>
        <span className={styles.number}>01</span>
        <div className={styles.layout}>
          <div ref={contentRef} className={styles.content}>
            <p className={styles.label}>HI_THERE</p>
            <h1 className={styles.name}>{config.name}</h1>
            <h2 className={styles.role}>
              <span className={styles.glitch}>{config.role}</span>
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
          <div ref={photoRef} className={styles.photoCol}>
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