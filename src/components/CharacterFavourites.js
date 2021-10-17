
import React from 'react';
import ListItem from './ListItem';

const CharacterFavourites = ({characters, onCharacterClick}) => {

    const charactersFavourites = characters.map((character, index) => {
      return <ListItem character={character} key={index} onCharacterClick={onCharacterClick} />
    })

    return (
        <div className="flexbox">
            <div className="flexbox-container">
                <h1 className="favourite-character-heading">FAVOURITE CHARACTERS</h1>
                {charactersFavourites}
            </div>
        </div>
    )
}

export default CharacterFavourites;

