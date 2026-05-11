import React from "react";

const MapaPage = () => {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Mapa de Ubicación</h1>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.066444501234!2d-70.6692655!3d-33.4488897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDI2JzU2LjAiUyA3MMKwNDAnMDkuNCJX!5e0!3m2!1ses!2scl!4v1625500000000!5m2!1ses!2scl" 
        width="100%" 
        height="450" 
        style={{ border: 0, borderRadius: "10px" }} 
        allowFullScreen="" 
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default MapaPage;