import { useEffect, useState } from 'react';
import SectionTitle from '../shared/SectionTitle';
import PortfolioList from '../PortfolioList/PortfolioList';
import config from '../../config/portfolio.config';
import styles from './Portfolio.module.scss';

export default function Portfolio() {
  const [selected, setSelected] = useState('featured');
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(config.portfolio.filter((item) => item.category === selected));
  }, [selected]);

  return (
    <section className={styles.section} id="portfolio">
      <div className={styles.inner}>
        <span className={styles.number}>03</span>
        <SectionTitle>Portfolio</SectionTitle>
        <ul className={styles.filters}>
          {config.categories.map((item) => (
            <PortfolioList
              key={item.id}
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id}
            />
          ))}
        </ul>
        <div className={styles.grid}>
          {data.map((item) => (
            <div className={styles.card} key={item.id}>
              <div className={styles.image}>
                {item.img ? (
                  <img src={item.img} alt={item.title} />
                ) : (
                  <div className={styles.placeholder}>
                    <span className={styles.placeholderText}>{item.title}</span>
                  </div>
                )}
              </div>
              <div className={styles.body}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                {item.desc && <p className={styles.desc}>{item.desc}</p>}
                {item.stack && item.stack.length > 0 && (
                  <div className={styles.tags}>
                    {item.stack.map((tech) => (
                      <span key={tech} className={styles.tag}>{tech}</span>
                    ))}
                  </div>
                )}
                <div className={styles.links}>
                  {item.demo && (
                    <a href={item.demo} target="_blank" rel="noreferrer" className={styles.link}>
                      LIVE →
                    </a>
                  )}
                  {item.github && (
                    <a href={item.github} target="_blank" rel="noreferrer" className={styles.link}>
                      CODE →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
