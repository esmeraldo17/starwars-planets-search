import PropTypes from 'prop-types';
import { useEffect, useState, useMemo } from 'react';
import PlanetContext from './PlanetContext';
import getPlanets from '../services/PlanetsReques';

function PlanetProvider({ children }) {
  const [apiList, setApiList] = useState([]);
  useEffect(() => {
    const fecthAPi = async () => {
      const api = await getPlanets();
      const apiResults = api.results;
      const apiFilter = apiResults.map((e) => {
        delete e.residents;
        return e;
      });
      //   console.log(apiFilter);
      //   console.log(api.results);
      setApiList(apiFilter);
    };
    fecthAPi();
  }, []);

  const value = useMemo(() => ({
    apiList,
  }), [apiList]);

  return (
    <PlanetContext.Provider value={ value }>
      {children}
    </PlanetContext.Provider>
  );
}

export default PlanetProvider;

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
