import React from "react";
import { useNavigate } from "react-router-dom";
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

        <div
          style={{
            display: "flex",
            gap: "30px",
            alignItems: "center",
          }}
        >
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
          background:
            "linear-gradient(135deg, #eef4ff 0%, #dbeafe 50%, #e0e7ff 100%)",
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
          Conectando{" "}
          <span style={{ color: "#6366f1" }}>Corazones</span>,
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
          <h2
            style={{
              fontSize: "2.5rem",
              marginBottom: "20px",
              color: "#0f172a",
            }}
          >
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

          <p
            style={{
              color: "#475569",
              fontSize: "1.1rem",
              lineHeight: "1.9",
            }}
          >
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
          <img
            src="/Donaton.png"
            alt="Logo"
            style={{
              width: "180px",
              marginBottom: "20px",
            }}
          />

          <h3
            style={{
              color: "#4f46e5",
              fontSize: "1.5rem",
            }}
          >
            Logística Solidaria
          </h3>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          background: "#ffffff",
          padding: "70px 10% 30px",
          borderTop: "1px solid #dbe4f0",
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

            <p
              style={{
                color: "#64748b",
                lineHeight: "1.6",
              }}
            >
              Transformando la manera en que el mundo ayuda.
            </p>
          </div>

          <div style={{ textAlign: "center" }}>
            <h4 style={{ color: "#0f172a" }}>Síguenos</h4>

            <div
              style={{
                display: "flex",
                gap: "20px",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <a href="https://instagram.com">📸</a>
              <a href="https://twitter.com">🐦</a>
              <a href="https://facebook.com">📘</a>
            </div>
          </div>

          <div>
            <h4 style={{ color: "#0f172a" }}>Soporte</h4>

            <p
              style={{
                color: "#64748b",
                marginBottom: "20px",
              }}
            >
              ¿Tienes dudas sobre cómo donar?
            </p>

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
            borderTop: "1px solid #e2e8f0",
            color: "#94a3b8",
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