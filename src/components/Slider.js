'use client';

import { useState, useEffect } from 'react';
import styles from '../styles/Slider.module.css';

export default function Slider({ flowers }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % flowers.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [flowers.length]);

  return (
    <section className={styles.sliderSection}>
      <h2 className={styles.sectionTitle}>Productos Destacados</h2>
      <p className={styles.sectionSubtitle}>Lo más vendido esta temporada</p>
      
      <div className={styles.sliderContainer}>
        <div 
          className={styles.sliderTrack} 
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {flowers.map((flower, index) => (
            <div key={flower.id} className={styles.slide}>
              <img src={flower.image} alt={flower.name} />
              <div className={styles.slideContent}>
                <h3>{flower.name}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.sliderDots}>
          {flowers.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentSlide ? styles.active : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}