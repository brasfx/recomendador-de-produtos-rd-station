// Form.js

// Criei uma estado inicial default e passei props direto do pai (App.js) para facilitar testes e reutilização do componente
// Criei também um test para o componente, para validar se o formulário está funcionando corretamente

import React from 'react';
import { Preferences, Features, RecommendationType } from './Fields';
import { Button } from './Button';
import useForm from '../../hooks/useForm';
import useRecommendations from '../../hooks/useRecommendations';

const formDataInitialState = {
  selectedPreferences: [],
  selectedFeatures: [],
  selectedRecommendationType: '',
};

function Form({ onRecommendations, products, preferences, features }) {
  const { formData, handleChange, setFormData } = useForm(formDataInitialState);
  const { selectedRecommendationType, selectedFeatures, selectedPreferences } =
    formData;

  const disabledSubmit =
    !selectedRecommendationType ||
    (selectedFeatures.length === 0 && selectedPreferences?.length === 0);

  const disabledResetForm =
    selectedFeatures.length === 0 &&
    selectedPreferences?.length === 0 &&
    !selectedRecommendationType;

  const { getRecommendations } = useRecommendations(products);

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataRecommendations = getRecommendations(formData);
    onRecommendations(dataRecommendations);
    /**
     * Defina aqui a lógica para atualizar as recomendações e passar para a lista de recomendações
     */
  };

  const resetForm = () => {
    setFormData(formDataInitialState);
    onRecommendations([]);
  };

  return (
    <form
      className="max-w-md mx-auto p-4 bg-white rounded-lg"
      onSubmit={handleSubmit}
    >
      <Preferences
        preferences={preferences}
        selectedPreferences={selectedPreferences}
        onPreferenceChange={(selected) =>
          handleChange('selectedPreferences', selected)
        }
      />
      <Features
        features={features}
        selectedFeatures={selectedFeatures}
        onFeatureChange={(selected) =>
          handleChange('selectedFeatures', selected)
        }
      />
      <RecommendationType
        selectedRecommendationType={selectedRecommendationType}
        onRecommendationTypeChange={(selected) =>
          handleChange('selectedRecommendationType', selected)
        }
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
        <Button
          type="submit"
          text="Obter recomendação"
          disabled={disabledSubmit}
        />
        <Button
          text="Limpar formulário"
          variant="secondary"
          disabled={disabledResetForm}
          onClick={resetForm}
        />
      </div>
    </form>
  );
}

export default Form;
