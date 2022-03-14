
function CurrentSong({ selectedSong }) {
  return (
    <div className={current}>
      <h1>{ selectedSong.title }</h1>
      <h2>{ selectedSong.artist }</h2>
    </div>
  );
}

export default CurrentSong;
