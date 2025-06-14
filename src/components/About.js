import styles from '../styles/About.module.css';

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.aboutContent}>
        <div className={styles.aboutText}>
          <h2 className={styles.sectionTitle}>Sobre Nosotros</h2>
          <p>
            En Florería Bella, nos apasiona crear arreglos florales que inspiren y emocionen. 
            Con más de 15 años de experiencia, nuestro equipo de floristas expertos selecciona 
            cuidadosamente cada flor para garantizar la máxima frescura y belleza.
          </p>
          <p>
            Nos especializamos en diseños personalizados para bodas, eventos especiales y 
            ocasiones cotidianas que merecen ser celebradas. Cada arreglo es creado con amor 
            y atención al detalle.
          </p>
          <button className={styles.ctaButton}>Conoce Nuestra Historia</button>
        </div>
        <div className={styles.aboutImage}>
          <img src="/images/about.jpg" alt="Nuestro equipo de floristas" />
        </div>
      </div>
    </section>
  );
}