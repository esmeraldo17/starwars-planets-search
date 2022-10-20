import { useContext, useState, useEffect } from 'react';
import PlanetContext from '../PlanetContext';

function Table() {
  const { apiList } = useContext(PlanetContext);
  const [list, setList] = useState(apiList);
  const [inputValue, setInputValue] = useState('');
  useEffect(() => {
    const arrfilter = apiList.filter((e) => e.name.includes(inputValue));
    setList(arrfilter);
  }, [apiList, inputValue]);

  const handleChange = ({ target }) => {
    const { value } = target;
    setInputValue(value);
  };
  return (
    <div>
      <form>
        <input
          type="text"
          data-testid="name-filter"
          onChange={ handleChange }
        />
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
