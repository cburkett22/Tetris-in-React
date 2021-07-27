import React from 'react';
import Tetris from './components/Tetris';
import BackgroundMusic from './audio/tetris-audio.mp3';
import { Howl, Howler } from 'howler';

const audio = [
  {
    sound: BackgroundMusic,
    label: "Play Music"
  }
];

const playAudio = (src) => {
  const sound = new Howl({ src });
  sound.play();
};

const renderAudio = () => {
  return audio.map((soundObj, index) => {
    return (
      <button
        key={index}
        onClick={(() => playAudio(soundObj.sound))}
      >
        {soundObj.label}
      </button>
    )
  })
};

const App = () => (
  <div className="App">
    {renderAudio()}
    <Tetris />
  </div>
)

export default App