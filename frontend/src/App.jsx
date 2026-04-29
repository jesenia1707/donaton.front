import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; 
import Login from "./pages/Login"; 
import Dashboard from "./pages/Dashboard"; 
import Donate from "./pages/Donante"; 
import Volunteer from "./pages/Volunteer"; 
import "./App.css";

function App() {
  return (
    <Routes>
      {/* Página de Inicio Pública */}
      <Route path="/" element={<Home />} />
      
      {/* Login */}
      <Route path="/login" element={<Login />} />
      
      {/* Dashboard Admin */}
      <Route path="/dashboard" element={<Dashboard />} />

      {/* Vista de Donante */}
      <Route path="/donante" element={<Donate />} />

      {/* Vista de Voluntario */}
      <Route path="/voluntario" element={<Volunteer />} />
      
      {/* Ruta por defecto (en caso de error 404 interno) */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;