import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer id="contacto" className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>Florería Bella</h3>
          <p>Tu destino para flores frescas y arreglos florales excepcionales.</p>
          <div className={styles.socialIcons}>
            <a href="#"><span>FB</span></a>
            <a href="#"><span>IG</span></a>
            <a href="#"><span>TW</span></a>
          </div>
        </div>
        
        <div className={styles.footerSection}>
          <h3>Enlaces Rápidos</h3>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#productos">Productos</a></li>
            <li><a href="#destacados">Destacados</a></li>
            <li><a href="#nosotros">Nosotros</a></li>
          </ul>
        </div>
        
        <div className={styles.footerSection}>
          <h3>Contacto</h3>
          <p>Av. Flores 123, Ciudad Jardín</p>
          <p>Tel: (555) 123-4567</p>
          <p>Email: info@floreriabella.com</p>
        </div>
      </div>
      
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Florería Bella. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}