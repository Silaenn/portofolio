import { useState } from 'react';
import SectionTitle from '../shared/SectionTitle';
import BrutalButton from '../shared/BrutalButton';
import useScrollReveal from '../../hooks/useScrollReveal';
import config from '../../config/portfolio.config';
import styles from './Contact.module.scss';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const layoutRef = useScrollReveal();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className={styles.section} id="contact">
      <div className={styles.inner}>
        <span className={styles.number}>07</span>
        <SectionTitle>Contact</SectionTitle>
        <div ref={layoutRef} className={styles.layout}>
          <div className={styles.info}>
            <div className={styles.block}>
              <span className={styles.label}>EMAIL</span>
              <span className={styles.value}>{config.email}</span>
            </div>
            <div className={styles.block}>
              <span className={styles.label}>PHONE</span>
              <span className={styles.value}>{config.phone}</span>
            </div>
            <div className={styles.block}>
              <span className={styles.label}>LOCATION</span>
              <span className={styles.value}>Jakarta, Indonesia</span>
            </div>
            <div className={styles.block}>
              <span className={styles.label}>AVAILABILITY</span>
              <span className={styles.value}>Full-time / Freelance</span>
            </div>
            <div className={styles.block}>
              <span className={styles.label}>RESPONSE TIME</span>
              <span className={styles.value}>Within 24 hours</span>
            </div>
            <div className={styles.social}>
              <span className={styles.label}>FIND_ME_ON</span>
              <div className={styles.socialLinks}>
                <a href={config.social.github} target="_blank" rel="noreferrer">GITHUB</a>
                <a href={config.social.linkedin} target="_blank" rel="noreferrer">LINKEDIN</a>
                <a href="https://twitter.com/aaronhanson" target="_blank" rel="noreferrer">TWITTER</a>
                <a href="https://dribbble.com/aaronhanson" target="_blank" rel="noreferrer">DRIBBBLE</a>
              </div>
            </div>
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.terminalHeader}>
              <span className={styles.prompt}>$</span>
              <span className={styles.command}>send_message</span>
            </div>
            <div className={styles.field}>
              <label className={styles.fieldLabel}>NAME</label>
              <input type="text" placeholder="Your name" className={styles.input} required />
            </div>
            <div className={styles.field}>
              <label className={styles.fieldLabel}>EMAIL</label>
              <input type="email" placeholder="your@email.com" className={styles.input} required />
            </div>
            <div className={styles.field}>
              <label className={styles.fieldLabel}>SUBJECT</label>
              <input type="text" placeholder="What's this about?" className={styles.input} />
            </div>
            <div className={styles.field}>
              <label className={styles.fieldLabel}>MESSAGE</label>
              <textarea placeholder="Your message" className={styles.textarea} rows={5} required></textarea>
            </div>
            <BrutalButton type="submit">SEND_MESSAGE</BrutalButton>
            {sent && <p className={styles.success}>✓ Message sent (demo)</p>}
          </form>
        </div>
      </div>
    </section>
  );
}