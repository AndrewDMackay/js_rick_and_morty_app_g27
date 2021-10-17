
import React from 'react';


const CharacterFavourites = ({characters, onCharacterClick}) => {
    

    const filteredCharacters = characters.filter((character) => {
        return character.favourite
    })


    const characterFavourites = filteredCharacters.map((character, index) => {
        return (
        <div>
        <img key={index} src={character.image} alt={character.name} onClick={() => {onCharacterClick(character)}}/>
        </div>
        )
    })


    return (
        <div className="flexbox">
            <div className="flexbox-container">
                <h1>FAVOURITE CHARACTERS</h1>
                {characterFavourites}
            </div>
        </div>
    )
}

export default CharacterFavourites;

