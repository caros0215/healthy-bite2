"use client";

import { useEffect, useRef, useState } from "react";
import "../styles/globals.css";
import "../styles/home.css";
import "./LandingPage.module.css";
import CookieConsent from "./CookieConsent";
import miVideo from "../assets/images/video_1.mp4"; // Ajusta la ruta según tu estructura
import LogoColor from "../assets/images/logo_verde.png";
import LogoWhite from "../assets/images/logo_blanco.png";

function App() {
  const headerRef = useRef(null);
  const heroContentRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Fade out hero content on scroll
      if (heroContentRef.current) {
        const opacity = 1 - Math.min(1, scrollY / (windowHeight * 0.5));
        heroContentRef.current.style.opacity = opacity.toString();
      }

      // Header background change on scroll
      if (headerRef.current) {
        if (scrollY > 30) {
          headerRef.current.classList.add("header-white");
          setScrolled(true);
        } else {
          headerRef.current.classList.remove("header-white");
          setScrolled(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="main-container">
      {/* CAPA 1 (INFERIOR): Imágenes fijas */}
      <div className="fixed-layer">
        <div className="fixed-image-container first-fixed-image">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GMxaZdetOuu4hXro7dSZ8Xw18tcha9.png"
            alt="Comunidad"
            className="fixed-image"
          />
        </div>
        <div className="fixed-image-container second-fixed-image">
          <img
            src="https://v0.blob.com/food-background.jpg"
            alt="Comida"
            className="fixed-image"
          />
        </div>
      </div>

      {/* CAPA 2 (SUPERIOR): Secciones que se desplazan */}
      <div className="scroll-layer">
        {/* Header fijo */}
        <header ref={headerRef} className="header">
          <div className="logo-nav-container">
            <a href="/" className="logo">
              {scrolled ? (
                <img src={LogoColor} alt="Honest Greens" width="150" />
              ) : (
                <img src={LogoWhite} alt="Honest Greens" width="150" />
              )}
            </a>
            <nav className="navigation">
              <a href="#" className="nav-link">
                Real Food Revolution
              </a>
              <a href="#" className="nav-link">
                Restaurantes
              </a>
              <a href="#" className="nav-link">
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

        {/* 1. Sección de video */}
        <section className="video-section">
          <video autoPlay muted loop playsInline className="background-video">
            <source src={miVideo} type="video/mp4" />
          </video>
          <div className="overlay"></div>

          {/* Contenido del hero */}
          <div ref={heroContentRef} className="hero-content">
            <h1 className="hero-title">
              TU VIDA
              <br />
              SALUDABLE.
            </h1>
            <p className="hero-subtitle">Descubre nuestros valores</p>
          </div>
        </section>

        {/* 2. Sección blanca con texto */}
        <section className="white-section">
          <div className="content-container">
            <h2 className="section-title">EXPLORA NUESTRO MENÚ</h2>
            <div className="menu-categories">
              <div className="menu-category">
                <img
                  src="https://v0.blob.com/menu-placeholder.jpg"
                  alt="Categoría de menú"
                  className="menu-image"
                />
                <h3 className="category-title">BOWLS</h3>
                <p className="category-description">
                  Nuestros bowls están llenos de ingredientes frescos y
                  nutritivos.
                </p>
              </div>
              <div className="menu-category">
                <img
                  src="https://v0.blob.com/menu-placeholder.jpg"
                  alt="Categoría de menú"
                  className="menu-image"
                />
                <h3 className="category-title">ENSALADAS</h3>
                <p className="category-description">
                  Ensaladas frescas con ingredientes de temporada.
                </p>
              </div>
              <div className="menu-category">
                <img
                  src="https://v0.blob.com/menu-placeholder.jpg"
                  alt="Categoría de menú"
                  className="menu-image"
                />
                <h3 className="category-title">PLATOS PRINCIPALES</h3>
                <p className="category-description">
                  Deliciosos platos principales con proteínas de calidad.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Sección transparente (muestra la primera imagen fija) */}
        <section className="transparent-section">
          <div className="content-container">
            <div className="transparent-content">
              <h1 className="transparent-title">
                JOIN THE
                <br />
                COMMUNITY.
              </h1>
              <p className="transparent-text">
                Únete a Honest People, obtén acceso privilegiado a eventos
                exclusivos, merchandise & Real Food gratis.
              </p>
              <p className="transparent-text">
                Skip the line, pide comida saludable en la App.
              </p>
              <button className="download-button">Descarga la App</button>
            </div>
          </div>
        </section>

        {/* 4. Primera sección blanca adicional */}
        <section className="white-section">
          <div className="content-container">
            <h2 className="section-title">NUESTROS VALORES</h2>
            <div className="values-grid">
              <div className="value-item">
                <h3 className="value-title">SOSTENIBILIDAD</h3>
                <p className="value-description">
                  Comprometidos con prácticas sostenibles y respetuosas con el
                  medio ambiente.
                </p>
              </div>
              <div className="value-item">
                <h3 className="value-title">CALIDAD</h3>
                <p className="value-description">
                  Seleccionamos los mejores ingredientes para ofrecerte la
                  máxima calidad.
                </p>
              </div>
              <div className="value-item">
                <h3 className="value-title">TRANSPARENCIA</h3>
                <p className="value-description">
                  Creemos en la transparencia en todo lo que hacemos, desde la
                  cocina hasta el servicio.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Segunda sección transparente (muestra la segunda imagen fija) */}
        <section className="transparent-section">
          <div className="content-container">
            <div className="transparent-content">
              <h1 className="transparent-title">
                COMIDA
                <br />
                REAL.
              </h1>
              <p className="transparent-text">
                Ingredientes frescos y de temporada seleccionados cuidadosamente
                para ofrecerte lo mejor. Nuestro compromiso es con la calidad y
                la sostenibilidad en cada plato que servimos.
              </p>
              <button className="menu-button">Ver Menú</button>
            </div>
          </div>
        </section>

        {/* 6. Segunda sección blanca adicional */}
        <section className="white-section">
          <div className="content-container">
            <h2 className="section-title">NUESTROS RESTAURANTES</h2>
            <div className="restaurants-grid">
              <div className="restaurant-item">
                <img
                  src="https://v0.blob.com/restaurant-placeholder.jpg"
                  alt="Restaurante"
                  className="restaurant-image"
                />
                <h3 className="restaurant-title">MADRID CENTRO</h3>
                <p className="restaurant-address">Calle Gran Vía, 44, Madrid</p>
              </div>
              <div className="restaurant-item">
                <img
                  src="https://v0.blob.com/restaurant-placeholder.jpg"
                  alt="Restaurante"
                  className="restaurant-image"
                />
                <h3 className="restaurant-title">BARCELONA</h3>
                <p className="restaurant-address">
                  Passeig de Gràcia, 120, Barcelona
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sección final (opcional) */}
        <section className="white-section footer-section">
          <div className="content-container">
            <h2 className="section-title">CONTACTO</h2>
            <p className="contact-text">
              ¿Tienes alguna pregunta? Estamos aquí para ayudarte.
            </p>
            <button className="contact-button">Contáctanos</button>
          </div>
        </section>
      </div>

      {/* Cookie Consent Banner */}
      <CookieConsent />
    </main>
  );
}

export default App;
