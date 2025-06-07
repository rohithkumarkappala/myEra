import { useState, useRef } from 'react';
import Canvas from './components/Canvas';
import StickerButton from './components/StickerButton';
import './App.css';

function App() {
  const [stickers, setStickers] = useState([]);
  const stageRef = useRef(null);

  const addSticker = (imageSrc) => {
  const gridSize = 40;
  const x = Math.round(50 / gridSize) * gridSize; // Snap to nearest 40px
  const y = Math.round(50 / gridSize) * gridSize;
  setStickers([
    ...stickers,
    {
      id: Date.now(),
      imageSrc,
      x,
      y,
    },
  ]);
};

 const handleStickerDragEnd = (id, position) => {
  const gridSize = 40;
  const x = Math.round(position.x / gridSize) * gridSize;
  const y = Math.round(position.y / gridSize) * gridSize;
  setStickers(
    stickers.map((sticker) =>
      sticker.id === id ? { ...sticker, x, y } : sticker
    )
  );
};
  const handleStickerDelete = (id) => {
    setStickers(stickers.filter((sticker) => sticker.id !== id));
  };

  const downloadCanvas = () => {
    const dataURL = stageRef.current.toDataURL();
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'canvas.png';
    link.click();
  };

  return (
    <div className="app">
      <h1>Sticker Canvas</h1>
      <div className="container">
        <Canvas
          stickers={stickers}
          onStickerDragEnd={handleStickerDragEnd}
          onStickerDelete={handleStickerDelete}
          stageRef={stageRef}
        />
        <div className="buttons">
          <StickerButton
            imageSrc="/stickers/sticker1.png"
            onClick={() => addSticker('/stickers/sticker1.png')}
          />
          <StickerButton
            imageSrc="/stickers/sticker2.png"
            onClick={() => addSticker('/stickers/sticker2.png')}
          />
          <StickerButton
            imageSrc="/stickers/sticker3.png"
            onClick={() => addSticker('/stickers/sticker3.png')}
          />
          <button onClick={downloadCanvas}>Download Canvas</button>
        </div>
      </div>
    </div>
  );
}

export default App;