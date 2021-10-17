
import React from 'react';
import CharacterContainer from './containers/CharacterContainer';

function App() {
  return (

    <div className="App">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap" rel="stylesheet"></link>
      </head>
      <h1>RICK AND MORTY</h1>
     <CharacterContainer />
    </div>
  );
}

export default App;

