import Link from 'next/link';
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <img src="/images/logo.png" alt="Florería Bella" />
          </Link>
        </div>
        
        <nav className={styles.nav}>
          <ul>
            <li><Link href="#inicio">Inicio</Link></li>
            <li><Link href="#productos">Productos</Link></li>
            <li><Link href="#destacados">Destacados</Link></li>
            <li><Link href="#nosotros">Nosotros</Link></li>
            <li><Link href="#contacto">Contacto</Link></li>
          </ul>
        </nav>
        
        <div className={styles.mobileMenu}>
          <button className={styles.menuButton}>☰</button>
        </div>
      </div>
    </header>
  );
}