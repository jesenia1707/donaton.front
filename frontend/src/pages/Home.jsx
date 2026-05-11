import React from "react";
import { useNavigate } from "react-router-dom";
import MapaPage from "./MapaPage"; // Importamos el componente del mapa
import "../App.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div
      className="home-wrapper"
      style={{
        background: "#f4f7ff",
        color: "#1e293b",
        minHeight: "100vh",
        fontFamily: "sans-serif",
        overflowX: "hidden",
      }}
    >
      {/* NAVBAR */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "1.2rem 10%",
          background: "rgba(255,255,255,0.9)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid #dbe4f0",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <img
            src="/Donaton.png"
            alt="Logo"
            style={{
              width: "45px",
              borderRadius: "10px",
            }}
          />
          <h2
            style={{
              margin: 0,
              fontSize: "1.8rem",
              fontWeight: "bold",
              color: "#4f46e5",
            }}
          >
            Donatón
          </h2>
        </div>

        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <a
            href="#nosotros"
            style={{
              color: "#475569",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            Nosotros
          </a>
          {/* Botón para navegar al mapa directamente */}
          <a
            href="#mapa-seccion"
            style={{
              color: "#475569",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            Ver Mapa
          </a>
          <button
            onClick={() => navigate("/register")}
            style={{
              background: "transparent",
              color: "#6366f1",
              border: "2px solid #6366f1",
              padding: "10px 20px",
              borderRadius: "12px",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            Crear Cuenta
          </button>
          <button
            onClick={() => navigate("/login")}
            style={{
              background: "#6366f1",
              color: "#fff",
              border: "none",
              padding: "12px 24px",
              borderRadius: "12px",
              fontWeight: "bold",
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(99,102,241,0.3)",
              transition: "all 0.3s ease",
            }}
          >
            Iniciar Sesión
          </button>
        </div>
      </nav>

      {/* HERO */}
      <header
        style={{
          padding: "120px 10%",
          textAlign: "center",
          background: "linear-gradient(135deg, #eef4ff 0%, #dbeafe 50%, #e0e7ff 100%)",
        }}
      >
        <h1
          style={{
            fontSize: "4rem",
            fontWeight: "800",
            marginBottom: "24px",
            lineHeight: "1.1",
            color: "#0f172a",
          }}
        >
          Conectando <span style={{ color: "#6366f1" }}>Corazones</span>,
          <br />
          Entregando Esperanza
        </h1>
        <p
          style={{
            color: "#475569",
            fontSize: "1.3rem",
            maxWidth: "800px",
            margin: "0 auto",
            lineHeight: "1.7",
          }}
        >
          Desde 2024, Donatón ha facilitado la entrega de recursos vitales a
          comunidades en riesgo, uniendo a donantes generosos con voluntarios
          imparables.
        </p>
        <div style={{ marginTop: "40px", display: "flex", gap: "20px", justifyContent: "center" }}>
          <button 
            onClick={() => navigate("/register")}
            style={{ 
              padding: "15px 35px", 
              borderRadius: "50px", 
              border: "none", 
              background: "#6366f1", 
              color: "white", 
              fontWeight: "bold", 
              fontSize: "1.1rem", 
              cursor: "pointer",
              boxShadow: "0 10px 20px rgba(99,102,241,0.2)"
            }}
          >
            Quiero Ayudar Hoy
          </button>
        </div>
      </header>

      {/* NOSOTROS */}
      <section
        id="nosotros"
        style={{
          padding: "100px 10%",
          display: "flex",
          flexWrap: "wrap",
          gap: "60px",
          alignItems: "center",
          justifyContent: "center",
          background: "#f8fbff",
        }}
      >
        <div style={{ flex: "1", minWidth: "300px" }}>
          <h2 style={{ fontSize: "2.5rem", marginBottom: "20px", color: "#0f172a" }}>
            ¿Quiénes Somos?
          </h2>
          <div
            style={{
              width: "70px",
              height: "4px",
              background: "#6366f1",
              marginBottom: "30px",
              borderRadius: "10px",
            }}
          ></div>
          <p style={{ color: "#475569", fontSize: "1.1rem", lineHeight: "1.9" }}>
            Somos una plataforma logística sin fines de lucro nacida de la
            necesidad de transparentar y agilizar las donaciones. Nuestra misión
            es asegurar que cada alimento, prenda o medicina llegue a su destino
            en tiempo récord.
          </p>
        </div>
        <div
          style={{
            flex: "1",
            minWidth: "300px",
            padding: "50px",
            textAlign: "center",
            background: "#ffffff",
            borderRadius: "24px",
            border: "1px solid #dbe4f0",
            boxShadow: "0 8px 25px rgba(0,0,0,0.06)",
          }}
        >
          <img src="/Donaton.png" alt="Logo" style={{ width: "180px", marginBottom: "20px" }} />
          <h3 style={{ color: "#4f46e5", fontSize: "1.5rem" }}>Logística Solidaria</h3>
        </div>
      </section>

      {/* SECCIÓN DEL MAPA AGREGADA */}
      <section 
        id="mapa-seccion" 
        style={{ 
          padding: "80px 10%", 
          background: "#fff",
          textAlign: "center" 
        }}
      >
        <h2 style={{ fontSize: "2.5rem", color: "#0f172a", marginBottom: "10px" }}>
          Centros de Acopio Cercanos
        </h2>
        <p style={{ color: "#475569", marginBottom: "40px", fontSize: "1.1rem" }}>
          Encuentra el punto más cercano para entregar tu ayuda.
        </p>
        <div style={{ 
          borderRadius: "24px", 
          overflow: "hidden", 
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          border: "1px solid #e2e8f0"
        }}>
          {/* Insertamos el componente que ya creamos */}
          <MapaPage />
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          background: "#111827",
          padding: "70px 10% 30px",
          color: "white",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "50px",
          }}
        >
          <div>
            <h3 style={{ color: "#6366f1" }}>Donatón</h3>
            <p style={{ color: "#94a3b8", lineHeight: "1.6" }}>
              Transformando la manera en que el mundo ayuda.
            </p>
          </div>

          <div style={{ textAlign: "center" }}>
            <h4 style={{ color: "white", marginBottom: "20px" }}>Síguenos</h4>
            <div style={{ display: 'flex', gap: '25px', justifyContent: 'center', alignItems: 'center' }}>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <img 
                  src="https://cdn.simpleicons.org/instagram/white" 
                  alt="Instagram" 
                  style={{ width: '28px', height: '28px', transition: '0.3s', cursor: 'pointer' }} 
                />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <img 
                  src="https://cdn.simpleicons.org/x/white" 
                  alt="Twitter" 
                  style={{ width: '28px', height: '28px', transition: '0.3s', cursor: 'pointer' }} 
                />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <img 
                  src="https://cdn.simpleicons.org/facebook/white" 
                  alt="Facebook" 
                  style={{ width: '28px', height: '28px', transition: '0.3s', cursor: 'pointer' }} 
                />
              </a>
            </div>
          </div>

          <div>
            <h4 style={{ color: "white" }}>Soporte</h4>
            <button
              style={{
                background: "#6366f1",
                border: "none",
                color: "#fff",
                padding: "12px 20px",
                borderRadius: "10px",
                cursor: "pointer",
                width: "100%",
                fontWeight: "bold",
              }}
            >
              💬 Chat de Ayuda
            </button>
          </div>
        </div>

        <div
          style={{
            textAlign: "center",
            marginTop: "50px",
            paddingTop: "20px",
            borderTop: "1px solid #1f2937",
            color: "#6b7280",
            fontSize: "0.9rem",
          }}
        >
          © 2026 Donatón - Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}

export default Home;