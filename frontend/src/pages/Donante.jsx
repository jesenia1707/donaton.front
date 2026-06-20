
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Donante() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("donar");
  const [sent, setSent] = useState(false);
  const [donaciones, setDonaciones] = useState([]);

  const [tipo, setTipo] = useState("Alimentos");
  const [cantidad, setCantidad] = useState(1);
  const [ubicacion, setUbicacion] = useState("Sede Central");

  useEffect(() => {
    if (activeTab === "historial") {
      fetch("http://localhost:30082/api/donaciones")
        .then((res) => res.json())
        .then((data) => setDonaciones(data))
        .catch((err) =>
          console.error("Error cargando donaciones:", err)
        );
    }
  }, [activeTab]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const donationData = {
      tipo: tipo,
      cantidad: Number(cantidad),
      ubicacion: ubicacion,
      usuarioId: 1
    };

    try {
      const response = await fetch(
        "http://localhost:30080/api/donaciones",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(donationData),
        }
      );

      if (response.ok) {
        setSent(true);

        setTimeout(() => {
          setSent(false);
          setActiveTab("historial");
        }, 3000);
      } else {
        alert("Error en el servidor.");
      }
    } catch (error) {
      console.error(error);
      alert("No se pudo conectar con Donaciones.");
    }
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
          <h1 style={{ fontSize: "4rem", marginBottom: "10px" }}>
            💖
          </h1>
          <h2 style={{ color: "#1e293b" }}>
            ¡Registro Exitoso!
          </h2>
          <p style={{ color: "#64748b" }}>
            Tu aporte llegará a quienes más lo necesitan.
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
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "20px",
            paddingTop: "20px",
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
            }}
          >
            Cerrar Sesión
          </button>
        </div>

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
                activeTab === "donar"
                  ? "#6366f1"
                  : "transparent",
              color:
                activeTab === "donar"
                  ? "#fff"
                  : "#475569",
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
                activeTab === "historial"
                  ? "#6366f1"
                  : "transparent",
              color:
                activeTab === "historial"
                  ? "#fff"
                  : "#475569",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Mis Donaciones
          </button>
        </nav>

        {activeTab === "donar" && (
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
            }}
          >
            <select
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
            >
              <option value="Alimentos">
                Alimentos
              </option>
              <option value="Ropa">Ropa</option>
              <option value="Higiene">
                Higiene
              </option>
              <option value="Medicamentos">
                Medicamentos
              </option>
            </select>

            <input
              type="number"
              min="1"
              value={cantidad}
              onChange={(e) =>
                setCantidad(e.target.value)
              }
            />

            <select
              value={ubicacion}
              onChange={(e) =>
                setUbicacion(e.target.value)
              }
            >
              <option value="Sede Central">
                Sede Central
              </option>
              <option value="Sede Norte">
                Sede Norte
              </option>
              <option value="Sede Sur">
                Sede Sur
              </option>
            </select>

            <button type="submit">
              Confirmar y Agendar Entrega
            </button>
          </form>
        )}

        {activeTab === "historial" && (
          <div>
            <h2>Mis Donaciones</h2>

            {donaciones.map((d) => (
              <div key={d.id}>
                <strong>
                  {d.tipo} ({d.cantidad})
                </strong>

                <p>📍 {d.ubicacion}</p>

                <button
                  onClick={() =>
                    navigate(`/seguimiento/${d.id}`)
                  }
                >
                  Ver Ruta 🚚
                </button>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default Donante;
