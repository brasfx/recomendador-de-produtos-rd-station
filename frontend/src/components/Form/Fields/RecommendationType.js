import React from 'react';
import Radio from '../../shared/Radio';

function RecommendationType({
  selectedRecommendationType,
  onRecommendationTypeChange,
}) {
  return (
    <div className="mb-4">
      <h2 className="text-lg font-bold mb-2">Tipo de Recomendação:</h2>
      <div className="flex items-center">
        <Radio
          id="SingleProduct"
          type="radio"
          label="Produto Único"
          name="recommendationType"
          value="SingleProduct"
          checked={selectedRecommendationType === 'SingleProduct'}
          onChange={() => onRecommendationTypeChange('SingleProduct')}
        />
        <Radio
          id="MultipleProducts"
          type="radio"
          label="Múltiplos Produtos"
          name="recommendationType"
          value="MultipleProducts"
          checked={selectedRecommendationType === 'MultipleProducts'}
          onChange={() => onRecommendationTypeChange('MultipleProducts')}
        />
      </div>
    </div>
  );
}

export default RecommendationType;
