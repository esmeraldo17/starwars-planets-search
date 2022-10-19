const URL = 'https://swapi.dev/api/planets';

const getPlanets = async () => {
  const response = await fetch(URL);
  const json = await response.json();

  return json;
};

export default getPlanets;
