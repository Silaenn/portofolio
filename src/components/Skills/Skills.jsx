import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionTitle from '../shared/SectionTitle';
import config from '../../config/portfolio.config';
import styles from './Skills.module.scss';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiRedis,
  SiGraphql,
  SiDocker,
  SiGo,
  SiLinux,
  SiFigma,
} from 'react-icons/si';

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiRedis,
  SiGraphql,
  SiDocker,
  SiGo,
  SiLinux,
  SiFigma,
};

export default function Skills() {
  const gridRef = useRef(null);

  useEffect(() => {
    const cards = gridRef.current?.children;
    if (!cards || cards.length === 0) return;

    gsap.fromTo(
      cards,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.05,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <section className={styles.section} id="skills">
      <div className={styles.inner}>
        <span className={styles.number}>05</span>
        <SectionTitle>Skills</SectionTitle>
        <div ref={gridRef} className={styles.grid}>
          {config.skills.map((skill) => {
            const Icon = iconMap[skill.icon];
            return (
              <div className={styles.card} key={skill.name}>
                <div className={styles.iconWrap}>
                  {Icon && <Icon className={styles.icon} />}
                </div>
                <span className={styles.name}>{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}