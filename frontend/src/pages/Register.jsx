import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  // Estados para capturar los datos del formulario
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    password: "",
    rol: "DONANTE" // Valor por defecto
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // IMPORTANTE: Verifica si tu Java de Usuarios usa el puerto 8081
      const response = await fetch("http://localhost:8081/api/usuarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("¡Registro exitoso! Ahora puedes iniciar sesión.");
        navigate("/"); // Te manda al login después de registrarte
      } else {
        alert("Error al registrar: Revisa que el puerto 8081 de Java esté encendido.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("No se pudo conectar con el servidor de Usuarios.");
    }
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "linear-gradient(135deg, #eef4ff 0%, #dbeafe 50%, #f8fbff 100%)" }}>
      <div style={{ background: "#ffffff", padding: "40px", borderRadius: "24px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)", width: "100%", maxWidth: "400px", border: "1px solid #dbe4f0" }}>
        <h2 style={{ textAlign: "center", color: "#1e293b", marginBottom: "10px" }}>Crear Cuenta</h2>
        <p style={{ textAlign: "center", color: "#64748b", marginBottom: "30px" }}>Únete a la red de apoyo</p>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <label style={{ fontWeight: "600", color: "#475569" }}>Nombre Completo</label>
            <input 
              type="text" 
              required 
              style={{ padding: "12px", borderRadius: "10px", border: "1px solid #dbe4f0", background: "#f8fbff" }}
              onChange={(e) => setFormData({...formData, nombre: e.target.value})}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <label style={{ fontWeight: "600", color: "#475569" }}>Correo Electrónico</label>
            <input 
              type="email" 
              required 
              style={{ padding: "12px", borderRadius: "10px", border: "1px solid #dbe4f0", background: "#f8fbff" }}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <label style={{ fontWeight: "600", color: "#475569" }}>Contraseña</label>
            <input 
              type="password" 
              required 
              style={{ padding: "12px", borderRadius: "10px", border: "1px solid #dbe4f0", background: "#f8fbff" }}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <label style={{ fontWeight: "600", color: "#475569" }}>Tipo de Usuario</label>
            <select 
              style={{ padding: "12px", borderRadius: "10px", border: "1px solid #dbe4f0", background: "#f8fbff" }}
              onChange={(e) => setFormData({...formData, rol: e.target.value})}
            >
              <option value="DONANTE">Donante</option>
              <option value="VOLUNTARIO">Voluntario</option>
              <option value="ADMIN">Administrador</option>
            </select>
          </div>

          <button type="submit" style={{ background: "#6366f1", color: "#fff", border: "none", padding: "14px", borderRadius: "12px", cursor: "pointer", fontWeight: "bold", marginTop: "10px", boxShadow: "0 8px 20px rgba(99,102,241,0.2)" }}>
            Registrarse
          </button>
          
          <button type="button" onClick={() => navigate("/")} style={{ background: "none", border: "none", color: "#6366f1", cursor: "pointer", fontSize: "0.9rem" }}>
            ¿Ya tienes cuenta? Inicia sesión
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;