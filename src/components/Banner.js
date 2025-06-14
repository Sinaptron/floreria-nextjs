import styles from '../styles/Banner.module.css';

export default function Banner() {
  return (
    <section id="inicio" className={styles.banner}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1>Flores Frescas para Cada Ocasión</h1>
        <p>Encuentra el arreglo perfecto para expresar tus sentimientos</p>
        <button className={styles.ctaButton}>Ver Colección</button>
      </div>
    </section>
  );
}