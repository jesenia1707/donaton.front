import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Dashboard() {
  const navigate = useNavigate();

  const [data] = useState({
    donaciones: [],
    stats: {
      totales: 0,
      voluntarios: 0,
      entregas: 0,
    },
  });

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div
      className="dashboard-container"
      style={{
        background:
          "linear-gradient(135deg, #eef4ff 0%, #dbeafe 50%, #f8fbff 100%)",
        minHeight: "100vh",
      }}
    >
      <main className="main-content">
        {/* HEADER */}
        <header
          className="header"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "40px",
            background: "#ffffff",
            padding: "25px 35px",
            borderRadius: "24px",
            border: "1px solid #dbe4f0",
            boxShadow: "0 6px 18px rgba(0,0,0,0.05)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <img
              src="/Donaton.png"
              alt="Logo Donatón"
              style={{
                width: "60px",
                borderRadius: "14px",
              }}
            />

            <div>
              <h1
                style={{
                  margin: 0,
                  color: "#1e293b",
                  fontSize: "2rem",
                }}
              >
                Donatón
              </h1>

              <p
                style={{
                  color: "#64748b",
                  margin: 0,
                }}
              >
                Panel de control y monitoreo en tiempo real
              </p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            style={{
              background: "#ffffff",
              color: "#ef4444",
              border: "1px solid #fecaca",
              padding: "12px 22px",
              borderRadius: "12px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Cerrar Sesión
          </button>
        </header>

        {/* TARJETAS */}
        <div className="stats-grid">
          <div
            className="stat-card"
            style={{
              background: "#ffffff",
              borderRadius: "20px",
              padding: "25px",
              border: "1px solid #dbe4f0",
              boxShadow: "0 6px 18px rgba(0,0,0,0.05)",
            }}
          >
            <h3 style={{ color: "#64748b" }}>Total Recaudado</h3>

            <div
              className="value"
              style={{
                color: "#1e293b",
                fontSize: "2rem",
                fontWeight: "bold",
              }}
            >
              {data.stats.totales} kg
            </div>
          </div>

          <div
            className="stat-card"
            style={{
              background: "#ffffff",
              borderRadius: "20px",
              padding: "25px",
              border: "1px solid #dbe4f0",
              boxShadow: "0 6px 18px rgba(0,0,0,0.05)",
            }}
          >
            <h3 style={{ color: "#64748b" }}>Voluntarios Activos</h3>

            <div
              className="value"
              style={{
                color: "#6366f1",
                fontSize: "2rem",
                fontWeight: "bold",
              }}
            >
              {data.stats.voluntarios}
            </div>
          </div>

          <div
            className="stat-card"
            style={{
              background: "#ffffff",
              borderRadius: "20px",
              padding: "25px",
              border: "1px solid #dbe4f0",
              boxShadow: "0 6px 18px rgba(0,0,0,0.05)",
            }}
          >
            <h3 style={{ color: "#64748b" }}>Entregas Hoy</h3>

            <div
              className="value"
              style={{
                color: "#10b981",
                fontSize: "2rem",
                fontWeight: "bold",
              }}
            >
              {data.stats.entregas}
            </div>
          </div>
        </div>

        {/* GRÁFICO */}
        <div
          className="chart-section"
          style={{
            marginTop: "30px",
            background: "#ffffff",
            padding: "35px",
            borderRadius: "24px",
            border: "1px solid #dbe4f0",
            boxShadow: "0 6px 18px rgba(0,0,0,0.05)",
          }}
        >
          <h2
            style={{
              marginBottom: "20px",
              color: "#1e293b",
            }}
          >
            Distribución de Recursos
          </h2>

          <div
            style={{
              width: "100%",
              height: 350,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "#f8fbff",
              borderRadius: "18px",
              border: "1px dashed #cbd5e1",
            }}
          >
            {data.donaciones.length > 0 ? (
              <ResponsiveContainer>
                <BarChart data={data.donaciones}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="#dbe4f0"
                  />

                  <XAxis dataKey="tipo" stroke="#64748b" />

                  <YAxis hide />

                  <Tooltip />

                  <Bar
                    dataKey="cantidad"
                    fill="#6366f1"
                    radius={[10, 10, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div
                style={{
                  textAlign: "center",
                  color: "#64748b",
                }}
              >
                <p style={{ fontSize: "2rem" }}>📊</p>

                <p
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "600",
                  }}
                >
                  No hay datos registrados todavía.
                </p>

                <p style={{ fontSize: "0.9rem" }}>
                  Las donaciones aparecerán aquí una vez se sincronicen.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;