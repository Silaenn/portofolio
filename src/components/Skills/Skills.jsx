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
  return (
    <section className={styles.section} id="skills">
      <div className={styles.inner}>
        <span className={styles.number}>05</span>
        <SectionTitle>Skills</SectionTitle>
        <div className={styles.grid}>
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