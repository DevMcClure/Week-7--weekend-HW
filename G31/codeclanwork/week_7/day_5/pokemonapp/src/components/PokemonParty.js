const PokemonParty = ({ pokemon, onPokemonSelected }) => {

  const pokemonParty = pokemon.filter(pokemon => pokemon.isInParty)

  return (
    <>
      <h3>Add To Party</h3>
      <ul>
        {pokemonParty.map(pokemon => {
          return (
            <li key={pokemon.url}>
              <button onClick={() => onPokemonSelected(pokemon.url)}>{pokemon.name}</button>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default PokemonParty



















// import React from 'react';

// const PokemonMoveSet = ({allPokemon, onPokemonMoveset}) => {

//     const pokeMoves = allPokemon.map((pokemon, index) => {
//       return <option key={index} value={index}>{pokemon.moves}</option>
//     })


//     const handleChange = (event) => {
//       const chosenMoveset = allPokemon[event.target.value]
//       onPokemonMoveset(chosenMoveset);
//     } 

//   return (
//     <select onChange={handleChange}>
//         <option selected disabled value="">Moves</option>
//         {pokeMoves}
//     </select>
//   )
// }

// export default PokemonMoveSet;