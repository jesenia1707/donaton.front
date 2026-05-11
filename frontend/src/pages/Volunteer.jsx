import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Volunteer() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("rutas");

  const [volunteerStats] = useState({
    nombre: "Equipo Voluntario",
    totalEntregas: 0,
    rutas: [],
  });

  const getRango = (total) => {
    if (total >= 50)
      return {
        nombre: "ORO",
        color: "#fbbf24",
        icono: "🏆",
        titulo: "Capitán de Logística",
      };

    if (total >= 10)
      return {
        nombre: "PLATA",
        color: "#94a3b8",
        icono: "🥈",
        titulo: "Especialista de Ruta",
      };

    if (total >= 1)
      return {
        nombre: "BRONCE",
        color: "#cd7f32",
        icono: "🥉",
        titulo: "Colaborador Activo",
      };

    return {
      nombre: "NUEVO",
      color: "#6366f1",
      icono: "🌱",
      titulo: "Voluntario en Formación",
    };
  };

  const rango = getRango(volunteerStats.totalEntregas);

  return (
    <div
      className="dashboard-container"
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #eef4ff 0%, #dbeafe 50%, #f8fbff 100%)",
      }}
    >
      <main
        className="main-content"
        style={{
          maxWidth: "850px",
          margin: "0 auto",
          paddingBottom: "40px",
        }}
      >
        {/* BOTÓN */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "20px",
          }}
        >
          <button
            onClick={() => navigate("/")}
            style={{
              background: "#ffffff",
              color: "#ef4444",
              border: "1px solid #fecaca",
              padding: "10px 18px",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: "bold",
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
            }}
          >
            Cerrar Sesión
          </button>
        </div>

        {/* NAV */}
        <nav
          style={{
            display: "flex",
            gap: "10px",
            marginBottom: "30px",
            background: "#ffffff",
            padding: "10px",
            borderRadius: "18px",
            border: "1px solid #dbe4f0",
            boxShadow: "0 6px 18px rgba(0,0,0,0.05)",
          }}
        >
          <button
            onClick={() => setActiveTab("rutas")}
            style={{
              flex: 1,
              padding: "12px",
              borderRadius: "10px",
              border: "none",
              background:
                activeTab === "rutas" ? "#6366f1" : "transparent",
              color: activeTab === "rutas" ? "#fff" : "#475569",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Rutas Asignadas
          </button>

          <button
            onClick={() => setActiveTab("historial")}
            style={{
              flex: 1,
              padding: "12px",
              borderRadius: "10px",
              border: "none",
              background:
                activeTab === "historial" ? "#6366f1" : "transparent",
              color: activeTab === "historial" ? "#fff" : "#475569",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Mis Entregas
          </button>

          <button
            onClick={() => setActiveTab("rango")}
            style={{
              flex: 1,
              padding: "12px",
              borderRadius: "10px",
              border: "none",
              background:
                activeTab === "rango" ? "#6366f1" : "transparent",
              color: activeTab === "rango" ? "#fff" : "#475569",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Mi Nivel
          </button>
        </nav>

        {/* RUTAS */}
        {activeTab === "rutas" && (
          <div
            style={{
              background: "#ffffff",
              padding: "35px",
              borderRadius: "24px",
              border: "1px solid #dbe4f0",
              boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
            }}
          >
            <h2
              style={{
                marginBottom: "20px",
                color: "#1e293b",
              }}
            >
              Rutas del Día
            </h2>

            <div
              style={{
                padding: "45px",
                textAlign: "center",
                border: "2px dashed #cbd5e1",
                borderRadius: "18px",
                background: "#f8fbff",
              }}
            >
              <p style={{ fontSize: "3rem" }}>📍</p>

              <p
                style={{
                  color: "#64748b",
                  fontSize: "1.1rem",
                }}
              >
                No tienes rutas de recolección asignadas para hoy.
              </p>
            </div>
          </div>
        )}

        {/* HISTORIAL */}
        {activeTab === "historial" && (
          <div
            style={{
              background: "#ffffff",
              padding: "40px",
              borderRadius: "24px",
              border: "1px solid #dbe4f0",
              textAlign: "center",
              boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
            }}
          >
            <h2 style={{ color: "#1e293b" }}>
              Historial de Impacto
            </h2>

            <p
              style={{
                color: "#64748b",
                lineHeight: "1.7",
              }}
            >
              Aquí aparecerán todas las donaciones que hayas
              transportado con éxito.
            </p>
          </div>
        )}

        {/* RANGO */}
        {activeTab === "rango" && (
          <div
            style={{
              background: "#ffffff",
              padding: "45px",
              borderRadius: "24px",
              border: "1px solid #dbe4f0",
              textAlign: "center",
              boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
            }}
          >
            <div
              style={{
                fontSize: "5rem",
                marginBottom: "15px",
              }}
            >
              {rango.icono}
            </div>

            <h2
              style={{
                color: rango.color,
                letterSpacing: "2px",
                marginBottom: "10px",
              }}
            >
              VOLUNTARIO {rango.nombre}
            </h2>

            <p
              style={{
                color: "#64748b",
                fontSize: "1.1rem",
              }}
            >
              {rango.titulo}
            </p>

            <div
              style={{
                marginTop: "35px",
                padding: "25px",
                background: "#f8fbff",
                borderRadius: "18px",
                border: "1px solid #dbe4f0",
              }}
            >
              <p
                style={{
                  margin: 0,
                  color: "#1e293b",
                  fontSize: "1.1rem",
                }}
              >
                Entregas realizadas:{" "}
                <strong>{volunteerStats.totalEntregas}</strong>
              </p>

              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#64748b",
                  marginTop: "12px",
                  lineHeight: "1.6",
                }}
              >
                {volunteerStats.totalEntregas === 0
                  ? "Realiza tu primera entrega para obtener el rango BRONCE"
                  : "¡Sigue así para alcanzar el siguiente nivel!"}
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default Volunteer;