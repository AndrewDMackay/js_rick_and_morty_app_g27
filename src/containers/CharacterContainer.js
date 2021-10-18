
import React, { useState, useEffect } from 'react';
import CharacterList from '../components/CharacterList';
import CharacterDetail from '../components/CharacterDetail';
import CharacterFavourites from '../components/CharacterFavourites';


const CharacterContainer = () => {
    const [characters, setCharacters] = useState([]);
    const [selectedCharacter, setSelectedCharacter] = useState(null);


    useEffect(() => {
      fetchCharacters();
    }, [])


    const fetchCharacters = function(){
        fetch("https://rickandmortyapi.com/api/character")
        .then(res => res.json())
        .then(characters => setCharacters(characters.results))
    }


    // Promiese.all, fetch all experiment..

    // const fetchAllCharacters = function(){
    //     const promises = [1, 2, 3].map((number) => {
    //         return fetch(
    //             `https://rickandmortyapi.com/api/character/?page=${number}`
    //           ).then(res => res.json())
    //     })
    //     Promise.all(promises)
    //     .then(characters => setAllCharacters(characters.results.flat()))
    // }


    const onCharacterClick = function(character){
        setSelectedCharacter(character);
    }


    const onClickIndex = function(){
        setSelectedCharacter(null);
    }

    // Set favourite, tag method experiment..

    // const handleSetFavourite = (characterToFavourite) => {
    //     const favouriteCharacters = characters.map((character) => {
    //         if(character.name === characterToFavourite.name){
    //             character.favourite = !character.favourite
    //         }
    //         return character
    //     })
    //     setCharacters(favouriteCharacters)
    // }
 

    return (
        <div className="main-container">
            {!selectedCharacter ? <CharacterList characters={characters} onCharacterClick={onCharacterClick}/> : null}
            {selectedCharacter ? <CharacterDetail selectedCharacter={selectedCharacter} onClickIndex={onClickIndex}/> : null}
            {!selectedCharacter ? <CharacterFavourites characters={characters}/> : null}

            {/* Set favourite, tag method experiment.. */}
            {/* {selectedCharacter && <CharacterDetail character={selectedCharacter} onhandleSetFavourite={handleSetFavourite}/>}
            {characters && <CharacterFavourites characters={characters} onselectedCharacter={onCharacterClick} /> } */}

        </div>
    )
}

export default CharacterContainer;

