function Song({ song, handleClick, i  }) {
  return (
    <div onClick={() => handleClick(i)} style={{ marginBottom: '4rem'}}>
      <h1>{song.title}</h1>
      <h1>{song.artist}</h1>
    </div>
  );
}

export default Song;
