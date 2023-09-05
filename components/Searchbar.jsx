import React from "react";
import { searchPokemon } from "../apiFetch/api";
import ModalTarjetaPokemon from "../components/Modal";
const { useState } = React;

const Searchbar = () => {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [contenidoModal, setContenidoModal] = useState("");

  const onChange = (e) => {
    //console.log(e.target.value);
    setSearch(e.target.value);
  };

  const BonClick = async (e) => {
    setLoading(true);
    let data = await searchPokemon(search);
    const { name, sprites } = data;
    const { front_default } = data.sprites;
    console.log("Hola", data);
    let imgPokemon1 = `https://img.pokemondb.net/artwork/large/${data.name}.jpg`;
    let imgPokemon = `https://pokepedia.pro/imagenes/pokemon/${data.name}.png`

    const contenidoModal = (
      <div className="divModal-Padre">
        <div className="divImagen-Hijo">
          <img src={imgPokemon} alt={name} className="modalPokemon-img" />
        </div>
      </div>
    );
    setPokemon(data);
    setContenidoModal(contenidoModal);
    setOpenModal(!openModal);
  };

  return (
    <>
      <div className="searchbar-container">
        <div className="searchbar">
          <input placeholder="Buscar Pokemon..." onChange={onChange} />
        </div>
        <div className="searchbar-bttn">
          <button onClick={() => BonClick()}>Buscar</button>
        </div>
      </div>
      <ModalTarjetaPokemon
        estado={openModal}
        cambiarEstado={setOpenModal}
        contenido={contenidoModal}
      >
        <contenido1>{contenidoModal}</contenido1>
      </ModalTarjetaPokemon>
    </>
  );
};

export default Searchbar;
