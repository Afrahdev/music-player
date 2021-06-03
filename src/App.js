import React, { useState } from 'react';
// import css
import './styles/app.scss'
// import components
import Player from './components/player';
import Song from './components/song';
import Library from './components/library';
// importing util
import Data from './util'
function App() {
  // state
  const [songs, setsongs] = useState(Data())
  const [currentsong, setcurrentsong] = useState(songs[0])
  const [isplaying, setisplaying] = useState(false)
  return (
    <div className="App">
      <Song currentsong={currentsong} />
      <Player
       isplaying={isplaying}
       setisplaying={setisplaying}
       currentsong={currentsong} />
       < Library Song={Song} />
    </div>
  );
}

export default App;
