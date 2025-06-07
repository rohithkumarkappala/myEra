import { Stage, Layer, Image } from 'react-konva';
import useImage from 'use-image';

const Sticker = ({ sticker, onDragEnd, onDelete }) => {
  const [image] = useImage(sticker.imageSrc);
  return (
    <Image
      image={image}
      x={sticker.x}
      y={sticker.y}
      width={50}
      height={50}
      draggable
      onDragEnd={(e) => {
        onDragEnd(sticker.id, {
          x: e.target.x(),
          y: e.target.y(),
        });
      }}
      onDblClick={() => onDelete(sticker.id)}
    />
  );
};

const Canvas = ({ stickers, onStickerDragEnd, stageRef, onStickerDelete }) => {
  return (
    <Stage
      width={600}
      height={400}
      style={{ border: '1px solid black' }}
      ref={stageRef}
    >
      <Layer>
        {stickers.map((sticker) => (
          <Sticker
            key={sticker.id}
            sticker={sticker}
            onDragEnd={onStickerDragEnd}
            onDelete={onStickerDelete}
          />
        ))}
      </Layer>
    </Stage>
  );
};

export default Canvas;