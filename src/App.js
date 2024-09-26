import { useState } from 'react';
import './App.css';
import Image_display from './ImageDisplay.js';
import hoshino_battle from './images/Hoshino_(Battle)_00.png';
import mika from './images/Mika_00.png'

function App() {
  const [image, setImage] = useState('');
  return (
    <div className="App">

      <button onClick={() => setImage(hoshino_battle)}>See Hoshino</button>
      <button onClick={() => setImage(mika)}>See Mika</button>
      {<Image_display image_url={image}/>}
    </div>
  );
}

export default App;
