"use client"

import { useEffect, useRef, useState } from "react"
import "../styles/globals.css"
import "../styles/home.css"
import "./LandingPage.module.css"
import CookieConsent from "./CookieConsent"
import miVideo from "../assets/images/video_1.mp4"
import LogoColor from "../assets/images/logo_verde.png"
import MenuSlider from "./MenuSlider"
import EventosSlider from "./EventosSliders"
import TieredCollapsible from "./TieredCollapsible"
import Frases from "./Frases"
import GridSections from "./GridSections"
import "./MenuSlider.css"
import "./EventosSliders.module.css"
import LogoWhite from "../assets/images/logo_blanco.png"
import imagen1 from "../assets/images/plato_2.jpeg"
import imagen2 from "../assets/images/plato_3.jpeg"

function LandingPpage() {
  const headerRef = useRef(null)
  const heroContentRef = useRef(null)
  const [scrolled, setScrolled] = useState(false)
  const firstImageRef = useRef(null)
  const secondImageRef = useRef(null)
  const [pageLoaded, setPageLoaded] = useState(false)

  // Force header to be transparent initially
  useEffect(() => {
    // Forzar posición 0 al inicio
    window.scrollTo(0, 0);
    
    // Establecer el header como transparente inicialmente
    setScrolled(false);
    
    // Marcar la página como cargada después de un breve retraso
    const timer = setTimeout(() => {
      setPageLoaded(true);
    }, 200);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // No activar eventos de scroll hasta que la página esté completamente cargada
    if (!pageLoaded) return;
    
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight

      // Fade out hero content on scroll
      if (heroContentRef.current) {
        const opacity = 1 - Math.min(1, scrollY / (windowHeight * 0.5))
        heroContentRef.current.style.opacity = opacity.toString()
      }

      // Header background change - ahora con umbral más alto
      if (headerRef.current) {
        if (scrollY > 70) { // Aumentado a 70px para evitar cambios con pequeños desplazamientos
          headerRef.current.classList.add("header-white")
          setScrolled(true)
        } else {
          headerRef.current.classList.remove("header-white")
          setScrolled(false)
        }
      }

      // Control de visibilidad de imágenes fijas
      const sections = document.querySelectorAll(".transparent-section")
      if (sections.length >= 2 && firstImageRef.current && secondImageRef.current) {
        const firstSection = sections[0]
        const secondSection = sections[1]

        const firstRect = firstSection.getBoundingClientRect()
        const secondRect = secondSection.getBoundingClientRect()

        // Mostrar primera imagen cuando la primera sección transparente está visible
        if (firstRect.top < windowHeight && firstRect.bottom > 0) {
          firstImageRef.current.style.opacity = "1"
          secondImageRef.current.style.opacity = "0"
        }
        // Mostrar segunda imagen cuando la segunda sección transparente está visible
        else if (secondRect.top < windowHeight && secondRect.bottom > 0) {
          firstImageRef.current.style.opacity = "0"
          secondImageRef.current.style.opacity = "1"
        }
        // Ocultar ambas cuando ninguna sección transparente está visible
        else {
          firstImageRef.current.style.opacity = "0"
          secondImageRef.current.style.opacity = "0"
        }
      }
    }

    // Evento de scroll solo se añade después de que la página está cargada
    window.addEventListener("scroll", handleScroll)
    
    // Resetear scroll al iniciar
    window.scrollTo(0, 0);
    
    // Ejecutar una vez para establecer estados iniciales
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [pageLoaded])

  // Agregar una clase CSS para asegurar que el scroll esté en 0
  return (
    <main className="main-container" style={{ overflowAnchor: 'none' }}>
      {/* CAPA 1 (INFERIOR): Imágenes fijas */}
      <div className="fixed-layer">
        <div ref={firstImageRef} className="fixed-image-container first-fixed-image">
          <img src={imagen1 || "/placeholder.svg"} alt="Comunidad" className="fixed-image" />
        </div>
        <div ref={secondImageRef} className="fixed-image-container second-fixed-image">
          <img src={imagen2 || "/placeholder.svg"} alt="Comida" className="fixed-image" />
        </div>
      </div>

      {/* CAPA 2 (SUPERIOR): Secciones que se desplazan */}
      <div className="scroll-layer">
        {/* Header fijo - forzado a ser transparente inicialmente */}
        <header 
          ref={headerRef} 
          className={`header ${scrolled ? "header-white" : ""}`}
          style={{ transition: "background-color 0.3s ease" }}
        >
          <div className="logo-nav-container">
            <a href="/" className="logo">
              {scrolled ? (
                <img src={LogoColor || "/placeholder.svg"} alt="Honest Greens" width="150" />
              ) : (
                <img src={LogoWhite || "/placeholder.svg"} alt="Honest Greens" width="150" />
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
            <div className="section-heading">
              <p className="section-lead">EXPLORA NUESTRO MENÚ</p>
            </div>
            <MenuSlider />
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
                Únete a Honest People, obtén acceso privilegiado a eventos exclusivos, merchandise & Real Food gratis.
              </p>
              <p className="transparent-text">Skip the line, pide comida saludable en la App.</p>
              <button className="download-button">Descarga la App</button>
            </div>
          </div>
        </section>

        <section className="white-section2">
          <div className="content-container2">
          <TieredCollapsible />
          </div>
        </section>

        <section className="white-section3">
          <div className="content-container3">
          <GridSections />
          </div>
        </section>

        {/* 4. Primera sección blanca adicional */}
        <section className="white-section4">
          <div className="content-container4">

            <EventosSlider />
          </div>
        </section>

        {/* 5. Segunda sección transparente (muestra la segunda imagen fija) */}
        <section className="transparent-section">
          <div className="content-container10">
            <div className="transparent-content">
              <h1 className="transparent-title">
                COMIDA
                <br />
                REAL.
              </h1>
              <p className="transparent-text">
                Ingredientes frescos y de temporada seleccionados cuidadosamente para ofrecerte lo mejor. Nuestro
                compromiso es con la calidad y la sostenibilidad en cada plato que servimos.
              </p>
              <button className="menu-button">Ver Menú</button>
            </div>
          </div>
        </section>

        {/* 6. Segunda sección blanca adicional */}
        <section className="white-section5">
          <div className="content-container5">
          <Frases />
          </div>
        </section>

        {/* Sección final (opcional) */}
        <section className="white-section6 footer-section">
          <div className="content-container">
            <h2 className="section-title">CONTACTO</h2>
            <p className="contact-text">¿Tienes alguna pregunta? Estamos aquí para ayudarte.</p>
            <button className="contact-button">Contáctanos</button>
          </div>
        </section>
      </div>

      {/* Cookie Consent Banner */}
      <CookieConsent />
    </main>
  )
}

export default LandingPpage