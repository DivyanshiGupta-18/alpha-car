import React from "react";

const CarOverview = () => {
  return (
    <div className="car-overview-container">
      <h2>Car Overview</h2>
      <div className="overview-grid">
        <div className="overview-item">
          <span className="label">Model:</span>
          <span className="value">Mahindra Thar LX</span>
        </div>
        <div className="overview-item">
          <span className="label">Year:</span>
          <span className="value">2021</span>
        </div>
        <div className="overview-item">
          <span className="label">Mileage:</span>
          <span className="value">15,000 km</span>
        </div>
        <div className="overview-item">
          <span className="label">Price:</span>
          <span className="value price">₹10,60,800</span>
        </div>
      </div>
      
      <style jsx>{`
        .car-overview-container {
          background: white;
          padding: 2rem;
          border-radius: 15px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
        }
        
        
        .car-overview-container h2 {
          color: #42a089;
          margin-bottom: 1.5rem;
          font-size: clamp(1.3rem, 3vw, 1.6rem);
          text-align: center;
          font-weight: 700;
        }
        
        .overview-grid {
          display: grid;
          gap: 1rem;
        }
        
        .overview-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem 0;
          border-bottom: 1px solid #f0f0f0;
          transition: all 0.2s ease;
        }
        
        .overview-item:last-child {
          border-bottom: none;
        }
        
        .label {
          font-weight: 600;
          color: #666;
          font-size: 1rem;
        }
        
        .value {
          font-weight: 700;
          color: #333;
          font-size: 1rem;
        }
        
        .value.price {
          color: #42a089;
          font-size: 1.2em;
          font-weight: 800;
        }
        
        /* Mobile Responsiveness */
        @media (max-width: 768px) {
          .car-overview-container {
            padding: 1.5rem;
          }
          
          .overview-item {
            padding: 1rem 0;
            flex-direction: column;
            align-items: flex-start;
            gap: 0.25rem;
          }
          
          
          .label {
            font-size: 0.9rem;
          }
          
          .value {
            font-size: 1.1rem;
          }
          
          .value.price {
            font-size: 1.3em;
          }
        }
        
        @media (max-width: 480px) {
          .car-overview-container {
            padding: 1rem;
          }
          
          .car-overview-container h2 {
            font-size: 1.4rem;
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default CarOverview;