import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Button from './Button';

describe('Button Component', () => {
  test("renderiza o botão com o texto 'Obter recomendação'", () => {
    render(<Button text="Obter recomendação" />);
    expect(
      screen.getByRole('button', { name: /obter recomendação/i })
    ).toBeInTheDocument();
  });

  test("renderiza o botão com o texto 'Limpar formulário'", () => {
    render(<Button text="Limpar formulário" />);
    expect(
      screen.getByRole('button', { name: /limpar formulário/i })
    ).toBeInTheDocument();
  });

  test('usa variant primary como padrão', () => {
    render(<Button text="Obter recomendação" />);
    const btn = screen.getByRole('button');
    expect(btn).toHaveClass('bg-primary-500');
  });

  test('usa variant secondary quando passado', () => {
    render(<Button text="Limpar formulário" variant="secondary" />);
    const btn = screen.getByRole('button');
    expect(btn).toHaveClass('bg-secondary-500');
  });

  test("desabilita o botão quando 'disabled' é passado", () => {
    render(<Button text="Obter recomendação" disabled />);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  test('chama onClick quando clicado', async () => {
    const handleClick = jest.fn();

    render(<Button text="Obter recomendação" onClick={handleClick} />);

    const button = screen.getByRole('button', { name: /obter recomendação/i });

    await userEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('não chama onClick quando disabled', async () => {
    const handleClick = jest.fn();

    render(<Button text="Obter recomendação" onClick={handleClick} disabled />);

    const button = screen.getByRole('button', { name: /obter recomendação/i });

    await userEvent.click(button);

    expect(handleClick).not.toHaveBeenCalled();
  });
});
