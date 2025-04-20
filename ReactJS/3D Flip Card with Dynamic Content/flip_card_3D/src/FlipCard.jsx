import React, { useState } from 'react';
import './FlipCard.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const funFacts = [
  "Bananas are berries, but strawberries aren't.",
  "Octopuses have three hearts.",
  "Honey never spoils.",
  "A group of flamingos is called a flamboyance.",
  "Sharks are older than trees.",
];

function FlipCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [fact, setFact] = useState(getRandomFact());

  function getRandomFact() {
    return funFacts[Math.floor(Math.random() * funFacts.length)];
  }

  const handleFlip = () => {
    setFact(getRandomFact());
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div
        className={`flip-card ${isFlipped ? 'flipped' : ''}`}
        onClick={handleFlip}
      >
        <div className="flip-card-inner shadow-lg rounded-4">
          <div className="flip-card-front bg-white d-flex flex-column justify-content-center align-items-center p-4 rounded-4">
            <img
              src="/Sumant_Ghume_Image.jpeg"
              alt="Profile"
              className="rounded-circle mb-3"
              width="100"
              height="100"
            />
            <h5 className="mb-0">Jane Doe</h5>
          </div>
          <div className="flip-card-back bg-dark text-white d-flex justify-content-center align-items-center p-4 rounded-4">
            <p className="text-center">{fact}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
