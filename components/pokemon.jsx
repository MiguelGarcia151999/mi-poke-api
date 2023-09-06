import React, { useContext } from "react";
import FavoriteContext from "../context/favoritesContext";

const Pokemon = (props) => {
  const { pokemon } = props;
  const { favoritePokemons, updateFavoritePokemons } =
    useContext(FavoriteContext);
    let imgPokemon = `https://pokepedia.pro/imagenes/pokemon/${pokemon.name}.png`


  const redHeart = "❤️";
  const blackHeart = "🖤";
  const heart = favoritePokemons.includes(pokemon.name) ? redHeart : blackHeart;
  const clickHeart = (e) => {
    e.preventDefault();
    updateFavoritePokemons(pokemon.name);
  };

  return (
    <div className="pokemon-card">

      <div className="pokemon-cardHeader">
        <div className="pokemon-numId"> 
          Nº {pokemon.id}
        </div>
        <div className="pokemon-divBotton">
          <button onClick={clickHeart}>
            <div className="pokemon-favorite">{heart}</div>
          </button>
        </div>
      </div>

      <div className="pokemon-cardBody">
        <div className="pokemon-cardBodyDivImg">
          <img src={imgPokemon} alt="" className="pokemon-cardBodyImg"/>
        </div>
      </div>

    </div>
    /*<div className="pokemon-card">
      <div className="pokemon-img-container">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="pokemon-img"
        />
      </div>
      <div className="card-body">
        <div className="card-top">
          <h3>{pokemon.name}</h3>
          <div>#{pokemon.id}</div>
        </div>
        <div className="card-bottom">
          <div className="pokemon-type">
            {pokemon.types.map((type, idx) => {
              return (
                <div key={idx} className={`pokemon-type-text ${type.type.name}`}>
                  {type.type.name}
                </div>
              );
            })}
          </div>
          <button onClick={clickHeart}>
            <div className="pokemon-favorite">{heart}</div>
          </button>
        </div>
      </div>
    </div>*/
  );
};

export default Pokemon;
