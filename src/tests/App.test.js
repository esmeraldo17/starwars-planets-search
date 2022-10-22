import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';
 
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

  test('Testando se o filtro funciona', async () => {
    render(<App />);
    const inputSearch = screen.getByPlaceholderText('pesquisa');
    const inputNumber = screen.getByRole('spinbutton');
    const filterBtn = screen.getByRole('button', {
      name: /filtrar/i
    });
    const inputColumn = screen.getByRole('combobox', {
      name: /coluna:/i
    });
    const inputOperator = screen.getByRole('combobox', {
      name: /operador:/i
    });
    const options = screen.getAllByRole('option');

    // const cell = await screen.findByText(/tatooine/i);

    userEvent.type(inputSearch, 'Tatooine');
    userEvent.type(inputNumber, '10');
    userEvent.selectOptions(inputColumn, options[2]);
    userEvent.selectOptions(inputOperator, options[5]);
    userEvent.click(filterBtn);

    expect(options).toHaveLength(8);

    // const linh = await findByTestId('linhas');
  });

  test('Testando se o filtro menor que funciona', async () => {
    render(<App />);
    const inputColumn = screen.getByRole('combobox', {
      name: /coluna:/i
    });
    const inputOperator = screen.getByRole('combobox', {
      name: /operador:/i
    });
    const options = screen.getAllByRole('option');
    const filterBtn = screen.getByRole('button', {
      name: /filtrar/i
    });
    
    userEvent.selectOptions(inputColumn, options[2]);
    userEvent.selectOptions(inputOperator, options[6]);
    userEvent.click(filterBtn);

    expect(options).toHaveLength(8);
  });

  test('Testando se o filtro igual a funciona', async () => {
    render(<App />);
    const inputColumn = screen.getByRole('combobox', {
      name: /coluna:/i
    });
    const inputOperator = screen.getByRole('combobox', {
      name: /operador:/i
    });
    const filterBtn = screen.getByRole('button', {
      name: /filtrar/i
    });
    const options = screen.getAllByRole('option');

    userEvent.selectOptions(inputColumn, options[2]);
    userEvent.selectOptions(inputOperator, options[7]);
    userEvent.click(filterBtn);

    expect(options).toHaveLength(8);
  });
})