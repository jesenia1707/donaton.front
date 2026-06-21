import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../App.css"; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Lógica de redirección por roles
    if (email.includes('@admindonaton.com')) {
      console.log("Acceso como Administrador");
      navigate('/dashboard');
    } 
    else if (email.includes('@voluntariodonaton.com')) {
      console.log("Acceso como Voluntario");
      // Ya no hay alerta, ahora va directo a su página
      navigate('/voluntario'); 
    } 
    else {
      console.log("Acceso como Donante");
      navigate('/donante');
    }
  };

  return (
    <div className="dashboard-container" style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
      <div className="stat-card" style={{ width: '100%', maxWidth: '400px', padding: '40px' }}>
        <header style={{ textAlign: 'center', marginBottom: '30px' }}>
          <img src="/Donaton.png" alt="Logo" style={{ width: '80px', marginBottom: '20px' }} />
          <h2 style={{ fontSize: '2rem', margin: 0 }}>Bienvenido</h2>
          <p style={{ color: '#94a3b8' }}>Ingresa a tu panel de Donatón</p>
        </header>

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Correo Electrónico</label>
            <input 
              type="email" 
              placeholder="tu@correo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ padding: '12px', borderRadius: '8px', border: '1px solid #2d3748', background: '#0a0f18', color: '#fff' }}
              required
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Contraseña</label>
            <input 
              type="password" 
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ padding: '12px', borderRadius: '8px', border: '1px solid #2d3748', background: '#0a0f18', color: '#fff' }}
              required
            />
          </div>

          <button 
            type="submit" 
            style={{ 
              padding: '14px', 
              borderRadius: '8px', 
              border: 'none', 
              background: '#6366f1', 
              color: '#fff', 
              fontWeight: 'bold', 
              cursor: 'pointer',
              marginTop: '10px'
            }}
          >
            Iniciar Sesión
          </button>

          <p style={{ fontSize: '0.75rem', color: '#4b5563', textAlign: 'center', marginTop: '10px' }}>
            Usa @admindonaton.com o @voluntariodonaton.com para roles específicos.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;