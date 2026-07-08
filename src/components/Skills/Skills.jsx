import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionTitle from '../shared/SectionTitle';
import config from '../../config/portfolio.config';
import styles from './Skills.module.scss';

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const barsRef = useRef([]);

  useEffect(() => {
    barsRef.current.forEach((bar) => {
      if (!bar) return;
      const level = bar.dataset.level;
      gsap.fromTo(
        bar,
        { width: '0%' },
        {
          width: `${level}%`,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: bar,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  return (
    <section className={styles.section} id="skills">
      <div className={styles.inner}>
        <span className={styles.number}>04</span>
        <SectionTitle>Skills</SectionTitle>
        <div className={styles.terminal}>
          <div className={styles.header}>
            <span className={styles.prompt}>$</span>
            <span className={styles.command}>skills --list</span>
          </div>
          <div className={styles.body}>
            {config.skills.map((skill, i) => (
              <div className={styles.row} key={skill.name}>
                <span className={styles.check}>[{i < 4 ? 'x' : ' '}]</span>
                <span className={styles.name}>{skill.name}</span>
                <div className={styles.track}>
                  <div
                    ref={(el) => (barsRef.current[i] = el)}
                    className={styles.fill}
                    data-level={skill.level}
                  ></div>
                </div>
                <span className={styles.percent}>{skill.level}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
