import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesComponent from "./routes";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import SplashScreen from "./components/SplashScreen";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  const handleLoadingComplete = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    setIsLoading(false);

    // No necesitas setContentVisible si no estás usando esa lógica
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, 100);
  };

  return (
    <>
      {isLoading ? (
        <SplashScreen onLoadingComplete={handleLoadingComplete} />
      ) : (
        <Router>
          <RoutesComponent />
        </Router>
      )}
    </>
  );
};

export default App;
