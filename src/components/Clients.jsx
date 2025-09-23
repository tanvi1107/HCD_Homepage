import React from 'react';

const clients = [
  { name: 'DHL', logo: 'Frame 29.png' },
  { name: 'Uber', logo: 'Frame 30.png' },
  { name: 'Domino\'s Pizza', logo: 'Frame 31.png' },
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
  <div style={{ backgroundColor: '#0000', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif', padding: '40px 0' }}>
    <h1 style={{ textAlign: 'center', fontSize: '6rem', fontWeight: '800', marginBottom: '80px' }}>
      Our Clients & Partners
    </h1>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '80px', width: '80%', margin: '0 auto 48px auto' }}>
      {clients.map(client => (
        <div key={client.name} style={{
          borderRadius: '14px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100px',
          
        }}>
          <img src={`/${client.logo}`} alt={client.name + " logo"} style={{ maxWidth: '100%', maxHeight: '600px' }} />
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
