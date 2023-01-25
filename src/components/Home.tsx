import React, { useEffect, useState } from "react";
import { getPokemon } from "../stores/reducers/getPokemon";
import { useAppDispatch, useAppSector } from "../stores/hook";
import Card from "./Card";
import { setId } from "../stores";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

type Props = {};

function Home({}: Props) {
  const dispatch = useAppDispatch();
  const pokemon = useAppSector((state) => state.pokemonApp.pokemon);

  useEffect(() => {
    dispatch(getPokemon());
  }, []);

  useEffect(() => {
    pokemon.forEach((el, key) => {
      getIdPokemon(el.url, key);
    });
  }, [pokemon]);

  const getIdPokemon = async (url: string, key: number) => {
    const {
      data: { id },
    }: any = await axios.get(url);

    dispatch(setId({ id, key }));
  };

  return (
    <div className="flex flex-wrap ">
      {pokemon.length ? (
        <InfiniteScroll
          height={890}
          dataLength={pokemon.length}
          next={() => dispatch(getPokemon())}
          hasMore={pokemon.length < 100}
          loader={<h4>Loading...</h4>}
        >
          <div className="grid gap-y-14 gap-x-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  mr-0     p-8">
            {pokemon.map((val, key) => (
              <Card key={key} id={val.id} name={val.name} />
            ))}
          </div>
        </InfiniteScroll>
      ) : (
        "loading "
      )}
    </div>
  );
}

export default Home;
