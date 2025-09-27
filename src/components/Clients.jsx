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
  <div className="bg-transparent text-white-900 min-h-screen font-sans py-10 w-screen max-w-full px-4">
    <h1 className="text-center font-extrabold text-8xl mb-16">
      Our Clients & Partners
    </h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 max-w-6xl mx-auto">
      {clients.map(client => (
        <div
          key={client.name}
          className="rounded-lg flex items-center justify-center min-h-27 p-4"
        >
          <img
            src={`/${client.logo}`}
            alt={`${client.name} logo`}
            className="max-w-full max-h-45 object-contain"
          />
        </div>
      ))}
    </div>
    <div className="text-center mt-10">
      <span className="text-sm sm:text-base mr-4">Want to partner with us?</span>
      <button className="bg-yellow-400 text-white-900 font-semibold rounded-lg px-6 py-3 text-base cursor-pointer hover:bg-yellow-300 transition">
        Become a client
      </button>
    </div>
  </div>
);

export default ClientGrid;
