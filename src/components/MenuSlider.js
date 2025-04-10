import { useState, useEffect } from 'react';
import styles from './MenuSlider.module.css';

const MenuSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Datos de los slides incluidos en el componente
  const slides = [
    {
      id: 1,
      image: "/bowls.jpg",
      alt: "Bowls saludables",
      title: "BOWLS",
      description: "Combinaciones únicas con ingredientes frescos y nutritivos"
    },
    {
      id: 2,
      image: "/ensaladas.jpg",
      alt: "Ensaladas frescas",
      title: "ENSALADAS",
      description: "Mezclas crujientes con productos de temporada"
    },
    {
      id: 3,
      image: "/platos-principales.jpg",
      alt: "Platos principales",
      title: "PLATOS PRINCIPALES",
      description: "Creaciones gourmet con proteínas premium"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const autoSlide = setInterval(nextSlide, 5000);
    return () => clearInterval(autoSlide);
  }, [currentIndex]);

  return (
    <div className={styles.sliderContainer}>
      <div 
        className={styles.sliderTrack}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div 
            key={slide.id} 
            className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className={styles.slideImage}
            />
            <div className={styles.slideContent}>
              <h3 className={styles.slideTitle}>{slide.title}</h3>
              <p className={styles.slideDescription}>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.sliderControls}>
        <button className={styles.controlButton} onClick={prevSlide}>&lt;</button>
        <div className={styles.dotsContainer}>
          {slides.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
        <button className={styles.controlButton} onClick={nextSlide}>&gt;</button>
      </div>
    </div>
  );
};

export default MenuSlider;