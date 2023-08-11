const getCharacters = async () => {
  const response = await fetch('https://rickandmortyapi.com/api/character');
  console.log(response);
};

export default getCharacters;
