
import React, { useState, useEffect } from 'react';
import CharacterList from '../components/CharacterList';
import CharacterDetail from '../components/CharacterDetail';
import CharacterFavourites from '../components/CharacterFavourites';


const CharacterContainer = () => {
    const [characters, setCharacters] = useState([]);
    const [selectedCharacter, setSelectedCharacter, setFavouriteCharacter] = useState(null);
    const [favouriteCharacters, setFavouriteCharacters] = useState([]);

    useEffect(() => {
      fetchCharacters();
    }, [])


    const fetchCharacters = function(){
        fetch("https://rickandmortyapi.com/api/character")
        .then(res => res.json())
        .then(characters => setCharacters(characters.results))
    }


    const onCharacterClick = function(character){
        setSelectedCharacter(character);
    }


    const onClickIndex = function(){
        setSelectedCharacter(null);
    }

 
    return (
        <div className="main-container">
            {!selectedCharacter ? <CharacterList characters={characters} onCharacterClick={onCharacterClick}/> : null}
            {selectedCharacter ? <CharacterDetail selectedCharacter={selectedCharacter} onClickIndex={onClickIndex}/> : null}
            {!selectedCharacter ? <CharacterFavourites characters={characters}/> : null}
        </div>
    )
}

export default CharacterContainer;

