import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
 
describe('Testa o meu App', () => {
  test('Testa se o form e renderizado', () => {
    render(<App />);
    const inputSearch = screen.getByRole('textbox');
    const inputcolumn = screen.getByRole('combobox', {
      name: /coluna:/i
    });
    const inputOperator = screen.getByRole('combobox', {
      name: /operador:/i
    });
    const inputNumber = screen.getByRole('spinbutton');
    const filterBtn = screen.getByRole('button', {
      name: /filtrar/i
    });
    const table = screen.getByRole('table');
  
    expect(inputSearch).toBeInTheDocument();
    expect(inputcolumn).toBeInTheDocument();
    expect(inputOperator).toBeInTheDocument();
    expect(inputNumber).toBeInTheDocument();
    expect(filterBtn).toBeInTheDocument();
    expect(table).toBeInTheDocument();
  });
})