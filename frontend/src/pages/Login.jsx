import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Login = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const navigate = useNavigate();

const handleLogin = async (e) => {
e.preventDefault();


try {
  const response = await fetch(
    "http://localhost:32641/api/usuarios/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }
  );

  if (!response.ok) {
    alert("Correo o contraseña incorrectos");
    return;
  }

  const usuario = await response.json();

  if (!usuario) {
    alert("Correo o contraseña incorrectos");
    return;
  }

  localStorage.setItem("usuarioId", usuario.id);
  localStorage.setItem("rol", usuario.rol);
  localStorage.setItem("nombre", usuario.nombre);

  if (usuario.rol === "ADMIN") {
    navigate("/dashboard");
  } else if (usuario.rol === "VOLUNTARIO") {
    navigate("/voluntario");
  } else {
    navigate("/donante");
  }
} catch (error) {
  console.error(error);
  alert("No se pudo conectar con el servidor");
}


};

return (
<div
className="dashboard-container"
style={{
justifyContent: "center",
alignItems: "center",
display: "flex",
}}
>
<div
className="stat-card"
style={{
width: "100%",
maxWidth: "400px",
padding: "40px",
}}
>
<header
style={{
textAlign: "center",
marginBottom: "30px",
}}
>
<img
src="/Donaton.png"
alt="Logo"
style={{
width: "80px",
marginBottom: "20px",
}}
/>

```
      <h2
        style={{
          fontSize: "2rem",
          margin: 0,
        }}
      >
        Bienvenido
      </h2>

      <p style={{ color: "#94a3b8" }}>
        Ingresa a tu panel de Donatón
      </p>
    </header>

    <form
      onSubmit={handleLogin}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <label
          style={{
            color: "#94a3b8",
            fontSize: "0.9rem",
          }}
        >
          Correo Electrónico
        </label>

        <input
          type="email"
          placeholder="tu@correo.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <label
          style={{
            color: "#94a3b8",
            fontSize: "0.9rem",
          }}
        >
          Contraseña
        </label>

        <input
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <button type="submit">
        Iniciar Sesión
      </button>
    </form>
  </div>
</div>


);
};

export default Login;
