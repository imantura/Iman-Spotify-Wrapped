// spotify.jsx
import React, { useState } from 'react';
import './spotify.css';
import artists from './artists.jsx';

//This ensures buttons will click through artist database
function Execute() {
  const [artistData, setArtistData] = useState(artists[0]);
  const [val, setVal] = useState(0);

  //Previous Button
  const handlePrevious = () => {
    let index = val > 0 ? val - 1 : artists.length - 1;
    setVal(index);
    const artistSlider = artists[index];
    setArtistData(artistSlider);
  };

  //Next Button
  const handleNext = () => {
    let index = val < artists.length - 1 ? val + 1 : 0;
    setVal(index);
    const artistSlider = artists[index];
    setArtistData(artistSlider);
  };

  //HTML code
  return (
    <div>
    <div className="container">
      <button className='btnsPrev' onClick={handlePrevious}></button>
      <div className="artist_listened">
        <h2>{artistData.name}</h2>
        <p> <img src={artistData.image_src} alt = "img not found"></img> </p>
        {artistData.minutes !== null && (
          <strong><p>Minutes Listened: <br /> {artistData.minutes}</p></strong>
        )}   
         {artistData.minutes === null && (
          <strong><p>(Have Fun! And listen on!)</p></strong>
        )}     
        </div>
      <button className='btnsNext' onClick={handleNext}></button>
    </div>
    <br></br><br></br>
    <div className="songs">
        <div id ="top_songs"><strong>My Fave Songs</strong></div>
        <ul>
          {artistData.songs.map((song, index) => (
            <li key={index}>{song}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Execute;


