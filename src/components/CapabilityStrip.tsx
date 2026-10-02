import React from 'react';

export const CapabilityStrip: React.FC = () => {
  const capabilities = [
    'SHOPIFY',
    'SHOPIFY PLUS',
    'THEME DEVELOPMENT',
    'MIGRATIONS',
    'FIGMA → SHOPIFY',
    'RESPONSIVE STOREFRONTS',
    'BUG FIXING',
    'FRONTEND',
  ];

  // Duplicate for smooth seamless infinite scroll marquee
  const trackItems = [...capabilities, ...capabilities, ...capabilities];

  return (
    <div className="capability-strip" aria-label="Core Capabilities">
      <div className="capability-track">
        {trackItems.map((item, index) => (
          <div key={`${item}-${index}`} className="capability-item">
            <span>{item}</span>
            <span className="capability-separator" aria-hidden="true">
              ·
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
