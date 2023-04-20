import React from "react";

function Search({filterPokemonShown, searchQuery}) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={searchQuery} onChange={filterPokemonShown}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
