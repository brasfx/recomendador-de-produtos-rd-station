import React from 'react';
import Stars from '../shared/Stars';

function Card({
  index,
  recomendation,
  isExpanded,
  expandCard,
  isBest,
  isSingle,
}) {
  const {
    name,
    category,
    score,
    preferences,
    features,
    selectedPreferences,
    selectedFeatures,
  } = recomendation;
  const matchesText = score === 1 ? 'match' : 'matches';

  return (
    <div
      key={index}
      className={`border p-4 rounded-lg shadow-sm bg-white relative 
        ${
          isBest && !isSingle
            ? 'border-green-500 ring-2 ring-green-300'
            : 'border-gray-200'
        }
      `}
    >
      {isBest && !isSingle && (
        <div className="absolute -top-3 left-3 bg-green-500 text-white px-3 py-1 rounded-full flex items-center gap-1 shadow">
          <span>⭐</span>
          <span className="text-sm font-semibold">
            Melhor recomendação para você
          </span>
        </div>
      )}

      <div className="flex justify-between items-center mt-2">
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-gray-600">{category}</p>
        </div>

        <button
          onClick={() => expandCard(index)}
          className="text-blue-600 hover:underline text-sm"
        >
          {isExpanded ? 'Ver menos' : 'Ver mais'}
        </button>
      </div>

      {!isSingle && (
        <div className="mt-2 flex items-center gap-2">
          <Stars score={score} />
          <span className="text-gray-500 text-sm">
            {score} {matchesText}
          </span>
        </div>
      )}

      {isExpanded && (
        <div className="mt-4 space-y-2">
          <div>
            <h4 className="font-medium">Preferências:</h4>
            <ul className="list-disc ml-5">
              {preferences.map((preference, index) => (
                <li
                  key={index}
                  className={
                    !isSingle && selectedPreferences.includes(preference)
                      ? 'bg-green-100 text-green-700 font-semibold rounded px-2 py-1'
                      : ''
                  }
                >
                  {preference}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium">Funcionalidades:</h4>
            <ul className="list-disc ml-5">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className={
                    !isSingle && selectedFeatures.includes(feature)
                      ? 'bg-green-100 text-green-700 font-semibold rounded px-2 py-1'
                      : ''
                  }
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
