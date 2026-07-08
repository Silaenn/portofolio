import styles from './BrutalButton.module.scss';

export default function BrutalButton({ children, onClick, type = 'button', as: Tag = 'button' }) {
  return (
    <Tag className={styles.btn} onClick={onClick} type={type === 'submit' ? 'submit' : undefined}>
      {children}
    </Tag>
  );
}
