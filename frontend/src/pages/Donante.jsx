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

    setTimeout(() => navigate("/"), 4000);
  };

  const handleLogout = () => {
    navigate("/");
  };

  if (sent) {
    return (
      <div
        className="dashboard-container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          background:
            "linear-gradient(135deg, #eef4ff 0%, #dbeafe 50%, #f8fbff 100%)",
        }}
      >
        <div
          style={{
            background: "#ffffff",
            padding: "50px",
            borderRadius: "24px",
            border: "1px solid #dbe4f0",
            textAlign: "center",
            boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
            maxWidth: "500px",
          }}
        >
          <h1 style={{ fontSize: "4rem", marginBottom: "10px" }}>💖</h1>

          <h2 style={{ color: "#1e293b" }}>¡Registro Exitoso!</h2>

          <p style={{ color: "#64748b", lineHeight: "1.7" }}>
            Gracias por tu generosidad. Tu aporte llegará a quienes más lo
            necesitan.
          </p>

          <p
            style={{
              color: "#6366f1",
              marginTop: "20px",
              fontWeight: "bold",
            }}
          >
            Redirigiendo al inicio...
          </p>
        </div>
      </div>
    );
  }

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
          maxWidth: "650px",
          margin: "0 auto",
          paddingBottom: "40px",
        }}
      >
        {/* BOTÓN CERRAR SESIÓN */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "20px",
          }}
        >
          <button
            onClick={handleLogout}
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
            marginBottom: "35px",
            background: "#ffffff",
            padding: "10px",
            borderRadius: "16px",
            border: "1px solid #dbe4f0",
            boxShadow: "0 6px 18px rgba(0,0,0,0.05)",
          }}
        >
          <button
            onClick={() => setActiveTab("donar")}
            style={{
              flex: 1,
              padding: "12px",
              borderRadius: "10px",
              border: "none",
              background:
                activeTab === "donar" ? "#6366f1" : "transparent",
              color: activeTab === "donar" ? "#fff" : "#475569",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Donar
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
            Donaciones
          </button>

          <button
            onClick={() => setActiveTab("nivel")}
            style={{
              flex: 1,
              padding: "12px",
              borderRadius: "10px",
              border: "none",
              background:
                activeTab === "nivel" ? "#6366f1" : "transparent",
              color: activeTab === "nivel" ? "#fff" : "#475569",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Nivel
          </button>
        </nav>

        {/* FORMULARIO */}
        {activeTab === "donar" && (
          <>
            <header
              style={{
                textAlign: "center",
                marginBottom: "35px",
              }}
            >
              <img
                src="/Donaton.png"
                alt="Logo"
                style={{
                  width: "75px",
                  marginBottom: "15px",
                }}
              />

              <h1
                style={{
                  color: "#1e293b",
                  marginBottom: "10px",
                }}
              >
                Portal del Donante
              </h1>

              <p style={{ color: "#64748b" }}>
                Cada granito de arena cuenta
              </p>
            </header>

            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                background: "#ffffff",
                padding: "35px",
                borderRadius: "24px",
                border: "1px solid #dbe4f0",
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
              }}
            >
              {/* INPUT */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <label style={{ color: "#475569", fontWeight: "600" }}>
                  Nombre Completo
                </label>

                <input
                  type="text"
                  placeholder="Ej: María García"
                  required
                  style={{
                    padding: "14px",
                    borderRadius: "12px",
                    background: "#f8fbff",
                    border: "1px solid #dbe4f0",
                    color: "#1e293b",
                    outline: "none",
                  }}
                />
              </div>

              {/* SELECT */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <label style={{ color: "#475569", fontWeight: "600" }}>
                  Tipo de Recurso
                </label>

                <select
                  style={{
                    padding: "14px",
                    borderRadius: "12px",
                    background: "#f8fbff",
                    border: "1px solid #dbe4f0",
                    color: "#1e293b",
                  }}
                >
                  <option>Alimentos</option>
                  <option>Ropa</option>
                  <option>Higiene</option>
                  <option>Medicamentos</option>
                </select>
              </div>

              {/* ENTREGA */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <label style={{ color: "#475569", fontWeight: "600" }}>
                  Punto de Entrega
                </label>

                <select
                  style={{
                    padding: "14px",
                    borderRadius: "12px",
                    background: "#f8fbff",
                    border: "1px solid #dbe4f0",
                    color: "#1e293b",
                  }}
                >
                  <option>Sede Central</option>
                  <option>Punto Norte</option>
                  <option>Punto Sur</option>
                </select>
              </div>

              {/* DESTINO */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <label style={{ color: "#475569", fontWeight: "600" }}>
                  ¿A quién va dirigido?
                </label>

                <select
                  style={{
                    padding: "14px",
                    borderRadius: "12px",
                    background: "#f8fbff",
                    border: "1px solid #dbe4f0",
                    color: "#1e293b",
                  }}
                >
                  <option>Comedores Comunitarios</option>
                  <option>Fundación Infantil</option>
                  <option>Refugio de Ancianos</option>
                  <option>Ayuda General</option>
                </select>
              </div>

              {/* BOTÓN */}
              <button
                type="submit"
                style={{
                  background: "#6366f1",
                  color: "#fff",
                  border: "none",
                  padding: "15px",
                  borderRadius: "14px",
                  cursor: "pointer",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  marginTop: "10px",
                  boxShadow: "0 8px 20px rgba(99,102,241,0.25)",
                }}
              >
                Confirmar y Agendar Entrega
              </button>
            </form>
          </>
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
              Donaciones Anteriores
            </h2>

            <p style={{ color: "#64748b" }}>
              Aún no tienes donaciones registradas.
            </p>
          </div>
        )}

        {/* NIVEL */}
        {activeTab === "nivel" && (
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
            <h2 style={{ color: "#1e293b" }}>Categorización</h2>

            <p style={{ color: "#64748b" }}>
              Próximamente podrás ver tu nivel de impacto.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

export default Donate;