import React from "react";

type Props = {};

function Card({ id, name }: { id: number; name: string }) {
  return (
    <div className="bg-[#f1f2f3] shadow-md rounded-md  cursor-pointer ">
      <div className="flex justify-center  items-center ">
        <img
          className="hover:transform hover:scale-110 transition duration-500 ease-in-out"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          alt=""
        />
      </div>
      <div className="bg-red-500  p-6 text-center ">
        <h5 className="text-white text-2xl font-bold font-mono">{name}</h5>
      </div>
    </div>
  );
}

export default Card;
