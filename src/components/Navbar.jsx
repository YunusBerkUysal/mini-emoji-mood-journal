import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="card" style={{ display: 'flex', justifyContent: 'center', gap: '30px', padding: '15px', marginBottom: '20px' }}>
      
      <Link 
        to="/" 
        style={{ 
          textDecoration: 'none', 
          fontWeight: 'bold', 
          fontSize: '1.1rem',
          color: location.pathname === '/' ? 'var(--primary-color)' : 'var(--text-muted)' 
        }}
      >
        🏠 Yeni Kayıt
      </Link>

      <Link 
        to="/history" 
        style={{ 
          textDecoration: 'none', 
          fontWeight: 'bold', 
          fontSize: '1.1rem',
          color: location.pathname === '/history' ? 'var(--primary-color)' : 'var(--text-muted)' 
        }}
      >
        📜 Geçmiş Kayıtlar
      </Link>

    </nav>
  );
}

export default Navbar;