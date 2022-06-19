import React from 'react';
const PokemonDetail = ({pokemon, onPartyToggle}) => {

    if(!pokemon){
        return null
    }


    const handleClick = () => {
        onPartyToggle(pokemon.url)
  }

  
  const partyText = pokemon.isInParty ? 'Remove from party' : 'Add to party'




    return (
        <>
        <h2>{pokemon.name.toUpperCase()}</h2>
        Common:<img src={pokemon.sprites.front_default} alt={pokemon.name} /> Shiny: <img src={pokemon.sprites.front_shiny}/>
        <button onClick={handleClick}>{partyText}</button>
        
        </>
    )

}

export default PokemonDetail;