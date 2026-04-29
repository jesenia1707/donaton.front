import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Volunteer() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("rutas");

  // DATOS LIMPIOS (Esperando BD)
  // totalEntregas: 0 para que empiece como "NUEVO"
  const [volunteerStats] = useState({
    nombre: "Equipo Voluntario",
    totalEntregas: 0, 
    rutas: []
  });

  // Lógica de Rangos para Voluntarios
  const getRango = (total) => {
    if (total >= 50) return { nombre: "ORO", color: "#fbbf24", icono: "🏆", titulo: "Capitán de Logística" };
    if (total >= 10) return { nombre: "PLATA", color: "#e5e7eb", icono: "🥈", titulo: "Especialista de Ruta" };
    if (total >= 1) return { nombre: "BRONCE", color: "#cd7f32", icono: "🥉", titulo: "Colaborador Activo" };
    return { nombre: "NUEVO", color: "#94a3b8", icono: "🌱", titulo: "Voluntario en Formación" };
  };

  const rango = getRango(volunteerStats.totalEntregas);

  return (
    <div className="dashboard-container">
      <main className="main-content" style={{ maxWidth: '800px', margin: '0 auto', paddingBottom: '40px' }}>
        
        {/* BOTÓN CERRAR SESIÓN */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
          <button onClick={() => navigate('/')} style={{ background: 'transparent', color: '#ef4444', border: '1px solid #ef4444', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '0.8rem' }}>
            Cerrar Sesión
          </button>
        </div>

        {/* NAVEGACIÓN */}
        <nav style={{ display: 'flex', gap: '10px', marginBottom: '30px', background: '#1e293b', padding: '10px', borderRadius: '12px' }}>
          <button onClick={() => setActiveTab("rutas")} style={{ flex: 1, padding: '10px', borderRadius: '8px', border: 'none', background: activeTab === "rutas" ? "#6366f1" : "transparent", color: '#fff', cursor: 'pointer', fontWeight: 'bold' }}>Rutas Asignadas</button>
          <button onClick={() => setActiveTab("historial")} style={{ flex: 1, padding: '10px', borderRadius: '8px', border: 'none', background: activeTab === "historial" ? "#6366f1" : "transparent", color: '#fff', cursor: 'pointer' }}>Mis Entregas</button>
          <button onClick={() => setActiveTab("rango")} style={{ flex: 1, padding: '10px', borderRadius: '8px', border: 'none', background: activeTab === "rango" ? "#6366f1" : "transparent", color: '#fff', cursor: 'pointer' }}>Mi Nivel</button>
        </nav>

        {activeTab === "rutas" && (
          <div className="stat-card">
            <h2 style={{ marginBottom: '20px' }}>Rutas del Día</h2>
            <div style={{ padding: '40px', textAlign: 'center', border: '1px dashed #2d3748', borderRadius: '15px' }}>
              <p style={{ fontSize: '2rem' }}>📍</p>
              <p style={{ color: '#94a3b8' }}>No tienes rutas de recolección asignadas para hoy.</p>
            </div>
          </div>
        )}

        {activeTab === "historial" && (
          <div className="stat-card" style={{ textAlign: 'center', padding: '40px' }}>
            <h2>Historial de Impacto</h2>
            <p style={{ color: '#94a3b8' }}>Aquí aparecerán todas las donaciones que hayas transportado con éxito.</p>
          </div>
        )}

        {activeTab === "rango" && (
          <div className="stat-card" style={{ textAlign: 'center', padding: '40px' }}>
            <div style={{ fontSize: '5rem', marginBottom: '10px' }}>{rango.icono}</div>
            <h2 style={{ color: rango.color, letterSpacing: '2px' }}>VOLUNTARIO {rango.nombre}</h2>
            <p style={{ color: '#94a3b8', fontSize: '1.1rem' }}>{rango.titulo}</p>
            
            <div style={{ marginTop: '30px', padding: '20px', background: '#0f172a', borderRadius: '10px' }}>
              <p style={{ margin: 0 }}>Entregas realizadas: <strong>{volunteerStats.totalEntregas}</strong></p>
              <p style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '10px' }}>
                {volunteerStats.totalEntregas === 0 
                  ? "Realiza tu primera entrega para obtener el rango BRONCE" 
                  : `¡Sigue así para alcanzar el nivel superior!`}
              </p>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}

export default Volunteer;