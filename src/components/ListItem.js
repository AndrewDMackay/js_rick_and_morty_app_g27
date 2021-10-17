
import React from 'react';

const ListItem = ({character, onCharacterClick}) => {

  const handleClick = function(){
    onCharacterClick(character);
  }


  return <div className="list-item" onClick={handleClick}>
            <img src={character.image} alt={character.name}/>
            <button>{character.name}</button>
            </div>
}

export default ListItem;

