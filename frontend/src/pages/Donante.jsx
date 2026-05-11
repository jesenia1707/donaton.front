import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Donante() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("donar");
  const [sent, setSent] = useState(false);
  const [donaciones, setDonaciones] = useState([]); // <--- NUEVO: Para guardar la lista

  // --- ESTADOS PARA LOS DATOS ---
  const [tipo, setTipo] = useState("Alimentos");
  const [cantidad, setCantidad] = useState(1);
  const [ubicacion, setUbicacion] = useState("Sede Central");

  // --- NUEVO: Cargar donaciones cuando el usuario entra al historial ---
  useEffect(() => {
    if (activeTab === "historial") {
      fetch('http://localhost:8080/api/donaciones') // Tu puerto de donaciones
        .then(res => res.json())
        .then(data => setDonaciones(data))
        .catch(err => console.error("Error cargando donaciones:", err));
    }
  }, [activeTab]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const donationData = {
      tipo: tipo,
      cantidad: Number(cantidad),
      ubicacion: ubicacion
    };

    try {
      // Cambié el puerto a 8081 que es donde suele estar tu Spring Boot
      const response = await fetch('http://localhost:8080/api/donaciones', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(donationData),
      });

      if (response.ok) {
        setSent(true);
        setTimeout(() => setSent(false), 3000); // Volver al portal después de 3 seg
        setActiveTab("historial"); // Mandarlo al historial para que vea su envío
      } else {
        alert("Error en el servidor. Revisa IntelliJ.");
      }
    } catch (error) {
      alert("No se pudo conectar. ¿Está encendido el Backend?");
    }
  };

  const handleLogout = () => {
    navigate("/");
  };

  if (sent) {
    return (
      <div className="dashboard-container" style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", background: "linear-gradient(135deg, #eef4ff 0%, #dbeafe 50%, #f8fbff 100%)" }}>
        <div style={{ background: "#ffffff", padding: "50px", borderRadius: "24px", border: "1px solid #dbe4f0", textAlign: "center", boxShadow: "0 10px 30px rgba(0,0,0,0.06)", maxWidth: "500px" }}>
          <h1 style={{ fontSize: "4rem", marginBottom: "10px" }}>💖</h1>
          <h2 style={{ color: "#1e293b" }}>¡Registro Exitoso!</h2>
          <p style={{ color: "#64748b" }}>Tu aporte llegará a quienes más lo necesitan.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-container" style={{ minHeight: "100vh", background: "linear-gradient(135deg, #eef4ff 0%, #dbeafe 50%, #f8fbff 100%)" }}>
      <main className="main-content" style={{ maxWidth: "650px", margin: "0 auto", paddingBottom: "40px" }}>
        
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "20px", paddingTop: "20px" }}>
          <button onClick={handleLogout} style={{ background: "#ffffff", color: "#ef4444", border: "1px solid #fecaca", padding: "10px 18px", borderRadius: "10px", cursor: "pointer", fontWeight: "bold" }}>
            Cerrar Sesión
          </button>
        </div>

        <nav style={{ display: "flex", gap: "10px", marginBottom: "35px", background: "#ffffff", padding: "10px", borderRadius: "16px", border: "1px solid #dbe4f0", boxShadow: "0 6px 18px rgba(0,0,0,0.05)" }}>
          <button onClick={() => setActiveTab("donar")} style={{ flex: 1, padding: "12px", borderRadius: "10px", border: "none", background: activeTab === "donar" ? "#6366f1" : "transparent", color: activeTab === "donar" ? "#fff" : "#475569", cursor: "pointer", fontWeight: "bold" }}>Donar</button>
          <button onClick={() => setActiveTab("historial")} style={{ flex: 1, padding: "12px", borderRadius: "10px", border: "none", background: activeTab === "historial" ? "#6366f1" : "transparent", color: activeTab === "historial" ? "#fff" : "#475569", cursor: "pointer", fontWeight: "bold" }}>Mis Donaciones</button>
        </nav>

        {activeTab === "donar" && (
          <>
            <header style={{ textAlign: "center", marginBottom: "35px" }}>
              <h1 style={{ color: "#1e293b", marginBottom: "10px" }}>Portal del Donante</h1>
              <p style={{ color: "#64748b" }}>Cada granito de arena cuenta</p>
            </header>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px", background: "#ffffff", padding: "35px", borderRadius: "24px", border: "1px solid #dbe4f0", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <label style={{ color: "#475569", fontWeight: "600" }}>Tipo de Recurso</label>
                <select value={tipo} onChange={(e) => setTipo(e.target.value)} style={{ padding: "14px", borderRadius: "12px", background: "#f8fbff", border: "1px solid #dbe4f0" }}>
                  <option value="Alimentos">Alimentos</option>
                  <option value="Ropa">Ropa</option>
                  <option value="Higiene">Higiene</option>
                  <option value="Medicamentos">Medicamentos</option>
                </select>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <label style={{ color: "#475569", fontWeight: "600" }}>Cantidad</label>
                <input type="number" min="1" value={cantidad} onChange={(e) => setCantidad(e.target.value)} style={{ padding: "14px", borderRadius: "12px", background: "#f8fbff", border: "1px solid #dbe4f0" }} required />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <label style={{ color: "#475569", fontWeight: "600" }}>Punto de Entrega</label>
                <select value={ubicacion} onChange={(e) => setUbicacion(e.target.value)} style={{ padding: "14px", borderRadius: "12px", background: "#f8fbff", border: "1px solid #dbe4f0" }}>
                  <option value="Sede Central">Sede Central</option>
                  <option value="Sede Norte">Sede Norte</option>
                  <option value="Sede Sur">Sede Sur</option>
                </select>
              </div>

              <button type="submit" style={{ background: "#6366f1", color: "#fff", border: "none", padding: "15px", borderRadius: "14px", cursor: "pointer", fontWeight: "bold" }}>
                Confirmar y Agendar Entrega
              </button>
            </form>
          </>
        )}

        {/* --- HISTORIAL MEJORADO CON BOTÓN DE SEGUIMIENTO --- */}
        {activeTab === "historial" && (
          <div style={{ background: "#ffffff", padding: "30px", borderRadius: "24px", border: "1px solid #dbe4f0", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
            <h2 style={{ color: "#1e293b", marginBottom: "20px" }}>Mis Registros</h2>
            
            {donaciones.length === 0 ? (
              <p style={{ color: "#64748b" }}>Aún no tienes donaciones registradas.</p>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                {donaciones.map((d) => (
                  <div key={d.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "15px", border: "1px solid #f1f5f9", borderRadius: "12px", background: "#f8fbff" }}>
                    <div style={{ textAlign: "left" }}>
                      <p style={{ fontWeight: "bold", color: "#1e293b", margin: 0 }}>{d.tipo} ({d.cantidad})</p>
                      <p style={{ fontSize: "0.8rem", color: "#64748b", margin: 0 }}>📍 {d.ubicacion}</p>
                    </div>
                    <button 
                      onClick={() => navigate(`/seguimiento/${d.id}`)}
                      style={{ background: "#6366f1", color: "#fff", border: "none", padding: "8px 15px", borderRadius: "8px", cursor: "pointer", fontSize: "0.9rem" }}
                    >
                      Ver Ruta 🚚
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

export default Donante;