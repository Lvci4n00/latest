import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) setUser(currentUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setUser(null);
    navigate('/');
    window.location.reload(); // Recarga simple para limpiar el estado
  };

  return (
    <header className="site-header">
      <div className="container">
        <h1 className="site-title">Hardware Hub</h1>
        <nav className="site-nav" aria-label="Navegación principal">
          <Link to="/">Inicio</Link>
          <Link to="/catalogo">Catálogo</Link>
          <Link to="/ofertas">Ofertas</Link>
        </nav>
        <div className="auth-actions" style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          {user ? (
            <>
              <span className="user-message" style={{ color: 'var(--primary)' }}>
                Bienvenido, {user.name}
              </span>
              <button onClick={handleLogout} className="btn">Cerrar sesión</button>
            </>
          ) : (
            <>
              <Link className="btn auth-btn" to="/auth">Iniciar sesión / Registro</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}