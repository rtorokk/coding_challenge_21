import React from 'react';
import './TourCard.jsx'; // Optional: Add styles for the card

function TourCard({ tour, onRemove }) {
  const { name, info, image, price } = tour;

  return (
    <div className="tour-card">
      <img src={image} alt={name} className="tour-image" />
      <div className="tour-details">
        <h2>{name}</h2>
        <p className="tour-price">${price}</p>
        <p className="tour-info">{info}</p>
        <button className="not-interested-btn" onClick={() => onRemove(tour.id)}>
          Not Interested
        </button>
      </div>
    </div>
  );
}

export default TourCard;