import { useState } from 'react';
import SectionTitle from '../shared/SectionTitle';
import BrutalButton from '../shared/BrutalButton';
import config from '../../config/portfolio.config';
import styles from './Contact.module.scss';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className={styles.section} id="contact">
      <div className={styles.inner}>
        <span className={styles.number}>06</span>
        <SectionTitle>Contact</SectionTitle>
        <div className={styles.layout}>
          <div className={styles.info}>
            <p className={styles.line}>
              <span className={styles.label}>EMAIL</span>
              <span>{config.email}</span>
            </p>
            <p className={styles.line}>
              <span className={styles.label}>PHONE</span>
              <span>{config.phone}</span>
            </p>
            <div className={styles.social}>
              <a href={config.social.github} target="_blank" rel="noreferrer">GITHUB →</a>
              <a href={config.social.linkedin} target="_blank" rel="noreferrer">LINKEDIN →</a>
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
              <label className={styles.fieldLabel}>MESSAGE</label>
              <textarea placeholder="Your message" className={styles.textarea} rows={4} required></textarea>
            </div>
            <BrutalButton type="submit">SEND_MESSAGE</BrutalButton>
            {sent && <p className={styles.success}>✓ Message sent (demo)</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
