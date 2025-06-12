import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    const numberArray = Array.from({ length: 151 }, (_, i) => i + 1);

    const fetchAPI = async (pokemonId) => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`
      );
      const data = await response.json();

      // 1세대 id 151까지지
      const pokemonData = {
        id: pokemonId,
        name: data.names.find((el) => el.language.name === "ko").name,
        description: data.flavor_text_entries.find(
          (el) => el.language.name === "ko"
        ).flavor_text,
        back: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemonId}.png`,
        front: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`,
      };
      return pokemonData;
    };

    const fetchPokemonDatas = async () => {
      const pokemonDatas = await Promise.all(
        numberArray.map((el) => fetchAPI(el))
      );
      console.log(pokemonDatas);
    };

    fetchPokemonDatas();
  }, []);
  return <></>;
}

export default App;
