
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
      
    <div className="flexbox">
        <div className="flexbox-container">
            <div className="detail-item">
                <h2>{selectedCharacter.name}</h2>
                <img src={selectedCharacter.image} alt={selectedCharacter.name}/>
                <div className="character-detail-container">
                <p>{selectedCharacter.status}</p>
                </div>
                <button onClick={handleFavourite}><strong>FAVOURITE..</strong></button>
                <h3 onClick={handleClick}><strong>BACK TO CHARACTERS..</strong></h3>
            </div>    
        </div>
    </div>  
  )
}

export default CharacterDetail;

