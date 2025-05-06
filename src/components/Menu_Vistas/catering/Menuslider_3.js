import { useRef } from "react";
import styles from "./Menuslider.module.css";
import imagen_1 from "../../../assets/images/food_1.png"
import imagen_2 from "../../../assets/images/food_2.png"
import imagen_3 from "../../../assets/images/food_3.png"
import imagen_4 from "../../../assets/images/food_4.png"
import imagen_5 from "../../../assets/images/food_5.png"

const MealPackages = () => {
  const containerRef = useRef(null);

  // Data for meal packages based on the image
  const packageItems = [
    {
      id: 1,
      image: imagen_1,
      title: "Proteínas",
      description: "Un mix de nuestras proteínas y opciones plant-based."
    },
    {
      id: 2,
      image: imagen_2,
      title: "Guarniciones",
      description: "Una selección de todas nuestras guarniciones. No habrá peleas."
    },
    {
      id: 3,
      image: imagen_3,
      title: "Ensalada",
      description: "Ensalada para todos de 7 hojas, aliño de mostaza y balsámico, lombarda encurtida, mix de semillas."
    },
    {
      id: 4,
      image: imagen_4,
      title: "Pan",
      description: "Pan payés de masa madre artesanal para todos."
    },
    {
      id: 5,
      image: imagen_5,
      title: "Extras",
      description: "Opcionalmente, puedes añadir bebidas y/o postres a tu pedido."
    }
  ];

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className={styles.menuSliderSection}>
      {/* Header section with title and navigation */}
      <div className={styles.menuHeader}>
        <h2 className={styles.menuTitle}>
          OUR PACKS.
        </h2>
        <div className={styles.menuControls}>
          <button 
            onClick={scrollLeft} 
            className={styles.menuControlButton}
          >
            ←
          </button>
          <button 
            onClick={scrollRight}
            className={styles.menuControlButton}
          >
            →
          </button>
        </div>
      </div>

      {/* Tab navigation */}
      {/* <div className={styles.tabNavigation}>
        <button className={styles.tabActive}>MIX</button>
        <button className={styles.tab}>PLANT-BASED</button>
      </div> */}

      {/* Scrollable container for meal packages */}
      <div 
        ref={containerRef}
        className={styles.menuItemsContainer}
      >
        {packageItems.map((item) => (
          <div key={item.id} className={styles.menuItem}>
            <div className={styles.menuItemImageContainer}>
              <img 
                src={item.image} 
                alt={item.title} 
                className={styles.menuItemImage}
              />
            </div>
            <div className={styles.menuItemFooter}>
              <h3 className={styles.menuItemTitle}>{item.title}</h3>
              <p className={styles.menuItemDescription}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Call to action button */}
      <div className={styles.ctaContainer}>
        <button className={styles.ctaButton}>
          Pide ahora
          <span className={styles.ctaIcon}>↗</span>
        </button>
      </div>
    </div>
  );
};

export default MealPackages;