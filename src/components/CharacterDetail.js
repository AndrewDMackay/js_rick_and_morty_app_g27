
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
                <img src={selectedCharacter.image} alt={selectedCharacter.name}/>
                <h2>{selectedCharacter.name}</h2>
                <p>{selectedCharacter.status}</p>
                <p>{selectedCharacter.species}</p>
                <p>{selectedCharacter.type}</p>
                <br></br>
                <button onClick={handleFavourite}><strong>FAVOURITE..</strong></button>
                <br></br>
                <button onClick={handleClick}><strong>BACK TO CHARACTERS..</strong></button>
            </div>    
        </div>
    </div>  
  )
}

export default CharacterDetail;



// Key	Type	Description
// id	int	The id of the character.
// name	string	The name of the character.
// status	string	The status of the character ('Alive', 'Dead' or 'unknown').
// species	string	The species of the character.
// type	string	The type or subspecies of the character.
// gender	string	The gender of the character ('Female', 'Male', 'Genderless' or 'unknown').
// origin	object	Name and link to the character's origin location.
// location	object	Name and link to the character's last known location endpoint.
// image	string (url)	Link to the character's image. All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.
// episode	array (urls)	List of episodes in which this character appeared.
// url	string (url)	Link to the character's own URL endpoint.
// created	string	Time at which the character was created in the database.