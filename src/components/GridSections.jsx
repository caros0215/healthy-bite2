import "./GridSections.css";
import imagen1 from "../assets/images/plato_2.jpeg";
import imagen2 from "../assets/images/plato_4.jpeg";
import videoDemo from "../assets/images/video_23.mp4"; // Ruta del video

const sections = [
  {
    type: "text",
    title: "NUESTRA FILOSOFÍA",
    subtitle: "EAT REAL.",
    text: "Preparamos alimentos diariamente en casa, sin aditivos ni conservantes. Nuestro menú atiende diversas dietas: sin gluten, vegetariana, plant-based y keto.",
  },
  {
    type: "image",
    image: imagen1,
  },
  {
    type: "image",
    image: imagen2,
    hasVideo: true, // Agrega el cuadro de video en esta imagen
  },
  {
    type: "text",
    title: "CARRERA PROFESIONAL",
    subtitle: "ÚNETE AL EQUIPO.",
    text: "Estamos creciendo rápidamente y comprometidos a construir una cultura dinámica.",
  },
];

export default function GridSections() {
  return (
    <div className="grid-container">
      {sections.map((section, index) => (
        <div key={index} className="grid-item">
          {section.type === "text" ? (
            <div className="text-content">
              <h2>{section.title}</h2>
              <h3>{section.subtitle}</h3>
              <p>{section.text}</p>
            </div>
          ) : (
            <div className="image-content">
              <img src={section.image} alt={section.title || "Imagen"} />
              {section.hasVideo && (
                <div className="video-overlay">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="video-player"
                  >
                    <source src={videoDemo} type="video/mp4" />
                    Tu navegador no admite el video.
                  </video>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
