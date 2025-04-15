"use client"

import { useState, useEffect } from "react"
import "./SplashScreen.css"
import imagen1 from "../assets/images/logo_verde.png"

function SplashScreen({ onLoadingComplete }) {
  const [progress, setProgress] = useState(0)
  const [isFading, setIsFading] = useState(false)
  const [isHidden, setIsHidden] = useState(false)

  useEffect(() => {
    // Asegurarse de que la página esté en la parte superior cuando se muestra el splash screen
    window.scrollTo(0, 0)

    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer)
          // Cuando llegue al 100%, inicia la transición
          setIsFading(true)
          return 100
        }
        const newProgress = Math.min(oldProgress + 1, 100)
        return newProgress
      })
    }, 30)

    return () => {
      clearInterval(timer)
    }
  }, [])

  // Efecto separado para manejar la transición
  useEffect(() => {
    if (isFading) {
      // Asegurarse de que la página esté en la parte superior antes de notificar que la carga está completa
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      })

      // Pequeño retraso antes de notificar que la carga está completa
      const notifyTimeout = setTimeout(() => {
        // Notificar que el contenido principal debe comenzar a cargarse
        onLoadingComplete()
      }, 500)

      // Después de que la animación de deslizamiento/desvanecimiento termine,
      // eliminamos completamente el componente del DOM
      const hideTimeout = setTimeout(() => {
        setIsHidden(true)
      }, 1500) // Coincide con la duración de la transición en tu CSS

      return () => {
        clearTimeout(notifyTimeout)
        clearTimeout(hideTimeout)
      }
    }
  }, [isFading, onLoadingComplete])

  // No renderizar nada si el componente está oculto
  if (isHidden) return null

  return (
    <div className={`splash-screen ${isFading ? "fade-out" : ""}`}>
      <div className="splash-content">
        <div className="logo-container">
          <img src={imagen1 || "/placeholder.svg"} alt="Logo" className="logo1" />
          <div className="subtitle">
            Restaurante y mercado saludable
            <br />
            Healthy restaurant and market. 2021
          </div>
        </div>
        <div className="progress-number">{progress}</div>
      </div>
    </div>
  )
}

export default SplashScreen

