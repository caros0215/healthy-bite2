import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesComponent from "./routes";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
        <RoutesComponent />
    </Router>
  );
};

export default App;