import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";      // <--- La nueva página principal
import Login from "./pages/Login"; 
import Dashboard from "./pages/Dashboard"; 
import Donate from "./pages/Donante"; 
import Volunteer from "./pages/Volunteer"; 
import "./App.css";

function App() {
  return (
    <Routes>
      {/* 1. Página de Inicio Pública - Quienes somos, impacto y redes */}
      <Route path="/" element={<Home />} />
      
      {/* 2. Login - Ahora accesible desde /login */}
      <Route path="/login" element={<Login />} />
      
      {/* 3. Admin - El Dashboard de gráficas */}
      <Route path="/dashboard" element={<Dashboard />} />

      {/* 4. Donante - El formulario de donación */}
      <Route path="/donante" element={<Donate />} />

      {/* 5. Voluntario - Rutas y recolección */}
      <Route path="/voluntario" element={<Volunteer />} />
    </Routes>
  );
}

export default App;