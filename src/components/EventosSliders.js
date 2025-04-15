"use client"

import { useRef } from "react"
import styles from "./EventosSliders.module.css"
import imagen1 from "../assets/images/plato_4.jpeg"
import imagen2 from "../assets/images/plato_5.jpeg"
import imagen3 from "../assets/images/plato_6.jpeg"
import imagen4 from "../assets/images/plato_7.jpeg"
import imagen5 from "../assets/images/plato_8.jpeg"
import imagen6 from "../assets/images/plato_9.jpeg"

const EventosSlider = () => {
  // Create a proper ref using useRef
  const containerRef = useRef(null)

  // Sample data based on the image
  const menuItems = [
    {
      id: 1,
      image: imagen1,
      title: "Para Compartir",
      icon: "→",
    },
    {
      id: 2,
      image: imagen2,
      title: "Market Plates",
      icon: "→",
    },
    {
      id: 3,
      image: imagen3,
      title: "Garden Bowls",
      icon: "→",
    },
    {
      id: 4,
      image: imagen4,
      title: "Salsas",
      icon: "→",
    },
    {
      id: 5,
      image: imagen5,
      title: "Sweet Corner",
      icon: "→",
    },
    {
      id: 6,
      image: imagen6,
      title: "Bebidas",
      icon: "→",
    },
  ]

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -300, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: "smooth" })
    }
  }

  return (
    <div className={styles.menuslidersection}>
      <div className={styles.menuheader}>
        <h2 className={styles.menutitle}>
        THE WHOLE 
          <br />
          FOOD WAY.
        </h2>
        <div className={styles.menucontrols}>
          <button className={styles.menucontrolbutton} onClick={scrollLeft}>
            ←
          </button>
          <button className={styles.menucontrolbutton} onClick={scrollRight}>
            →
          </button>
        </div>
      </div>

      <div className={styles.menuitemscontainer} ref={containerRef}>
        {menuItems.map((item) => (
          <div key={item.id} className={styles.menuitem}>
            <div className={styles.menuitemimagecontainer}>
              <img src={item.image || "/placeholder.svg"} alt={item.title} className="menu-item-image" />
            </div>
            <div className={styles.menuitemfooter}>
              <h3 className={styles.menuitemtitle}>{item.title}</h3>
              <span className={styles.menuitemicon}>{item.icon}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EventosSlider
