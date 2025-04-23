import React from 'react';
import './TourCard.jsx'; // Optional: Add styles for the card

// TourCard component to display individual tour details
function TourCard({ tour, onRemove }) {
  const { name, info, image, price } = tour; // Destructure tour properties

  return (
    <div className="tour-card">
      {/* Display the tour image */}
      <img src={image} alt={name} className="tour-image" />
      <div className="tour-details">
        {/* Display the tour name */}
        <h2>{name}</h2>
        {/* Display the tour price */}
        <p className="tour-price">${price}</p>
        {/* Display the tour information */}
        <p className="tour-info">{info}</p>
        {/* Button to remove the tour */}
        <button className="not-interested-btn" onClick={() => onRemove(tour.id)}>
          Not Interested
        </button>
      </div>
    </div>
  );
}

export default TourCard;