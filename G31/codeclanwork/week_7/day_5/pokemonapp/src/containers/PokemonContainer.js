import React, {useState, useEffect} from 'react';
import PokemonSelect from '../components/PokemonSelect';
import PokemonDetail from '../components/PokemonDetail';
import PokemonParty from '../components/PokemonParty'


const PokemonContainer = () => {

    const [pokemon, setPokemon] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    // const [PokeMOveSet, setPokemonMoveSet] = useState()

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/")
        .then(res => res.json())
        .then(data => setPokemon(data.results))
      }, []);

   


    const handlePokemonSelect = (url) => {
      fetch(url)
      .then(res => res.json())
      .then(data => setSelectedPokemon(data))
    
    }

    const handlePartyToggle = (url) => {
      const updatedPokemon = pokemon.map((pokemon) => {
        return pokemon.url === url 
          ? {...pokemon, isInParty: !pokemon.isInParty}
          : pokemon
      })
      setPokemon(updatedPokemon)
    }

    // const handlePokemonMoveSet = (chosenMoveset) => {
    //     fetch(chosenMoveset)
    //     .then(res = res.json())
    //     .then(data = setPokemonMoveSet(data))
    // }

    


    

  return (
        <>
       <h1>PokeDex</h1>
        <PokemonSelect allPokemon={pokemon} onPokemonSelect={handlePokemonSelect} />
        {/* { selectedPokemon ? <PokemonDetail pokemon={selectedPokemon} /> : null } */}
        <PokemonDetail pokemon={selectedPokemon} onPartyToggle={handlePartyToggle} />
        <PokemonParty pokemon={pokemon} onPokemonSelected={handlePokemonSelect} />
        </>
    )
  
}

export default PokemonContainer;
