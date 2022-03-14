import { useEffect, useState } from 'react';
import SongLibrary from './components/SongLibrary';
import CurrentSong from './components/CurrentSong';

function App() {
  const [ currentSongIndex, setCurrentSongIndex ] = useState(-1);
  const [ songs, setSongs ] = useState([
    { title: 'Happy Birthday', artist: 'Blair' },
    { title: 'Hello', artist: 'Adele' },
    { title: 'Purple Rain', artist: 'Prince' },
    { title: 'Freebird', artist: 'Lynard Skynard' },
    { title: 'Thriller', artist: 'MJ' },
    { title: 'Sugar', artist: 'Maroon 5' },
    { title: 'Timber', artist: 'Ke$ha' },
    { title: 'Call Me Maybe', artist: 'Nick McMillen' },
    { title: 'Friday', artist: 'Beyonceeee' },
    { title: 'Bohemian Rhapsody', artist: 'Queen' },
  ]
  );
  const [ selectedSong, setSelectedSong ] = useState({});

  useEffect(() => {
    // go get my songs pleas
    console.log('currentSong Changed')
    setSelectedSong(songs[currentSongIndex])
  }, [currentSongIndex])

  const handleClick = (i) => {
    setCurrentSongIndex(i)
    console.log(currentSongIndex)
    console.log(songs[currentSongIndex]);
  }

  return (
    <div className="App">
      {selectedSong && <CurrentSong selectedSong={selectedSong} />}
      <SongLibrary songs={songs} handleClick={handleClick} />
    </div>
  );
}

export default App;
