import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

jest.mock('./components/Form/Form', () => ({ onRecommendations }) => (
  <button
    onClick={() => onRecommendations([{ name: 'Produto A', category: 'CRM' }])}
  >
    Simular recomendação
  </button>
));

jest.mock('./hooks/useProducts', () => () => ({
  products: [],
  preferences: [],
  features: [],
}));

test('renderiza título e descrição', () => {
  render(<App />);

  expect(
    screen.getByText('Recomendador de Produtos RD Station')
  ).toBeInTheDocument();

  expect(
    screen.getByText((t) => t.includes('Bem-vindo ao Recomendador'))
  ).toBeInTheDocument();
});

test('mostra RecommendationList e atualiza após ação no Form', async () => {
  render(<App />);

  const btn = screen.getByRole('button', {
    name: /simular recomendação/i,
  });
  await userEvent.click(btn);

  expect(await screen.findByText('Produto A')).toBeInTheDocument();
  expect(screen.getByText('CRM')).toBeInTheDocument();
});
