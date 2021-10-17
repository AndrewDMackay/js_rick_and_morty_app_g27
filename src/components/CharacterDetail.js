
import React from 'react';
// import CharacterContainer from '../containers/CharacterContainer';

const CharacterDetail = ({selectedCharacter, onClickIndex, onClickFavourite}) => {


    const handleClick = function(){
        onClickIndex();
    }

    const handleFavourite = function(){
        onClickFavourite();
    }

  return (
      
      <div>
          <h2>{selectedCharacter.name}</h2>
          <img src={selectedCharacter.image_url} alt={selectedCharacter.name}/>
          <div className="character-description-container">
          <p>{selectedCharacter.description}</p>
          </div>
          <button onClick={handleFavourite}><strong>FAVOURITE..</strong></button>
          <h3 onClick={handleClick}><strong>BACK TO CHARACTERS..</strong></h3>
      </div>
  )
}

export default CharacterDetail;

