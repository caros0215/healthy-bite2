"use client"

import { useEffect, useRef, useState } from "react"
import "../../../styles/globals.css"
import "../../../styles/home.css"
import CookieConsent from "../CookieConsent/CookieConsent"
import miVideo from "../../../assets/images/video_1.mp4"
import MenuSlider from "../MenuSlider/MenuSlider"
import EventosSlider from "../EventosSlider/EventosSliders"
import Frases from "../Frases/Frases"
import GridSections from "../GridSections/GridSections"
import "../MenuSlider/MenuSlider.css"
import "../EventosSlider/EventosSliders.module.css"
import imagen1 from "../../../assets/images/plato_2.jpeg"
import imagen2 from "../../../assets/images/plato_3.jpeg"
import "react-pdf/dist/esm/Page/AnnotationLayer.css"
import "react-pdf/dist/esm/Page/TextLayer.css"
import { pdfjs } from "react-pdf"
import phoneImage from "../../../assets/images/ipad21.png"
import menu1 from "../../../assets/images/2025 MENU HEALTHYBITE (1)_page-0001.jpg"
import menu2 from "../../../assets/images/2025 MENU HEALTHYBITE (1)_page-0002.jpg"
import menu3 from "../../../assets/images/2025 MENU HEALTHYBITE (1)_page-0003.jpg"
import menu4 from "../../../assets/images/2025 MENU HEALTHYBITE (1)_page-0004.jpg"
import menu5 from "../../../assets/images/2025 MENU HEALTHYBITE (1)_page-0005.jpg"
import menu6 from "../../../assets/images/2025 MENU HEALTHYBITE (1)_page-0006.jpg"
import menu7 from "../../../assets/images/2025 MENU HEALTHYBITE (1)_page-0007.jpg"
import menu8 from "../../../assets/images/2025 MENU HEALTHYBITE (1)_page-0008.jpg"
import menu9 from "../../../assets/images/2025 MENU HEALTHYBITE (1)_page-0009.jpg"
import menu10 from "../../../assets/images/2025 MENU HEALTHYBITE (1)_page-0010.jpg"

