import { useState } from 'react';
import './App.css';

function App() {
  const [musicName, setMusicName] = useState("");

  const playSound = (soundFile, name) => {
    const audio = new Audio(`./Audio/${soundFile}`);
    setMusicName(name);
    audio.play();
  };

  return (
    <div id='drum-machine'>
      <div id="display">{musicName}</div>
      <button className="drum-pad" onClick={() => playSound('Heater-1.mp3', 'Heater-1')}>Q</button>
      <button className="drum-pad" onClick={() => playSound('Heater-2.mp3', 'Heater-2')}>W</button>
      <button className="drum-pad" onClick={() => playSound('Heater-3.mp3', 'Heater-3')}>E</button>
      <button className="drum-pad" onClick={() => playSound('Heater-4.mp3', 'Heater-4')}>A</button>
      <button className="drum-pad" onClick={() => playSound('Heater-5.mp3', 'Heater-5')}>S</button>
      <button className="drum-pad" onClick={() => playSound('Heater-6.mp3', 'Heater-6')}>D</button>
      <button className="drum-pad" onClick={() => playSound('Heater-7.mp3', 'Heater-7')}>Z</button>
      <button className="drum-pad" onClick={() => playSound('Heater-8.mp3', 'Heater-8')}>X</button>
      <button className="drum-pad" onClick={() => playSound('Heater-9.mp3', 'Heater-9')}>C</button>
    </div>
  );
}

export default App;
