import React from "react";
import FavoriteContext from "../context/favoritesContext";

const { useContext } = React;

const Navbar = () => {
  const { favoritePokemons } = useContext(FavoriteContext);
  console.log(favoritePokemons);

  let imageUrl =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

  return (
    <nav>
      <div />
      <div>
        <img src={imageUrl} alt="pokeapi-logo" className="navbar-image" />
      </div>
      <div className="like">
        <div>&#10084;&#65039; </div>
        <div className="count">{favoritePokemons.length}</div>
      </div>
      
    </nav>
  );
};

export default Navbar;