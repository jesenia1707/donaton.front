import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login"; 
import Dashboard from "./pages/Dashboard"; 
import Donate from "./pages/Donante"; 
import Volunteer from "./pages/Volunteer"; // <--- 1. Importamos la nueva página
import "./App.css";

function App() {
  return (
    <Routes>
      {/* 1. Login - La entrada */}
      <Route path="/" element={<Login />} />
      
      {/* 2. Admin - El Dashboard de gráficas */}
      <Route path="/dashboard" element={<Dashboard />} />

      {/* 3. Donante - El formulario de donación */}
      <Route path="/donante" element={<Donate />} />

      {/* 4. Voluntario - Rutas y recolección */}
      <Route path="/voluntario" element={<Volunteer />} /> {/* <--- 2. Añadimos la ruta */}
    </Routes>
  );
}

export default App;