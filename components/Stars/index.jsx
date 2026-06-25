import styles from './Stars.module.css';

export default function Stars() {
  return (
    <>
      <div aria-hidden="true" className={styles.static} />
      <div aria-hidden="true" className={styles.twinkle} />
    </>
  );
}
