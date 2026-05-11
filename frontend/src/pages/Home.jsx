import React, { useState } from "react"; // 1. Añadimos useState
import { useNavigate } from "react-router-dom";
import MapaPage from "./MapaPage"; 
import "../App.css";

function Home() {
  const navigate = useNavigate();
  // 2. Estado para controlar si el chat está abierto o cerrado
  const [chatAbierto, setChatAbierto] = useState(false);

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
            style={{ width: "45px", borderRadius: "10px" }}
          />
          <h2 style={{ margin: 0, fontSize: "1.8rem", fontWeight: "bold", color: "#4f46e5" }}>
            Donatón
          </h2>
        </div>

        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <a href="#nosotros" style={{ color: "#475569", textDecoration: "none", fontWeight: "600" }}>Nosotros</a>
          <a href="#mapa-seccion" style={{ color: "#475569", textDecoration: "none", fontWeight: "600" }}>Ver Mapa</a>
          <button
            onClick={() => navigate("/register")}
            style={{ background: "transparent", color: "#6366f1", border: "2px solid #6366f1", padding: "10px 20px", borderRadius: "12px", fontWeight: "bold", cursor: "pointer" }}
          >
            Crear Cuenta
          </button>
          <button
            onClick={() => navigate("/login")}
            style={{ background: "#6366f1", color: "#fff", border: "none", padding: "12px 24px", borderRadius: "12px", fontWeight: "bold", cursor: "pointer", boxShadow: "0 4px 12px rgba(99,102,241,0.3)" }}
          >
            Iniciar Sesión
          </button>
        </div>
      </nav>

      {/* HERO */}
      <header style={{ padding: "120px 10%", textAlign: "center", background: "linear-gradient(135deg, #eef4ff 0%, #dbeafe 50%, #e0e7ff 100%)" }}>
        <h1 style={{ fontSize: "4rem", fontWeight: "800", marginBottom: "24px", lineHeight: "1.1", color: "#0f172a" }}>
          Conectando <span style={{ color: "#6366f1" }}>Corazones</span>, <br /> Entregando Esperanza
        </h1>
        <p style={{ color: "#475569", fontSize: "1.3rem", maxWidth: "800px", margin: "0 auto", lineHeight: "1.7" }}>
          Desde 2024, Donatón ha facilitado la entrega de recursos vitales a comunidades en riesgo.
        </p>
        <div style={{ marginTop: "40px" }}>
          <button onClick={() => navigate("/register")} style={{ padding: "15px 35px", borderRadius: "50px", border: "none", background: "#6366f1", color: "white", fontWeight: "bold", cursor: "pointer" }}>
            Quiero Ayudar Hoy
          </button>
        </div>
      </header>

      {/* NOSOTROS */}
      <section id="nosotros" style={{ padding: "100px 10%", display: "flex", flexWrap: "wrap", gap: "60px", alignItems: "center", background: "#f8fbff" }}>
        <div style={{ flex: "1", minWidth: "300px" }}>
          <h2 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>¿Quiénes Somos?</h2>
          <p style={{ color: "#475569", fontSize: "1.1rem", lineHeight: "1.9" }}>
            Somos una plataforma logística sin fines de lucro. Nuestra misión es asegurar que cada donación llegue a su destino en tiempo récord.
          </p>
        </div>
      </section>

      {/* SECCIÓN DEL MAPA */}
      <section id="mapa-seccion" style={{ padding: "80px 10%", background: "#fff", textAlign: "center" }}>
        <h2 style={{ fontSize: "2.5rem", color: "#0f172a" }}>Centros de Acopio Cercanos</h2>
        <div style={{ borderRadius: "24px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.1)", marginTop: "30px" }}>
          <MapaPage />
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#111827", padding: "70px 10% 30px", color: "white" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "50px" }}>
          <div>
            <h3 style={{ color: "#6366f1" }}>Donatón</h3>
            <p style={{ color: "#94a3b8" }}>Transformando la manera en que el mundo ayuda.</p>
          </div>

          <div>
            <h4 style={{ color: "white" }}>Soporte</h4>
            <p style={{ color: "#94a3b8", marginBottom: "20px" }}>¿Tienes dudas?</p>
            {/* BOTÓN DEL CHAT: Ahora activa el estado */}
            <button
              onClick={() => setChatAbierto(!chatAbierto)}
              style={{ background: "#6366f1", border: "none", color: "#fff", padding: "12px 20px", borderRadius: "10px", cursor: "pointer", width: "100%", fontWeight: "bold" }}
            >
              {chatAbierto ? "❌ Cerrar Chat" : "💬 Chat de Ayuda"}
            </button>
          </div>
        </div>
      </footer>

      {/* VENTANA FLOTANTE DEL CHAT */}
      {chatAbierto && (
        <div style={{
          position: "fixed", bottom: "100px", right: "30px", width: "320px", height: "400px",
          background: "white", borderRadius: "20px", boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
          zIndex: 3000, display: "flex", flexDirection: "column", overflow: "hidden", border: "1px solid #e2e8f0"
        }}>
          <div style={{ background: "#6366f1", color: "white", padding: "20px", fontWeight: "bold", textAlign: "center" }}>
            Soporte Donatón 💬
          </div>
          <div style={{ flex: 1, padding: "20px", color: "#475569", overflowY: "auto", background: "#f8fafc" }}>
            <p style={{ background: "#eef2ff", padding: "10px", borderRadius: "10px", marginBottom: "10px" }}>
              ¡Hola! 👋 Soy el asistente de Donatón. ¿En qué podemos ayudarte hoy?
            </p>
          </div>
          <div style={{ padding: "15px", borderTop: "1px solid #eee", display: "flex", gap: "10px" }}>
            <input type="text" placeholder="Escribe tu duda..." style={{ flex: 1, padding: "10px", borderRadius: "8px", border: "1px solid #ddd" }} />
            <button style={{ background: "#6366f1", color: "white", border: "none", padding: "10px", borderRadius: "8px", cursor: "pointer" }}>➤</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;