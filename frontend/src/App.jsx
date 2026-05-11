import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; 
import Login from "./pages/Login"; 
import Dashboard from "./pages/Dashboard"; 
import Donate from "./pages/Donante"; 
import Volunteer from "./pages/Volunteer"; 
import Register from "./pages/Register"; 
// 1. Importamos la nueva página de seguimiento
import SeguimientoPage from "./pages/SeguimientoPage"; 
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
      
      {/* 2. Añadimos la ruta de seguimiento con parámetro ID */}
      {/* El ":id" permite que la URL sea /seguimiento/1, /seguimiento/2, etc. */}
      <Route path="/seguimiento/:id" element={<SeguimientoPage />} />

      {/* Ruta comodín para redirigir si la URL no existe */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;