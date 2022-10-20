import { useContext, useState, useEffect } from 'react';
import PlanetContext from '../PlanetContext';

function Table() {
  const { apiList } = useContext(PlanetContext);
  const [list, setList] = useState(apiList);
  const [inputValue, setInputValue] = useState('');
  const [inputColumn, setInputColumn] = useState('population');
  const [inputOperator, setInputOperator] = useState('maior que');
  const [inputNumber, setInputNumber] = useState('0');
  useEffect(() => {
    const arrfilter = apiList.filter((e) => e.name.includes(inputValue));
    setList(arrfilter);
  }, [apiList, inputValue]);

  const onSearchInputChange = ({ target }) => {
    const { value } = target;
    setInputValue(value);
  };

  const onInputColumnChange = ({ target }) => {
    const { value } = target;
    setInputColumn(value);
  };
  const onInputOperatorChange = ({ target }) => {
    const { value } = target;
    setInputOperator(value);
  };

  const onInputNumberChange = ({ target }) => {
    const { value } = target;
    setInputNumber(value);
  };

  const onFilterBtnClick = () => {
    if (inputOperator === 'maior que') {
      const arfilter = list.filter((e) => +e[inputColumn] > +inputNumber);
      setList(arfilter);
    }
    if (inputOperator === 'menor que') {
      const arfilter = list.filter((e) => +e[inputColumn] < +inputNumber);
      setList(arfilter);
    }
    if (inputOperator === 'igual a') {
      const arfilter = list.filter((e) => +e[inputColumn] === +inputNumber);
      setList(arfilter);
    }
  };
  return (
    <div>
      <form>
        <input
          type="text"
          data-testid="name-filter"
          onChange={ onSearchInputChange }
        />
        <label htmlFor="clFilter">
          Coluna:
          <select
            id="clFilter"
            data-testid="column-filter"
            onChange={ onInputColumnChange }
          >
            <option value="population">population</option>
            <option value="orbital_period">orbital_period</option>
            <option value="diameter">diameter</option>
            <option value="rotation_period">rotation_period</option>
            <option value="surface_water">surface_water</option>
          </select>
        </label>
        <label htmlFor="cpFilter">
          Operador:
          <select
            id="cpFilter"
            data-testid="comparison-filter"
            onChange={ onInputOperatorChange }
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </label>
        <input
          type="number"
          data-testid="value-filter"
          value={ inputNumber }
          onChange={ onInputNumberChange }
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ onFilterBtnClick }

        >
          Filtrar
        </button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {list.map((e) => (
            <tr key={ e.name }>
              <td>{e.name}</td>
              <td>{e.rotation_period}</td>
              <td>{e.orbital_period}</td>
              <td>{e.diameter}</td>
              <td>{e.climate}</td>
              <td>{e.gravity}</td>
              <td>{e.terrain}</td>
              <td>{e.surface_water}</td>
              <td>{e.population}</td>
              <td>{e.films}</td>
              <td>{e.created}</td>
              <td>{e.edited}</td>
              <td>{e.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
