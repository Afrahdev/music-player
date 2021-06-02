import React, { useState } from 'react';
// import css
import './styles/app.scss'
// import components
import Player from './components/player';
import Song from './components/song';
// importing util
import Data from './util'
function App() {
  // state
  const [songs, setsongs] = useState(Data())
  const [currentsong, setcurrentsong] = useState(songs[0])
  return (
    <div className="App">
      <Song currentsong={currentsong} />
      <Player />
    </div>
  );
}

export default App;
