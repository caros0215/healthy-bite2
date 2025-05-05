import React from 'react';
import styles from './Corporativo.module.css';

const HonestCatering = () => {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <div className={styles.bannerImage}></div>
        <div className={styles.bannerContent}>
          <p className={styles.serviceLabel}>SERVICIO CORPORATIVO</p>
          <h1 className={styles.title}>
            <span>HONEST</span>
            <span>CATERING.</span>
          </h1>
          <p className={styles.description}>
            Descubre nuestro nuevo catering saludable para eventos. Opciones 
            vegetarianas, sin gluten, keto, plant-based, y más.
          </p>
          <p className={styles.description}>Ya está disponible online.</p>
          <a href="#" className={styles.ctaButton}>
            Pide ahora
            <span className={styles.arrow}>→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HonestCatering;