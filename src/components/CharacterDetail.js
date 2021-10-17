
import React from 'react';
// import CharacterContainer from '../containers/CharacterContainer';

const CharacterDetail = ({selectedCharacter, onClickIndex}) => {


    const handleClick = function(){
        onClickIndex();
    }


  return (
      
    <div className="flexbox">
        <div className="flexbox-container">
            <div className="detail-item">
                <img src={selectedCharacter.image} alt={selectedCharacter.name}/>
                <h2>{selectedCharacter.name}</h2>
                <p>Status [ {selectedCharacter.status} ]</p>
                <p>Species [ {selectedCharacter.species} ]</p>
                <p>Gender [ {selectedCharacter.gender} ]</p>
                <br></br>
                <button><strong>FAVOURITE..</strong></button>
                <br></br>
                <button onClick={handleClick}><strong>BACK TO CHARACTERS..</strong></button>
            </div>    
        </div>
    </div>  
  )
}

export default CharacterDetail;

