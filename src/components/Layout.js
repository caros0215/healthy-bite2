import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./pagina_principal/footer/footer";
import Header from "./Header/Header";

const Layout = () => {
  const location = useLocation();

  // Definir rutas donde NO se debe mostrar el footer
  const hideFooterRoutes = ["/"];
  const hideFooter = hideFooterRoutes.includes(location.pathname);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      {!hideFooter && <Footer />}
    </>
  );
};

export default Layout;
