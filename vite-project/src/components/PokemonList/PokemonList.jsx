import React, { useState }  from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import './PokemonList.css'
import Pokemon from '../Pokemon/Pokemon'
const PokemonList = () => {
    const[PokemonList,setPokemonList]=useState([])
    const[isLoading,setisLoading]=useState(true)
    async function downloadPokemon()
    {
        // axios.get(url) to download list of 20 pokemons
 const response =await axios.get('https://pokeapi.co/api/v2/pokemon')
//  to get array of first 20 pokemons
 const PokemonResults=response.data.results;
//  iterating url of first 20 pokemons to create an array of promises that will download those 20 pokemons
  const PokemonPromise=PokemonResults.map((pokemon)=>axios.get(pokemon.url))
//   passing promise array to axios.all..array of 20 pokemon detailed data
  const pokemonData=await axios.all(PokemonPromise); 
  console.log(pokemonData);
//   iterating over each data to extract id ,name,image
 const res=(pokemonData.map((pokeData)=>{
    const pokemon=pokeData.data;
    return{ id:pokemon.id,
        name:pokemon.name,
        image:(pokemon.sprites.other)?pokemon.sprites.other.dream_world.front_default:pokemon.sprites.front_shiny,
        types:pokemon.types
    }
  }))
 console.log(res);
 setPokemonList(res)
 setisLoading(false)
    }
    useEffect(()=>{
       downloadPokemon();
    },[])
   


  return (
    <div className='Pokemon-List-Wrapper'>
     Pokemon List
     {(isLoading)?"...isLoading":  PokemonList.map((p)=><Pokemon name={p.name} image={p.image} key={p.id}/>)}
    
     
    </div>
  )
}

export default PokemonList
