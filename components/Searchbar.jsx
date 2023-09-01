import React from "react";
import { searchPokemon } from "../apiFetch/api";
import ModalTarjetaPokemon from "../components/Modal";
const { useState } = React;

const Searchbar = () => {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false)

  const onChange = (e) => {
    //console.log(e.target.value);
    setSearch(e.target.value);
  };

  const BonClick = async (e) => {
    setLoading(true)
    let data = await searchPokemon(search);
    let pokeName = data.name
    setPokemon(pokeName);
    setOpenModal(true);


  };

  return (
    <>
      <div className="searchbar-container">
        <div className="searchbar">
          <input placeholder="Buscar Pokemon..." onChange={onChange} />
        </div>
        <div className="searchbar-bttn">
          <button className={loading ? `inactivo` : `activo`} onClick={() => BonClick()}>Buscar</button>
        </div>
      </div>
      {openModal && (
        <ModalTarjetaPokemon
          pokemon={pokemon}
          setOpenModal={setOpenModal}
          openModal={openModal}
        />
      )}
    </>
  );
};

export default Searchbar;
