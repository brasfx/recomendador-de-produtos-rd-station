import React from 'react';
function Card({ index, recomendation, isExpanded, expandCard }) {
  return (
    <div key={index} className="border p-4 rounded-lg shadow-sm bg-white">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">{recomendation.name}</h3>
          <p className="text-sm text-gray-600">{recomendation.category}</p>
        </div>

        <button
          onClick={() => expandCard(index)}
          className="text-blue-600 hover:underline text-sm"
        >
          {isExpanded ? 'Ver menos' : 'Ver mais'}
        </button>
      </div>

      {isExpanded && (
        <div className="mt-4 space-y-2">
          <div>
            <h4 className="font-medium">Preferências:</h4>
            <ul className="list-disc ml-5">
              {recomendation.preferences.map((preference, index) => (
                <li key={index}>{preference}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium">Funcionalidades:</h4>
            <ul className="list-disc ml-5">
              {recomendation.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
