import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Scheme.css'; // Assuming you will have a CSS file for styling

function Scheme() {
  const navigate = useNavigate();

  const schemes = [
    {
      id: 1,
      name: 'Affordable Housing Scheme',
      description: 'Provides low-interest loans for low-income families to build homes.',
      eligibility: 'Family income less than $20,000/year.',
      benefits: 'Up to $50,000 in loan assistance.',
    },
    {
      id: 2,
      name: 'Home Renovation Grant',
      description: 'Grants available for renovating old homes to meet safety standards.',
      eligibility: 'Homeowners with homes built before 1975.',
      benefits: 'Up to $15,000 in grant funding.',
    },
    {
      id: 3,
      name: 'Energy Efficiency Program',
      description: 'Incentives for installing energy-efficient appliances and fixtures.',
      eligibility: 'All homeowners are eligible.',
      benefits: 'Up to $5,000 in rebates.',
    },
    // Add more schemes as needed
  ];

  return (
    <div className="scheme-container">
      <h1>Available Schemes for Home Construction</h1>
      <div className="scheme-list">
        {schemes.map((scheme) => (
          <div key={scheme.id} className="scheme-card">
            <h2>{scheme.name}</h2>
            <p>{scheme.description}</p>
            <p><strong>Eligibility:</strong> {scheme.eligibility}</p>
            <p><strong>Benefits:</strong> {scheme.benefits}</p>
          </div>
        ))}
      </div>
      <button onClick={() => navigate(-1)} className="back-button">
        Back
      </button>
    </div>
  );
}

export default Scheme;
