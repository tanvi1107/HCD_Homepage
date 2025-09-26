import React from 'react';

const clients = [
  { name: 'DHL', logo: 'Frame 29.png' },
  { name: 'Uber', logo: 'Frame 30.png' },
  { name: "Domino's Pizza", logo: 'Frame 31.png' },
  { name: 'Zepto', logo: 'Frame 32.png' },
  { name: 'Sodhis', logo: 'Frame 33.png' },
  { name: 'BigBasket', logo: 'Frame 34.png' },
  { name: 'Green Chick Chop', logo: 'Frame 35.png' },
  { name: 'OM Sweets & Snacks', logo: 'Frame 36.png' },
  { name: 'WideChoice', logo: 'Frame 37.png' },
  { name: 'Al-Aziz', logo: 'Frame 38.png' },
  { name: 'GoFarm', logo: 'Frame 39.png' },
  { name: 'Mini Mart Grocer', logo: 'Frame 40.png' },
];

const ClientGrid = () => (
  <div style={{
    backgroundColor: '#0000',
    color: '#fff',
    minHeight: '100vh',
    fontFamily: 'sans-serif',
    padding: '40px 0'
  }}>
    <style>
      {`
        @media (max-width: 1200px) {
          .client-grid-main { grid-template-columns: repeat(3, 1fr); }
          .client-grid-title { font-size: 4rem; }
        }
        @media (max-width: 800px) {
          .client-grid-main { grid-template-columns: repeat(2, 1fr); gap: 40px; }
          .client-grid-title { font-size: 2.4rem; margin-bottom: 40px; }
        }
        @media (max-width: 500px) {
          .client-grid-main { grid-template-columns: 1fr; gap: 32px; width: 98%; }
          .client-grid-title { font-size: 1.5rem; margin-bottom: 24px; }
        }
        .client-logo-img {
          max-width: 160px;
          width: 100%;
          height: auto;
          object-fit: contain;
        }
      `}
    </style>
    <h1 className="client-grid-title" style={{
      textAlign: 'center',
      fontSize: '6rem',
      fontWeight: '800',
      marginBottom: '80px'
    }}>
      Our Clients & Partners
    </h1>
    <div className="client-grid-main" style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '80px',
      width: '80%',
      margin: '0 auto 48px auto'
    }}>
      {clients.map(client => (
        <div key={client.name} style={{
          borderRadius: '14px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100px'
        }}>
          <img
            src={`/${client.logo}`}
            alt={client.name + " logo"}
            className="client-logo-img"
          />
        </div>
      ))}
    </div>
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <span style={{ fontSize: '1.1rem', marginRight: '16px' }}>Want to partner with us?</span>
      <button style={{
        backgroundColor: '#f2ff36',
        color: '#101010',
        fontWeight: '600',
        border: 'none',
        borderRadius: '6px',
        padding: '12px 34px',
        fontSize: '1.1rem',
        cursor: 'pointer',
      }}>
        Become a client
      </button>
    </div>
  </div>
);

export default ClientGrid;
