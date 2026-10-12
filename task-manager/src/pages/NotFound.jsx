import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h2>404 - Halaman Tidak Ditemukan</h2>
      <p>Maaf, halaman yang Anda cari tidak ada atau telah dipindahkan.</p>
      <button 
        onClick={() => navigate('/')}
        style={{ 
          padding: '10px 20px', 
          backgroundColor: '#007bff', 
          color: 'white', 
          border: 'none', 
          borderRadius: '4px', 
          cursor: 'pointer', 
          marginTop: '15px' 
        }}
      >
        Kembali ke Beranda
      </button>
    </div>
  );
}

export default NotFound;