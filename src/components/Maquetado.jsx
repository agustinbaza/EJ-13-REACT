import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Maquetado.css";
import Weather from "./Clima";

function Maquetado() {
  return (
    <section className="container">
      <Weather />
    </section>
  );
}

export default Maquetado;
