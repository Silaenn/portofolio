import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import SectionTitle from '../shared/SectionTitle';
import SectionNumber from '../shared/SectionNumber';
import PortfolioList from '../PortfolioList/PortfolioList';
import useScrollReveal from '../../hooks/useScrollReveal';
import config from '../../config/portfolio.config';
import styles from './Portfolio.module.scss';

export default function Portfolio() {
  const [selected, setSelected] = useState('featured');
  const [data, setData] = useState([]);
  const filtersRef = useScrollReveal();
  const gridRef = useRef(null);
  const isFirstRun = useRef(true);

  useEffect(() => {
    setData(config.portfolio.filter((item) => item.category === selected));
  }, [selected]);

  useEffect(() => {
    const cards = gridRef.current?.children;
    if (!cards || cards.length === 0) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.set(cards, { y: 0, opacity: 1, clearProps: 'opacity' });
      return;
    }

    const ctx = gsap.context(() => {
      if (isFirstRun.current) {
        isFirstRun.current = false;
        gsap.fromTo(
          cards,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top bottom',
              invalidateOnRefresh: true,
              toggleActions: 'play none none none',
            },
          }
        );
      } else {
        gsap.fromTo(
          cards,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, stagger: 0.08, ease: 'power2.out' }
        );
      }
    });
    return () => ctx.revert();
  }, [data]);

  return (
    <section className={styles.section} id="portfolio">
      <div className={styles.inner}>
        <SectionNumber>03</SectionNumber>
        <SectionTitle>Portfolio</SectionTitle>
        <ul ref={filtersRef} className={styles.filters}>
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
        <div ref={gridRef} className={styles.grid}>
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