import React, { useState } from 'react';
import Card from './Card';

function RecommendationList({ recommendations }) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleExpand = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="p-6 bg-white rounded-lg">
      <h2 className="text-lg font-bold mb-8">Lista de Recomendações:</h2>

      {recommendations.length === 0 && <p>Nenhuma recomendação encontrada.</p>}

      <div className="space-y-4">
        {recommendations.map((recomendation, index) => {
          const isExpanded = expandedIndex === index;
          return (
            <Card
              key={index}
              index={index}
              isExpanded={isExpanded}
              recomendation={recomendation}
              expandCard={handleExpand}
              isBest={index === 0}
              isSingle={recommendations.length === 1}
            />
          );
        })}
      </div>
    </div>
  );
}

export default RecommendationList;