// Configuración del worker (debe ir después de las importaciones)
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`

function LandingPpage() {
  const heroContentRef = useRef(null)
  const firstImageRef = useRef(null)
  const secondImageRef = useRef(null)
  const [pageLoaded, setPageLoaded] = useState(false)
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)
  const [currentSlide, setCurrentSlide] = useState(0)

  // Array with all menu images
  const menuImages = [menu1, menu2, menu3, menu4, menu5, menu6, menu7, menu8, menu9, menu10]

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
  }

  // Force header to be transparent initially
  useEffect(() => {
    // Force position 0 at start
    window.scrollTo(0, 0)

    // Mark page as loaded after brief delay
    const timer = setTimeout(() => {
      setPageLoaded(true)
    }, 200)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Don't activate scroll events until page is fully loaded
    if (!pageLoaded) return

    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight

      // Fade out hero content on scroll
      if (heroContentRef.current) {
        const opacity = 1 - Math.min(1, scrollY / (windowHeight * 0.5))
        heroContentRef.current.style.opacity = opacity.toString()
      }

      // Control visibility of fixed images
      const sections = document.querySelectorAll(".transparent-section")
      if (sections.length >= 2 && firstImageRef.current && secondImageRef.current) {
        const firstSection = sections[0]
        const secondSection = sections[1]

        const firstRect = firstSection.getBoundingClientRect()
        const secondRect = secondSection.getBoundingClientRect()

        // Show first image when first transparent section is visible
        if (firstRect.top < windowHeight && firstRect.bottom > 0) {
          firstImageRef.current.style.opacity = "1"
          secondImageRef.current.style.opacity = "0"
        }
        // Show second image when second transparent section is visible
        else if (secondRect.top < windowHeight && secondRect.bottom > 0) {
          firstImageRef.current.style.opacity = "0"
          secondImageRef.current.style.opacity = "1"
        }
        // Hide both when no transparent section is visible
        else {
          firstImageRef.current.style.opacity = "0"
          secondImageRef.current.style.opacity = "0"
        }
      }
    }

    // Scroll event only added after page is loaded
    window.addEventListener("scroll", handleScroll)

    // Reset scroll at start
    window.scrollTo(0, 0)

    // Run once to establish initial states
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [pageLoaded])

  // Slider functions
  const nextSlide = () => {
    if (currentSlide < menuImages.length - 1) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  return (
    <main className="main-container">
      <div className="fixed-layer">
        <div ref={firstImageRef} className="fixed-image-container first-fixed-image">
          <img src={imagen1 || "/placeholder.svg"} alt="Comunidad" className="fixed-image" />
        </div>
        <div ref={secondImageRef} className="fixed-image-container second-fixed-image">
          <img src={imagen2 || "/placeholder.svg"} alt="Comida" className="fixed-image" />
        </div>
      </div>

      <div className="scroll-layer">
        {/* Video Section */}
        <section className="video-section">
          <video autoPlay muted loop playsInline className="background-video">
            <source src={miVideo} type="video/mp4" />
          </video>
          <div className="overlay"></div>
          <div ref={heroContentRef} className="hero-content">
            <h1 className="hero-title">
              TU VIDA
              <br />
              SALUDABLE.
            </h1>
            <p className="hero-subtitle">Descubre nuestros valores</p>
          </div>
        </section>

        {/* Menu Section */}
        <section className="white-section">
          <div className="content-container">
            <div className="section-heading">
              <p className="section-lead">EXPLORA NUESTRO MENÚ</p>
            </div>
            <MenuSlider />
          </div>
        </section>

        {/* Community Section */}
        <section className="transparent-section">
          <div className="content-container">
            <div className="transparent-content">
              <h1 className="transparent-title">
                JOIN THE
                <br />
                COMMUNITY.
              </h1>
              <p className="transparent-text">Únete a Honest People...</p>
              <button className="download-button">Descarga la App</button>
            </div>
          </div>
        </section>

        {/* Grid Section */}
        <section className="white-section3">
          <div className="content-container3">
            <GridSections />
          </div>
        </section>

        {/* Events Section */}
        <section className="white-section4" id="conocenos">
          <div className="content-container4">
            <EventosSlider />
          </div>
        </section>

        {/* Second transparent section (shows second fixed image) */}
        <section className="transparent-section">
          <div className="content-container10 horizontal-layout">
            {/* Text content - A la izquierda */}
            <div className="transparent-content2">
              <h1 className="transparent-title">
                Aqui se cocina
                <br />
                con amor.
              </h1>
              <p className="transparent-text">
                Ingredientes frescos y de temporada seleccionados cuidadosamente para ofrecerte lo mejor. Nuestro
                compromiso es con la calidad y la sostenibilidad en cada plato que servimos.
              </p>
              {/* <button className="menu-button">Ver Menú Completo</button> */}
            </div>

            {/* Container para iPad con slider de menú - A la derecha */}
            <div className="phone-container">
              {/* Contenedor del slider del menú - posicionado sobre el iPad */}
              <div className="menu-slider-container">
                <div
                  className="menu-slides"
                  style={{
                    transform: `translateX(-${currentSlide * 10}%)`, // 10% por slide
                  }}
                >
                  {menuImages.map((image, index) => (
                    <div key={index} className="menu-slide-wrapper">
                      <img src={image || "/placeholder.svg"} alt={`Menú página ${index + 1}`} className="menu-slide" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Marco del iPad detrás del slider */}
              <div className="phone-frame-wrapper">
                <img src={phoneImage || "/placeholder.svg"} alt="iPad frame" className="phone-frame" />
              </div>

              {/* Controles del slider */}
              <div className="slider-controls">
                <button onClick={prevSlide} className="slider-button" disabled={currentSlide === 0}>
                  ←
                </button>
                <span className="slide-info">
                  {currentSlide + 1} / {menuImages.length}
                </span>
                <button onClick={nextSlide} className="slider-button" disabled={currentSlide === menuImages.length - 1}>
                  →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <section className="white-section6 footer-section">
          <div className="content-container">
            <Frases />
          </div>
        </section>
      </div>

      <CookieConsent />
    </main>
  )
}

export default LandingPpage
