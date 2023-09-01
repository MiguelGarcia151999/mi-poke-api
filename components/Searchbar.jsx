import React from "react";
import { searchPokemon } from "../apiFetch/api";
const { useState } = React;

const Searchbar = () => {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState("");

  const onChange = (e) => {
    //console.log(e.target.value);
    setSearch(e.target.value);
  };

  const BonClick = async (e) => {
    const data = await searchPokemon(search);
    setPokemon(data);
  };

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input placeholder="Buscar Pokemon..." onChange={onChange} />
      </div>
      <div className="searchbar-bttn">
        <button onClick={() => BonClick()}>Buscar</button>
      </div>
    </div>
  );
};

export default Searchbar;
