import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Scheme.css';

// SchemeCard Component
function SchemeCard({ name, description, eligibility, benefits }) {
  return (
    <div className="scheme-card" role="article" aria-labelledby={`scheme-title-${name}`}>
      <h2 id={`scheme-title-${name}`}>{name}</h2>
      <p>{description}</p>
      <p>
        <strong>Eligibility:</strong> {eligibility}
      </p>
      <p>
        <strong>Benefits:</strong> {benefits}
      </p>
    </div>
  );
}

SchemeCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  eligibility: PropTypes.string.isRequired,
  benefits: PropTypes.string.isRequired,
};

// Main Scheme Component
function Scheme() {
  const navigate = useNavigate();
  const [expandedCategory, setExpandedCategory] = useState(null);

  const schemes = [
    {
      id: 1,
      category: 'Central Government',
      name: 'Affordable Housing Scheme',
      description: 'Provides low-interest loans for low-income families to build homes.',
      eligibility: 'Family income less than $20,000/year.',
      benefits: 'Up to $50,000 in loan assistance.',
    },
    {
      id: 2,
      category: 'State Government',
      name: 'Home Renovation Grant',
      description: 'Grants available for renovating old homes to meet safety standards.',
      eligibility: 'Homeowners with homes built before 1975.',
      benefits: 'Up to $15,000 in grant funding.',
    },
    {
      id: 3,
      category: 'Other',
      name: 'Energy Efficiency Program',
      description: 'Incentives for installing energy-efficient appliances and fixtures.',
      eligibility: 'All homeowners are eligible.',
      benefits: 'Up to $5,000 in rebates.',
    },
    {
      id: 4,
      category: 'Central Government',
      name: 'Smart City Initiative',
      description: 'Supports infrastructure development in urban areas.',
      eligibility: 'Residents of selected cities.',
      benefits: 'Improved urban amenities.',
    },
    {
      id: 5,
      category: 'Other',
      name: 'Green Home Program',
      description: 'Promotes sustainable and eco-friendly home construction.',
      eligibility: 'Builders adhering to green standards.',
      benefits: 'Subsidized materials and recognition.',
    },
  ];

  // Group schemes by category
  const categorizedSchemes = schemes.reduce((acc, scheme) => {
    acc[scheme.category] = acc[scheme.category] || [];
    acc[scheme.category].push(scheme);
    return acc;
  }, {});

  const toggleCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  return (
    <div className="scheme-container">
      <h1>Available Schemes for Home Construction</h1>
      {Object.keys(categorizedSchemes).map((category) => (
        <div key={category} className="scheme-category">
          <button
            className="accordion-button"
            onClick={() => toggleCategory(category)}
            aria-expanded={expandedCategory === category}
          >
            {category} Schemes
          </button>
          {expandedCategory === category && (
            <div className="accordion-content">
              <div className="scheme-list">
                {categorizedSchemes[category].map((scheme) => (
                  <SchemeCard key={scheme.id} {...scheme} />
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
      <button
        onClick={() => navigate(-1)}
        className="back-button"
        aria-label="Go back to the previous page"
      >
        Back
      </button>
    </div>
  );
}

export default Scheme;

