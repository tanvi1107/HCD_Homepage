import React from "react";

const Footer = () => (
  <footer style={{ background: "#212121", color: "#fff", width: "100%" }}>
    <style>
      {`
        .footer-container {
          display: flex;
          flex-wrap: wrap;
          align-items: flex-start;
          justify-content: space-between;
          padding: 38px 40px 20px 40px;
          gap: 36px;
        }
        .footer-section {
          min-width: 140px;
          flex: 1 1 200px;
          margin-bottom: 10px;
        }
        @media (max-width: 900px) {
          .footer-container {
            flex-direction: column;
            align-items: flex-start;
            gap: 18px;
            padding: 35px 16px 16px 16px;
          }
          .footer-section {
            min-width: 120px;
            margin-bottom: 4px;
          }
        }
        @media (max-width: 500px) {
          .footer-container {
            padding: 28px 6px 8px 6px;
            gap: 8px;
          }
          .footer-section {
            min-width: 0;
          }
        }
      `}
    </style>
    <div className="footer-container">
      {/* Logo and Social */}
      <div className="footer-section" style={{ minWidth: 140 }}>
        <div style={{ fontSize: "2.15rem", fontWeight: 800, marginBottom: 18 }}>HCD</div>
        <div style={{ display: "flex", gap: 16, marginBottom: 8 }}>
          <a aria-label="Instagram" href="#"><svg width="22" height="22" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="6"/><circle cx="17" cy="7" r="1.2" fill="#fff"/></svg></a>
          <a aria-label="Facebook" href="#"><svg width="22" height="22" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><path d="M16 8h-2a1 1 0 0 0-1 1v2h3l-.5 3h-2.5v6h-3v-6H8v-3h2v-2a4 4 0 0 1 4-4h2v3z" fill="#fff"/></svg></a>
        </div>
      </div>
      {/* Our Products */}
      <div className="footer-section" style={{ minWidth: 110 }}>
        <div style={{ fontWeight: 1000, marginBottom: 7 }}>Our Products</div>
        <div>NSP Cargo</div>
        <div>NSP Quick</div>
      </div>
      {/* Quick Links */}
      <div className="footer-section" style={{ minWidth: 170 }}>
        <div style={{ fontWeight: 1000, marginBottom: 7 }}>Quick Links</div>
        <div>Contact us</div>
        <div>Privacy policy</div>
        <div>Cancellation / Refunds</div>
        <div>Shipping policy</div>
      </div>
      {/* Office Address */}
      <div className="footer-section" style={{ minWidth: 190 }}>
        <div style={{ fontWeight: 1000, marginBottom: 7 }}>Office Address</div>
        <div>
          Human Centered Design LLP.<br />
          South City 1,<br />
          Gurgaon,<br />
          Haryana 122001
        </div>
      </div>
    </div>
    <div style={{
      background: "#222",
      textAlign: "center",
      padding: "16px 0 30px 0",
      fontSize: "0.84rem",
      color: "#ccc"
    }}>
      © 2025, EV 2 Wheeler for delivery & connectivity
    </div>
  </footer>
);

export default Footer;
