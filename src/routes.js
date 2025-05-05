// src/RoutesComponent.js
import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Layout from "./components/Layout";
import Inicio from "./components/pagina_principal/Landing/Landing_page";
import Food from "./components/Menu_Vistas/Real_food/Real_food_revolution";
import Catering from "./components/Menu_Vistas/catering/catering";

const RoutesComponent = () => {
  return (
    <Routes>
      {/* Todas las rutas están envueltas en Layout */}
      <Route element={<Layout />}>
        <Route path="/" element={<Inicio />} />
        <Route path="/Food" element={<Food />} />
        <Route path="/Catering" element={<Catering />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
};

function NoMatch() {
  return (
    <section className="page_404">
      <div>
        <div className="four_zero_four_bg">
          <h1>404</h1>
        </div>
        <div className="box_404">
          <h3>
            <center>Página No Encontrada</center>
          </h3>
        </div>
        <center>
          <button className="boton404">
            <NavLink
              to="/"
              style={{ textDecoration: "none", color: "#ffffff" }}
            >
              Ir al Menú
            </NavLink>
          </button>
        </center>
      </div>
    </section>
  );
}

export default RoutesComponent;
