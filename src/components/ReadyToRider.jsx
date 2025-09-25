import React from 'react';

const ReadyToRide = () => (
  <div className="ready-root">
    {/* Black headline section */}
    <div className="ready-headline">
      Ready to Ride?
    </div>
    {/* Content */}
    <div className="ready-content">
      <div className="ready-left">
        <div className="ready-desc">
          Ride with HCD and keep your day moving forward whether<br />
          you’re delivering, handling tasks, or simply getting things done
        </div>
        <button className="ready-btn">Explore Products</button>
      </div>
      <div className="ready-right">
        <img
          src="image 8.png"
          alt="Bike"
          className="ready-bike-img"
        />
      </div>
    </div>
    {/* Styles */}
    <style>{`
      .ready-root {
        width: 100%;
        background: #000;
        padding-bottom: 0;
        min-height: 520px;
        font-family: Arial,sans-serif;
      }
      .ready-headline {
        color: #e9ff3a;
        font-size: 130px;
        font-weight: 900;
        text-align: centre;
        padding: 40px 100px 20px 180px;
        line-height: 1;
        letter-spacing: 0.015em;
      }
      .ready-content {
        display: flex;
        align-items: flex-start;
        background: #fff;
        padding: 40px 48px; /* increased padding for larger white area */
        justify-content: space-between;
        flex-wrap: wrap;
        width: 100%;
        height: 401px;
      }
      .ready-left {
        flex: 1;
        min-width: 320px;     /* increased from 220 */
        max-width: 600px;     /* added max-width */
        display: flex;
        flex-direction: column;
      }
      .ready-desc {
        color: #4D4D4D;
        font-size: 1.2rem;
        margin-bottom: 36px;
        font-weight: 550;
      }
   .ready-btn {
    width: 249px;
    height: 68px;
    padding: 16px 21px;
    background: #E9FE37;
    color: #000;
    border: none;
    font-weight:800;
    font-size: 1.35rem;
    border-radius: 6px;
    cursor: pointer;
    font-family: inherit;
    display: inline-block;
    line-height: 1;
    box-shadow: none;
    outline: none;
    letter-spacing: 0.01em;
    transition: background 0.18s;
  }
  .ready-btn:hover {
    background: #e0f71b;
  }


      .ready-right {
        flex: 1;
        min-width: 240px;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
      }
      .ready-bike-img {
        width: 990px;
        height: 421px;
        object-fit: contain;
        margin-right: -169px;
        margin-bottom: -15px;
        margin-top: -35px;
        max-width: none;
     }
      @media (max-width: 900px) {
        .ready-root { min-height: 350px; }
        .ready-headline { font-size: 3.1rem; padding-left: 6vw; }
        .ready-content { flex-direction: column; align-items: flex-start; padding: 20px 8vw; }
        .ready-left { max-width: 100%; min-width: auto; }
        .ready-bike-img { width: 98vw; max-width: 98vw; margin: 0; }
      }
      @media (max-width: 600px) {
        .ready-root { min-height: 180px; }
        .ready-headline { font-size: 1.45rem; padding-left: 6vw; }
        .ready-left, .ready-right { padding-left: 6vw; }
        .ready-bike-img { max-width: 97vw; width: 97vw; margin: 0; }
        .ready-btn { font-size: 0.95rem; padding: 8px 14px; }
      }
    `}</style>
  </div>
);

export default ReadyToRide;
