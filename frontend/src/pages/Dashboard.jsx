import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Dashboard() {
  const navigate = useNavigate();

  // Los datos ahora están vacíos o en cero, esperando la base de datos
  const [data] = useState({
    donaciones: [], // Sin datos para el gráfico aún
    stats: { totales: 0, voluntarios: 0, entregas: 0 }
  });

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="dashboard-container">
      <main className="main-content">
        <header className="header" style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginBottom: '40px' 
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <img src="/Donaton.png" alt="Logo Donatón" style={{ width: '60px', height: 'auto', borderRadius: '12px' }} />
            <div>
              <h1 style={{ margin: 0 }}>Donatón</h1>
              <p style={{ color: '#94a3b8', margin: 0 }}>Panel de control y monitoreo en tiempo real</p>
            </div>
          </div>
          
          <button 
            onClick={handleLogout} 
            style={{
              background: 'transparent',
              color: '#ef4444',
              border: '1px solid #ef4444',
              padding: '10px 20px',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Cerrar Sesión
          </button>
        </header>

        <div className="stats-grid">
          <div className="stat-card">
            <h3>Total Recaudado</h3>
            <div className="value">{data.stats.totales} kg</div>
          </div>
          <div className="stat-card">
            <h3>Voluntarios Activos</h3>
            <div className="value" style={{ color: '#94a3b8' }}>{data.stats.voluntarios}</div>
          </div>
          <div className="stat-card">
            <h3>Entregas Hoy</h3>
            <div className="value" style={{ color: '#6366f1' }}>{data.stats.entregas}</div>
          </div>
        </div>

        <div className="chart-section">
          <h2 style={{ marginBottom: '20px', color: '#fff' }}>Distribución de Recursos</h2>
          <div style={{ 
            width: '100%', 
            height: 350, 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            background: 'rgba(30, 41, 59, 0.5)',
            borderRadius: '15px',
            border: '1px dashed #2d3748'
          }}>
            {data.donaciones.length > 0 ? (
              <ResponsiveContainer>
                <BarChart data={data.donaciones}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#2d3748" />
                  <XAxis dataKey="tipo" stroke="#94a3b8" />
                  <YAxis hide />
                  <Tooltip />
                  <Bar dataKey="cantidad" fill="#6366f1" radius={[10, 10, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div style={{ textAlign: 'center', color: '#94a3b8' }}>
                <p style={{ fontSize: '1.2rem' }}>📊</p>
                <p>No hay datos registrados todavía.</p>
                <p style={{ fontSize: '0.8rem' }}>Las donaciones aparecerán aquí una vez se sincronicen.</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;