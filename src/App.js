import { useState } from 'react';
import './App.css';
import Image_display from './ImageDisplay.js';
import hoshino_battle from './images/Hoshino_Battle_00.png';
import mika from './images/Mika_00.png'
import nagisa from './images/Nagisa_00.png'

function App() {
  const [image, setImage] = useState('');
  return (
    <div className="App">

      <button onClick={() => setImage(hoshino_battle)}>See Hoshino</button>
      <button onClick={() => setImage(mika)}>See Mika</button>
      <button onClick={() => setImage(nagisa)}>See Nagisa</button>
      {<Image_display image_url={image}/>}
    </div>
  );
}

export default App;
