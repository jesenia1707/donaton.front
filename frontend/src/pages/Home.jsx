import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-wrapper" style={{ 
      background: '#0f172a', 
      color: '#fff', 
      minHeight: '100vh',
      fontFamily: 'sans-serif',
      overflowX: 'hidden' 
    }}>
      {/* BARRA DE NAVEGACIÓN - Sticky y elegante */}
      <nav style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        padding: '1.5rem 10%', 
        background: 'rgba(15, 23, 42, 0.95)',
        borderBottom: '1px solid #2d3748',
        position: 'sticky',
        top: 0,
        zIndex: 1000
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <img src="/Donaton.png" alt="Logo" style={{ width: '45px', borderRadius: '8px' }} />
          <h2 style={{ margin: 0, fontSize: '1.8rem', fontWeight: 'bold', color: '#6366f1' }}>Donatón</h2>
        </div>
        <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
          <a href="#nosotros" style={{ color: '#94a3b8', textDecoration: 'none', fontWeight: '500' }}>Nosotros</a>
          <button 
            onClick={() => navigate('/login')}
            style={{ 
              background: '#6366f1', 
              color: '#fff', 
              border: 'none', 
              padding: '10px 25px', 
              borderRadius: '10px', 
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: '0.3s'
            }}
          >
            Iniciar Sesión
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header style={{ 
        padding: '120px 10%', 
        textAlign: 'center',
        background: 'radial-gradient(circle at top, #1e293b 0%, #0f172a 100%)'
      }}>
        <h1 style={{ fontSize: '4rem', fontWeight: '800', marginBottom: '24px', lineHeight: '1.1' }}>
          Conectando <span style={{ color: '#6366f1' }}>Corazones</span>,<br /> Entregando Esperanza
        </h1>
        <p style={{ color: '#94a3b8', fontSize: '1.3rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
          Desde 2024, Donatón ha facilitado la entrega de recursos vitales a comunidades en riesgo, uniendo a donantes generosos con voluntarios imparables.
        </p>
      </header>

      {/* SECCIÓN NOSOTROS */}
      <section id="nosotros" style={{ 
        padding: '100px 10%', 
        display: 'flex', 
        flexWrap: 'wrap',
        gap: '60px', 
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{ flex: '1', minWidth: '300px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>¿Quiénes Somos?</h2>
          <div style={{ width: '60px', height: '4px', background: '#6366f1', marginBottom: '30px' }}></div>
          <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: '1.8' }}>
            Somos una plataforma logística sin fines de lucro nacida de la necesidad de transparentar y agilizar las donaciones. 
            Nuestra misión es asegurar que cada alimento, prenda o medicina llegue a su destino en tiempo récord, 
            eliminando las barreras entre quienes quieren ayudar y quienes lo necesitan.
          </p>
        </div>
        <div className="stat-card" style={{ flex: '1', minWidth: '300px', padding: '50px', textAlign: 'center', border: '1px solid #2d3748' }}>
          <img src="/Donaton.png" alt="Logo Gigante" style={{ width: '180px', marginBottom: '20px', filter: 'drop-shadow(0 0 20px rgba(99, 102, 241, 0.3))' }} />
          <h3>Logística Solidaria</h3>
        </div>
      </section>

      {/* FOOTER - REDES SOCIALES CON NEÓN CONTROLADO */}
      <footer style={{ 
        background: '#0a101f', 
        padding: '80px 10% 40px', 
        borderTop: '1px solid #1e293b'
      }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '50px' 
        }}>
          <div>
            <h3 style={{ color: '#6366f1', marginBottom: '20px' }}>Donatón</h3>
            <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.5' }}>
              Transformando la manera en que el mundo ayuda. Tecnología al servicio de la solidaridad.
            </p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <h4 style={{ marginBottom: '20px' }}>Síguenos</h4>
            <div style={{ display: 'flex', gap: '25px', justifyContent: 'center', alignItems: 'center' }}>
              
              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <img 
                  src="https://cdn.simpleicons.org/instagram/white" 
                  alt="Instagram" 
                  style={{ 
                    width: '32px', height: '32px', transition: '0.3s', cursor: 'pointer',
                    filter: 'drop-shadow(0 0 8px rgba(228, 64, 95, 0.6))'
                  }} 
                  onMouseOver={(e) => e.target.style.filter = 'drop-shadow(0 0 15px #E4405F)'}
                  onMouseOut={(e) => e.target.style.filter = 'drop-shadow(0 0 8px rgba(228, 64, 95, 0.6))'}
                />
              </a>

              {/* X (Twitter) */}
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <img 
                  src="https://cdn.simpleicons.org/x/white" 
                  alt="X" 
                  style={{ 
                    width: '28px', height: '28px', transition: '0.3s', cursor: 'pointer',
                    filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.5))'
                  }} 
                  onMouseOver={(e) => e.target.style.filter = 'drop-shadow(0 0 15px #ffffff)'}
                  onMouseOut={(e) => e.target.style.filter = 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.5))'}
                />
              </a>

              {/* Facebook */}
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <img 
                  src="https://cdn.simpleicons.org/facebook/white" 
                  alt="Facebook" 
                  style={{ 
                    width: '32px', height: '32px', transition: '0.3s', cursor: 'pointer',
                    filter: 'drop-shadow(0 0 8px rgba(24, 119, 242, 0.6))'
                  }} 
                  onMouseOver={(e) => e.target.style.filter = 'drop-shadow(0 0 15px #1877F2)'}
                  onMouseOut={(e) => e.target.style.filter = 'drop-shadow(0 0 8px rgba(24, 119, 242, 0.6))'}
                />
              </a>

            </div>
          </div>

          <div>
            <h4 style={{ marginBottom: '20px' }}>Soporte</h4>
            <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '15px' }}>¿Tienes dudas sobre cómo donar?</p>
            <button style={{ 
              background: 'transparent', 
              border: '1px solid #6366f1', 
              color: '#6366f1', 
              padding: '12px 20px', 
              borderRadius: '8px', 
              cursor: 'pointer',
              width: '100%',
              fontWeight: 'bold'
            }}>
              💬 Chat de Ayuda
            </button>
          </div>
        </div>

        <div style={{ 
          textAlign: 'center', 
          marginTop: '60px', 
          paddingTop: '20px', 
          borderTop: '1px solid #1e293b', 
          color: '#475569', 
          fontSize: '0.9rem' 
        }}>
          © 2026 Donatón - Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}

export default Home;