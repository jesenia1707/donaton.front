import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; 
import Login from "./pages/Login"; 
import Dashboard from "./pages/Dashboard"; 
import Donate from "./pages/Donante"; 
import Volunteer from "./pages/Volunteer"; 
import Register from "./pages/Register"; 
import SeguimientoPage from "./pages/SeguimientoPage"; 
import MapaPage from "./pages/MapaPage"; // Importación lista
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/donante" element={<Donate />} />
      <Route path="/voluntario" element={<Volunteer />} />
      <Route path="/seguimiento/:id" element={<SeguimientoPage />} />

      {/* ESTA ES LA LÍNEA QUE FALTABA: */}
      <Route path="/mapa" element={<MapaPage />} />

      {/* Ruta comodín */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;