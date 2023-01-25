import { getPokemon } from './reducers/getPokemon';
import axios from 'axios'
import { InitialState } from '../type';
import {createSlice , createAsyncThunk , PayloadAction, configureStore} from '@reduxjs/toolkit'


const initialState:InitialState = {
    pokemon:[]
}


const PokemonSlice = createSlice({
    name:"pokemonApp",
    initialState,
    reducers:{
        setId:(state,action) => {
            const {id,key} = action.payload;
            state.pokemon[key].id = id;
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(getPokemon.fulfilled,(state, action) => {
            state.pokemon.push(...action.payload.pokemon);
        });
    }
});


export const store  = configureStore({
    reducer:{
        pokemonApp:PokemonSlice.reducer
    }
})


export const {setId} = PokemonSlice.actions;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
