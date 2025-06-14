import styles from '../styles/Gallery.module.css';

export default function Gallery({ flowers }) {
  return (
    <section className={styles.gallery}>
      <h2 className={styles.sectionTitle}>Nuestros Productos</h2>
      <p className={styles.sectionSubtitle}>Selecciona entre nuestra variedad de flores frescas</p>
      
      <div className={styles.flowerGrid}>
        {flowers.map(flower => (
          <div key={flower.id} className={styles.flowerCard}>
            <img src={flower.image} alt={flower.name} className={styles.flowerImage} />
            <div className={styles.flowerInfo}>
              <h3>{flower.name}</h3>
              <p>{flower.price}</p>
              <button className={styles.addToCart}>Añadir al carrito</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}