import React from 'react';

// fiz uns ajustes para o botão ser modular e receber mais props, sem precisar de um novo componente
//defini duas classes de cores no tailwind.config.js (primary e secondary) para usar como variantes do botão

function Button({ text, variant = 'primary', ...rest }) {
  const baseClasses = [
    'font-bold',
    'text-white',
    'py-2',
    'px-4',
    'rounded-lg',
    'cursor-pointer',
    'transition-all',
    'disabled:bg-disabled-bg',
    'disabled:text-disabled-text',
    'disabled:cursor-not-allowed',
    'disabled:opacity-60',
  ].join(' ');

  const variants = {
    primary: 'bg-primary-500 hover:bg-primary-600',
    secondary: 'bg-secondary-500 hover:bg-secondary-600',
  };
  return (
    <button className={`${baseClasses} ${variants[variant]}`} {...rest}>
      {text}
    </button>
  );
}

export default Button;
