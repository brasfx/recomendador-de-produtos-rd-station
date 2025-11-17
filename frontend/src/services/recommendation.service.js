// getRecommendations.js
const RECOMMENDATION_TYPES = {
  SINGLE: 'SingleProduct',
  MULTIPLE: 'MultipleProducts',
};
const calculateScore = (product, selectedPreferences, selectedFeatures) => {
  // Preferencias: soma 1 para cada preferência selecionada compatível
  const preferenceScore = selectedPreferences?.reduce((score, preference) => {
    return product.preferences.includes(preference) ? score + 1 : score;
  }, 0);

  // Funcinalidades: soma 1 para cada feature selecionada compatível
  const featureScore = selectedFeatures?.reduce((score, feature) => {
    return product.features.includes(feature) ? score + 1 : score;
  }, 0);

  const totalScore = preferenceScore + featureScore; // aqui somei as duas pontuações

  return totalScore; // Retorna a pontuação total do produto
};

const getRecommendations = (formData = {}, products) => {
  const {
    selectedPreferences = [],
    selectedFeatures = [],
    selectedRecommendationType,
  } = formData;
  // Aqui fiz a chamada da função de cálculo de pontuação para cada produto e adicionar o score ao objeto do produto
  const scoredProducts = products.map((product) => ({
    ...product,
    score: calculateScore(product, selectedPreferences, selectedFeatures),
  }));

  // Aqui criei uma lista apenas com as pontuações dos produtos avaliados
  const scores = scoredProducts.map((p) => p.score);
  // Aqui defini a pontuação máxima entre os produtos avaliados
  const maxScore = scores.length > 0 ? Math.max(...scores) : 0;
  // Se a pontuação máxima for 0 ou menor, retorno uma lista vazia
  if (maxScore <= 0) {
    return [];
  }

  //Aqui filtrei apenas os produtos que possuem a pontuação máxima
  const matches = scoredProducts.filter(({ score }) => score === maxScore);

  // Se a recomendação for unica, retorno apenas o ultimo produto da lista
  return selectedRecommendationType === RECOMMENDATION_TYPES.SINGLE
    ? [matches.at(-1)]
    : matches;

  /**
   * Crie aqui a lógica para retornar os produtos recomendados.
   */
};

export default { getRecommendations };
