import React, { useState } from "react"; 
import { useNavigate } from "react-router-dom";
import MapaPage from "./MapaPage"; 
import "../App.css";

function Home() {
  const navigate = useNavigate();
  const [chatAbierto, setChatAbierto] = useState(false);
  
  // --- LÓGICA DEL CHAT ---
  const [mensaje, setMensaje] = useState(""); 
  const [historial, setHistorial] = useState([
    { texto: "¡Hola! 👋 Soy el asistente de Donatón. ¿En qué podemos ayudarte?", autor: "bot" }
  ]);

  const enviarMensaje = () => {
    if (mensaje.trim() === "") return;
    const nuevoHistorial = [...historial, { texto: mensaje, autor: "user" }];
    setHistorial(nuevoHistorial);
    setMensaje(""); 

    setTimeout(() => {
      setHistorial(prev => [...prev, { 
        texto: "Gracias por tu mensaje. Un voluntario te responderá pronto. Si es urgente, búscanos en WhatsApp.", 
        autor: "bot" 
      }]);
    }, 1000);
  };

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
          <img src="/Donaton.png" alt="Logo" style={{ width: "45px", borderRadius: "10px" }} />
          <h2 style={{ margin: 0, fontSize: "1.8rem", fontWeight: "bold", color: "#4f46e5" }}>Donatón</h2>
        </div>
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <a href="#nosotros" style={{ color: "#475569", textDecoration: "none", fontWeight: "600" }}>Nosotros</a>
          <a href="#mapa-seccion" style={{ color: "#475569", textDecoration: "none", fontWeight: "600" }}>Ver Mapa</a>
          <button onClick={() => navigate("/register")} style={{ background: "transparent", color: "#6366f1", border: "2px solid #6366f1", padding: "10px 20px", borderRadius: "12px", fontWeight: "bold", cursor: "pointer" }}>Crear Cuenta</button>
          <button onClick={() => navigate("/login")} style={{ background: "#6366f1", color: "#fff", border: "none", padding: "12px 24px", borderRadius: "12px", fontWeight: "bold", cursor: "pointer" }}>Iniciar Sesión</button>
        </div>
      </nav>

      {/* HERO (INICIO) */}
      <header 
        style={{ 
          padding: "160px 10% 120px", 
          textAlign: "center", 
          background: "linear-gradient(135deg, #eef4ff 0%, #dbeafe 50%, #e0e7ff 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "25px" 
        }}
      >
        <h1 style={{ fontSize: "4.2rem", fontWeight: "800", color: "#0f172a", lineHeight: "1.1", margin: 0 }}>
          Conectando <span style={{ color: "#6366f1" }}>Corazones</span>, <br /> Entregando Esperanza
        </h1>
        <p style={{ color: "#475569", fontSize: "1.3rem", maxWidth: "750px", lineHeight: "1.6", margin: "10px 0" }}>
          Desde 2024, Donatón ha facilitado la entrega de recursos vitales a comunidades en riesgo. Unimos a quienes quieren dar con quienes más lo necesitan.
        </p>
        <button 
          onClick={() => navigate("/register")} 
          style={{ 
            marginTop: "20px",
            padding: "18px 45px", 
            borderRadius: "50px", 
            border: "none", 
            background: "#6366f1", 
            color: "white", 
            fontWeight: "bold", 
            fontSize: "1.1rem",
            cursor: "pointer",
            boxShadow: "0 10px 20px rgba(99,102,241,0.3)"
          }}
        >
          Quiero Ayudar Hoy
        </button>
      </header>

      {/* NOSOTROS */}
      <section id="nosotros" style={{ padding: "100px 10%", background: "#f8fbff" }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "20px", color: "#0f172a" }}>¿Quiénes Somos?</h2>
        <p style={{ color: "#475569", fontSize: "1.2rem", lineHeight: "1.8", maxWidth: "850px" }}>
          Somos una plataforma logística sin fines de lucro. Nuestra misión es asegurar que cada donación llegue a su destino en tiempo récord.
        </p>
      </section>

      {/* SECCIÓN DEL MAPA (TÍTULO BORRADO) */}
      <section id="mapa-seccion" style={{ padding: "40px 10%", background: "#fff", textAlign: "center" }}>
        <div style={{ borderRadius: "24px", overflow: "hidden", boxShadow: "0 10px 40px rgba(0,0,0,0.1)" }}>
          <MapaPage />
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#111827", padding: "70px 10% 40px", color: "white" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "60px" }}>
          <div>
            <h3 style={{ color: "#6366f1", fontSize: "1.5rem" }}>Donatón</h3>
            <p style={{ color: "#94a3b8" }}>Transformando la manera en que el mundo ayuda.</p>
          </div>

          <div style={{ textAlign: "center" }}>
            <h4 style={{ marginBottom: "25px", fontSize: "1.2rem" }}>Búscanos en redes sociales</h4>
            <div style={{ display: 'flex', gap: '25px', justifyContent: 'center' }}>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <img src="https://cdn.simpleicons.org/instagram/white" alt="Instagram" style={{ width: '32px' }} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <img src="https://cdn.simpleicons.org/facebook/white" alt="Facebook" style={{ width: '32px' }} />
              </a>
              <a href="https://wa.me/56912345678" target="_blank" rel="noreferrer">
                <img src="https://cdn.simpleicons.org/whatsapp/white" alt="WhatsApp" style={{ width: '32px' }} />
              </a>
            </div>
          </div>

          <div>
            <h4 style={{ marginBottom: "20px", fontSize: "1.2rem" }}>¿Necesitas ayuda?</h4>
            <button
              onClick={() => setChatAbierto(!chatAbierto)}
              style={{ background: "#6366f1", border: "none", color: "#fff", padding: "14px 25px", borderRadius: "12px", cursor: "pointer", width: "100%", fontWeight: "bold" }}
            >
              {chatAbierto ? "❌ Cerrar Chat" : "💬 Chat de Ayuda"}
            </button>
          </div>
        </div>
      </footer>

      {/* VENTANA DEL CHAT */}
      {chatAbierto && (
        <div style={{
          position: "fixed", bottom: "100px", right: "30px", width: "340px", height: "480px",
          background: "white", borderRadius: "20px", boxShadow: "0 15px 50px rgba(0,0,0,0.4)",
          zIndex: 3000, display: "flex", flexDirection: "column", overflow: "hidden", border: "1px solid #e2e8f0"
        }}>
          <div style={{ background: "#6366f1", color: "white", padding: "20px", fontWeight: "bold", textAlign: "center" }}>
            Soporte Donatón 💬
          </div>
          <div style={{ flex: 1, padding: "15px", overflowY: "auto", background: "#f8fafc", display: "flex", flexDirection: "column", gap: "10px" }}>
            {historial.map((msg, index) => (
              <div key={index} style={{
                alignSelf: msg.autor === "user" ? "flex-end" : "flex-start",
                background: msg.autor === "user" ? "#6366f1" : "#eef2ff",
                color: msg.autor === "user" ? "white" : "#475569",
                padding: "12px 16px", borderRadius: "15px", fontSize: "0.95rem", maxWidth: "85%"
              }}>
                {msg.texto}
              </div>
            ))}
          </div>
          <div style={{ padding: "15px", borderTop: "1px solid #eee", display: "flex", gap: "10px", background: "white" }}>
            <input 
              type="text" 
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && enviarMensaje()}
              placeholder="Escribe un mensaje..." 
              style={{ flex: 1, padding: "12px", borderRadius: "10px", border: "1px solid #d1d5db", outline: "none" }} 
            />
            <button onClick={enviarMensaje} style={{ background: "#6366f1", color: "white", border: "none", padding: "10px 18px", borderRadius: "10px", cursor: "pointer" }}>➤</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;