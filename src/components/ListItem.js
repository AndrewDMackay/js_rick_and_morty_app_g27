
import React from 'react';

const ListItem = ({character, onCharacterClick}) => {

  const handleClick = function(){
    onCharacterClick(character);
  }


  return <div className="list-item" onClick={handleClick}>
            <img src={character.image_url} alt={character.name}/>
            <h4>{character.name}</h4>
            </div>
}

export default ListItem;

