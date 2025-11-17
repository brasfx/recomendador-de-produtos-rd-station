import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './Form';
import mockProducts from '../../mocks/mockProducts';

describe('Form Component', () => {
  const mockPreferences = [
    'Integração fácil com ferramentas de e-mail',
    'Personalização de funis de vendas',
  ];

  const mockFeatures = [
    'Gestão de leads e oportunidades',
    'Automação de fluxos de trabalho de vendas',
  ];

  test('desabilitar o botão de obter recomendação quando nada está selecionado', () => {
    const onRecommendations = jest.fn();

    render(
      <Form
        onRecommendations={onRecommendations}
        products={mockProducts}
        preferences={mockPreferences}
        features={mockFeatures}
      />
    );

    const submitButton = screen.getByRole('button', {
      name: /obter recomendação/i,
    });

    expect(submitButton).toBeDisabled();
  });

  test('desabilitar o botão de limpar formulário quando nada está selecionado', () => {
    const onRecommendations = jest.fn();

    render(
      <Form
        onRecommendations={onRecommendations}
        products={mockProducts}
        preferences={mockPreferences}
        features={mockFeatures}
      />
    );

    const clearButton = screen.getByRole('button', {
      name: /limpar formulário/i,
    });

    expect(clearButton).toBeDisabled();
  });

  test('gerar recomendações corretamente após selecionar opções', async () => {
    const onRecommendations = jest.fn();

    render(
      <Form
        onRecommendations={onRecommendations}
        products={mockProducts}
        preferences={mockPreferences}
        features={mockFeatures}
      />
    );

    const prefCheckbox = screen.getByLabelText(
      /integração fácil com ferramentas de e-mail/i
    );
    await userEvent.click(prefCheckbox);

    const featCheckbox = screen.getByLabelText(/gestão de leads/i);
    await userEvent.click(featCheckbox);

    const recommendationRadio = screen.getByLabelText(/produto único/i);
    await userEvent.click(recommendationRadio);

    const submitButton = screen.getByRole('button', {
      name: /obter recomendação/i,
    });
    await userEvent.click(submitButton);

    expect(onRecommendations).toHaveBeenCalled();
    const result = onRecommendations.mock.calls[0][0];
    expect(result.length).toBeGreaterThan(0);
  });

  test('limpar o formulário ao clicar em "Limpar formulário"', async () => {
    const onRecommendations = jest.fn();

    render(
      <Form
        onRecommendations={onRecommendations}
        products={mockProducts}
        preferences={mockPreferences}
        features={mockFeatures}
      />
    );

    const prefCheckbox = screen.getByLabelText(
      /integração fácil com ferramentas de e-mail/i
    );
    await userEvent.click(prefCheckbox);

    const clearButton = screen.getByRole('button', {
      name: /limpar formulário/i,
    });
    expect(clearButton).not.toBeDisabled();

    await userEvent.click(clearButton);

    expect(prefCheckbox).not.toBeChecked();

    expect(onRecommendations).toHaveBeenCalledWith([]);
  });
});
