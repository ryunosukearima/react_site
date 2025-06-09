import React from 'react'

const music = {
  Sound: "/audio/ENDLESS_DANCE.mp3",
  name : "Endless Dance.mp3",
};

const Sound = () => {
  return (
    <div>
      <audio src={music.Sound} controls></audio>
      <h1>{music.name}</h1>
    </div>
  )
}

export default Sound