function CurrentSong({ selectedSong }) {
  return (
    <div>
      <h1>{ selectedSong.title }</h1>
      <h2>{ selectedSong.artist }</h2>
    </div>
  );
}

export default CurrentSong;
