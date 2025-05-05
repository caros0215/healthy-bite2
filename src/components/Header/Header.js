import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logoColor from "../../assets/images/logo_verde.png";
import logoWhite from "../../assets/images/logo_blanco.png";

function Header() {
  const headerRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (headerRef.current) {
        if (scrollY > 70) {
          headerRef.current.classList.add("header-white");
          setScrolled(true);
        } else {
          headerRef.current.classList.remove("header-white");
          setScrolled(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`header ${scrolled ? "header-white" : ""}`}
      style={{ transition: "background-color 0.3s ease" }}
    >
      <div className="logo-nav-container">
        <a href="/" className="logo">
          <img src={scrolled ? logoColor : logoWhite} width="150" alt="Logo" />
        </a>
        <nav className="navigation">
          <Link to="/" className="nav-link">
            Inicio
          </Link>
          <a
            href="#conocenos"
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              const target = document.getElementById("conocenos");
              if (target) {
                // Calculamos la posición exacta del elemento
                const headerHeight = 90; // Ajusta este valor según la altura exacta de tu header
                const elementPosition =
                  target.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - headerHeight;

                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth",
                });
              }
            }}
          >
            conocenos
          </a>
          <a href="/Catering" className="nav-link">
            Catering
          </a>
          <a href="#" className="nav-link">
            Cantina
          </a>
          <a href="#" className="nav-link">
            Nuestra historia
          </a>
          <a href="#" className="nav-link">
            Honest Beans
          </a>
        </nav>
      </div>
      <a href="#" className="order-button">
        PIDE AHORA <span className="arrow-icon">→</span>
      </a>
    </header>
  );
}

export default Header;
