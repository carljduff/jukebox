import Song from './Song';

function SongLibrary({ songs, handleClick }) {

  return (
    <div>
      {
        songs.map((song, i) => {
          return <Song key={i} song={song} handleClick={handleClick} i={i} />
        })
      }
    </div>
  );
}

export default SongLibrary;
