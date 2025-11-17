// Atualizei o css do componente para se adaptar a melhorar a experiência do usuário no mobile

import React, { useState } from 'react';
import Form from './components/Form/Form';
import RecommendationList from './components/RecommendationList/RecommendationList';
import useProducts from './hooks/useProducts';
import logo from './assets/images/rd-station.png';

function App() {
  const [recommendations, setRecommendations] = useState([]);
  const { products, preferences, features } = useProducts();

  /**
   * Dadas atualizações no formulário, necessário atualizar a lista de recomendações
   */

  return (
    <div className="bg-gray-50 min-h-screen flex justify-center p-4 md:p-10">
      <div className="bg-white p-6 md:p-10 rounded-2xl w-full max-w-6xl shadow-card shadow-gray-200/60">
        <div className="flex md:flex-row flex-col md:items-center gap-4 mb-6">
          <img
            src={logo}
            alt="RD Station Logo"
            className="w-14 mb-4 mx-auto md:mx-0 rounded-md object-contain"
          />
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 text-center md:text-left">
            Recomendador de Produtos RD Station
          </h1>
        </div>

        <div className="mb-6">
          <p className="text-base md:text-lg leading-relaxed text-gray-700  mb-10 text-center md:text-left">
            Bem-vindo ao Recomendador de Produtos RD Station. Aqui você pode
            encontrar uma variedade de produtos da RD Station, cada um projetado
            para atender às necessidades específicas do seu negócio. De CRM a
            Marketing, de Conversas a Inteligência Artificial, temos uma solução
            para ajudar você a alcançar seus objetivos. Use o formulário abaixo
            para selecionar suas preferências e funcionalidades desejadas e
            receba recomendações personalizadas de produtos que melhor atendam
            às suas necessidades.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
          <div className="border border-gray-200 rounded-xl p-5 shadow-sm bg-white lg:sticky md:top-6 h-fit transition-all duration-300">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Configurar preferências e funcionalidades
            </h2>
            <Form
              onRecommendations={setRecommendations}
              products={products}
              preferences={preferences}
              features={features}
            />
          </div>
          <div className="border border-gray-200 rounded-xl p-5 shadow-sm bg-white transition-all duration-300">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Resultados</h2>
            <RecommendationList recommendations={recommendations} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
