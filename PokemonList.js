import React from 'react'

export default function PokemonList({pokemon}) {
  return (
    <div>
        {pokemon.map(poc => (
            <p key={poc}>{poc}</p>
        ))}
    </div>
  )
}

