// components/Frase.jsx
import React from 'react';
import styles from './Frases.module.css';

const Frase = () => {
  return (
    <div className={styles.container}>
      {/* Sección Verde */}
      <div className="section-container green-container">
        <div className={styles.backgroundloader}></div>
        
        <div className={styles.content}>
          <h2>ÚNETE A LA REVOLUCIÓN</h2>
          <p>Sáltate la cola, obtén acceso privilegiado a eventos y productos exclusivos y Real Food gratuito.</p>
          <img src="/path/to/your/app-icon.png" alt="App icon" className={styles.sectionimage} />
        </div>
      </div>
      
      {/* Sección Gris */}
      <div className="section-container gray-container">
        <div className={styles.backgroundloader}></div>
        
        <div className={styles.content}>
          <h2>LISTA DE REPRODUCCIÓN</h2>
          <p>Escucha los nuevos sonidos seleccionados por nuestros DJs mientras comes.</p>
          <img src="/path/to/your/music-icon.png" alt="Music icon" className={styles.sectionimage} />
        </div>
      </div>
    </div>
  );
};

export default Frase;