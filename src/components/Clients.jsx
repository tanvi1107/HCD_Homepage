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
    padding: '4vw 0',
    width: '100vw',
    maxWidth: '100vw',
  }}>
    <h1 style={{
      textAlign: 'center',
      fontSize: '6vw',        // scales on every device
      fontWeight: '800',
      marginBottom: '8vw',
    }}>
      Our Clients & Partners
    </h1>
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)', // always 4 columns
      gap: '4vw',           // gap scales
      width: '80vw',        // grid area scales
      margin: '0 auto 4vw auto',
    }}>
      {clients.map(client => (
        <div key={client.name} style={{
          borderRadius: '1vw',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '7vw',
        }}>
          <img
            src={`/${client.logo}`}
            alt={client.name + " logo"}
            style={{
              maxWidth: '13vw',    // image scales
              width: '100%',
              height: 'auto',
              objectFit: 'contain',
            }}
          />
        </div>
      ))}
    </div>
    <div style={{ textAlign: 'center', marginTop: '4vw' }}>
      <span style={{ fontSize: '1vw', marginRight: '1vw' }}>Want to partner with us?</span>
      <button style={{
        backgroundColor: '#f2ff36',
        color: '#101010',
        fontWeight: '600',
        border: 'none',
        borderRadius: '1vw',
        padding: '1vw 4vw',
        fontSize: '1.3vw',
        cursor: 'pointer',
      }}>
        Become a client
      </button>
    </div>
  </div>
);

export default ClientGrid;
