import React from "react";

const ModalTarjetaPokemon = ({ pokemon, openModal, setOpenModal }) => {
  return (
    <>
      <div className="pokeModal">
        <p>{pokemon}</p>
        <button onClick={() => setOpenModal(false)}>CerrarModal</button>
      </div>
    </>
  );
};

export default ModalTarjetaPokemon;
