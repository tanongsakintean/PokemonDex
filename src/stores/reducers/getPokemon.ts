import { useEffect } from 'react';
import { InitialState } from './../../type';
import { RootState } from './../index';
import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'


const pokemons:InitialState  = {
    pokemon:[]
}


export const getPokemon = createAsyncThunk(
    'pokemonApp/Pokemon',
   async (isNext,{getState}) => {


   const {data:{results}} =  await axios.get("https://pokeapi.co/api/v2/pokemon")
   results.forEach(async (item:{name: any,url:any}) => {
   pokemons.pokemon.push({ name:item.name, url:item.url,id:0 });


   });

   return pokemons;


   }
)