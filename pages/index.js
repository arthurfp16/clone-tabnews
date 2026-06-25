import Stars from '../components/Stars';
import styles from './index.module.css';

export default function HomePage() {
  return (
    <main className={styles.page}>
      <Stars />

      <div aria-hidden="true" className={styles.aurora} />
      <div aria-hidden="true" className={styles.glow} />

      <div className={styles.content}>
        <p className={styles.label}>Clone TabNews</p>

        <h1 className={styles.heading}>
          Em<br />Construção
        </h1>

        <p className={styles.tagline}>
          Uma plataforma de notícias tech criada do zero,{' '}
          para que eu treine minhas habilidades.
        </p>

        <a
          href="https://github.com/arthurfp16/clone-tabnews"
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub ↗
        </a>
      </div>
    </main>
  );
}
