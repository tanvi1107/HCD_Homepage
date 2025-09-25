import React from "react";

const LocationMapSection = () => (
  <div className="map-location-root">
    <img
      src="/Location.png"
      alt="Map"
      className="map-bg-img"
    />
    <div className="location-card">
      <h3>Assembly Unit</h3>
      <div className="location-address">
        Tauru Road, Bilaspur<br />
        Village Patheri,<br />
        Tehsil manesar,<br />
        distt.gurugram ,<br />
        Haryana 122413
      </div>
      <button className="location-btn">
        Get Directions
      </button>
    </div>
    <style>{`
      .map-location-root {
        position: relative;
        width: 100%;
        height: 600px;
        max-width: 100vw;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #f5f5f5;
      }
      .map-bg-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: brightness(0.97);
      }
      .location-card {
        position: absolute;
        left: 8vw;
        top: 150px;
        background: #fff;
        border-radius: 16px;
        box-shadow: 0 2px 16px rgba(0,0,0,0.07);
        padding: 38px 36px 32px 36px;
        max-width: 355px;
        min-width: 180px;
        z-index: 2;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
      }
      .location-card h3 {
        font-size: 1.5rem;
        font-weight: 800;
        margin-bottom: 18px;
        color: #232323;
      }
      .location-address {
        font-size: 1.1rem;
        color: #232323;
        margin-bottom: 34px;
        line-height: 1.33;
        letter-spacing: 0.01em;
      }
      .location-btn {
        background: #000;
        color: #fff;
        border-radius: 10px;
        outline: none;
        border: none;
        font-size: 1.11rem;
        padding: 16px 36px;
        font-weight: 500;
        cursor: pointer;
        transition: background-color 0.3s ease;
      }
      .location-btn:hover {
        background: #222;
      }
      /* Responsive rules */
      @media (max-width: 700px) {
        .location-card {
          left: 3vw;
          top: 10px;
          padding: 16px 8px;
          max-width: 84vw;
        }
        .map-location-root {
          height: 350px;
        }
      }
      @media (max-width: 430px) {
        .location-card {
          left: 2vw;
          top: 6px;
          padding: 8px 4px;
          max-width: 94vw;
        }
        .map-location-root {
          height: 250px;
        }
      }
    `}</style>
  </div>
);

export default LocationMapSection;
