import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Donate() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("donar"); 
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    // Cuando tengamos BD, aquí guardaremos los datos
    setTimeout(() => navigate("/"), 4000); 
  };

  const handleLogout = () => {
    navigate('/'); 
  };

  if (sent) {
    return (
      <div className="dashboard-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="stat-card" style={{ textAlign: 'center', padding: '50px', border: '2px solid #6366f1' }}>
          <h1 style={{ fontSize: '3rem' }}>💖</h1>
          <h2>¡Registro Exitoso!</h2>
          <p style={{ color: '#94a3b8' }}>Gracias por tu generosidad. Tu aporte llegará a quienes más lo necesitan.</p>
          <p style={{ color: '#6366f1', marginTop: '20px' }}>Redirigiendo al inicio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <main className="main-content" style={{ maxWidth: '600px', margin: '0 auto', paddingBottom: '40px' }}>
        
        {/* BOTÓN DE CERRAR SESIÓN */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
          <button 
            onClick={handleLogout} 
            style={{
              background: 'transparent',
              color: '#ef4444',
              border: '1px solid #ef4444',
              padding: '8px 16px',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '0.8rem',
              transition: '0.3s'
            }}
          >
            Cerrar Sesión
          </button>
        </div>

        {/* BARRA DE NAVEGACIÓN */}
        <nav style={{ display: 'flex', gap: '10px', marginBottom: '30px', background: '#1e293b', padding: '10px', borderRadius: '12px' }}>
          <button onClick={() => setActiveTab("donar")} style={{ flex: 1, padding: '10px', borderRadius: '8px', border: 'none', background: activeTab === "donar" ? "#6366f1" : "transparent", color: '#fff', cursor: 'pointer', fontWeight: 'bold' }}>Donar</button>
          <button onClick={() => setActiveTab("historial")} style={{ flex: 1, padding: '10px', borderRadius: '8px', border: 'none', background: activeTab === "historial" ? "#6366f1" : "transparent", color: '#fff', cursor: 'pointer' }}>Donaciones anteriores</button>
          <button onClick={() => setActiveTab("nivel")} style={{ flex: 1, padding: '10px', borderRadius: '8px', border: 'none', background: activeTab === "nivel" ? "#6366f1" : "transparent", color: '#fff', cursor: 'pointer' }}>Categorización</button>
        </nav>

        {activeTab === "donar" && (
          <>
            <header style={{ textAlign: 'center', marginBottom: '30px' }}>
              <img src="/Donaton.png" alt="Logo" style={{ width: '70px', marginBottom: '15px' }} />
              <h1>Portal del Donante</h1>
              <p style={{ color: '#94a3b8' }}>Cada granito de arena cuenta</p>
            </header>

            <form onSubmit={handleSubmit} className="stat-card" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ color: '#94a3b8' }}>Nombre Completo</label>
                <input type="text" placeholder="Ej: Maria García" style={{ padding: '12px', borderRadius: '8px', background: '#0a0f18', color: '#fff', border: '1px solid #2d3748' }} required />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ color: '#94a3b8' }}>Tipo de Recurso</label>
                <select style={{ padding: '12px', borderRadius: '8px', background: '#0a0f18', color: '#fff', border: '1px solid #2d3748' }}>
                  <option>Alimentos (Arroz, latas, etc.)</option>
                  <option>Ropa (Invierno/Verano)</option>
                  <option>Higiene (Jabón, pañales)</option>
                  <option>Medicamentos básicos</option>
                </select>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ color: '#94a3b8' }}>Punto de Entrega (Logística)</label>
                <select style={{ padding: '12px', borderRadius: '8px', background: '#0a0f18', color: '#fff', border: '1px solid #2d3748' }}>
                  <option>Sede Central - Centro Ciudad</option>
                  <option>Punto de Acopio Norte - Calle 10</option>
                  <option>Punto de Acopio Sur - Bodega B</option>
                </select>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ color: '#94a3b8' }}>¿A quién va dirigido?</label>
                <select style={{ padding: '12px', borderRadius: '8px', background: '#0a0f18', color: '#fff', border: '1px solid #2d3748' }}>
                  <option>Comedores Comunitarios</option>
                  <option>Fundación Infantil</option>
                  <option>Refugio de Ancianos</option>
                  <option>Ayuda General Urgente</option>
                </select>
              </div>

              <button type="submit" style={{ 
                background: '#6366f1', color: '#fff', border: 'none', padding: '15px', 
                borderRadius: '10px', cursor: 'pointer', fontSize: '1.1rem', fontWeight: 'bold', marginTop: '10px'
              }}>
                Confirmar y Agendar Entrega
              </button>
            </form>
          </>
        )}

        {activeTab === "historial" && (
          <div className="stat-card" style={{ textAlign: 'center', padding: '40px' }}>
            <h2>Donaciones Anteriores</h2>
            <p style={{ color: '#94a3b8' }}>Aún no tienes donaciones registradas. ¡Tu primera donación aparecerá aquí!</p>
          </div>
        )}

        {activeTab === "nivel" && (
          <div className="stat-card" style={{ textAlign: 'center', padding: '40px' }}>
            <h2>Categorización</h2>
            <p style={{ color: '#94a3b8' }}>Próximamente: Descubre tu nivel de impacto (Bronce, Plata u Oro) según tus aportes.</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default Donate;