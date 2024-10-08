import React, { useEffect, useRef, useState } from 'react';

const ImageDrawer = ({ src, pixelCount, grayscale}) => {
  const canvasRef = useRef(null);
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.crossOrigin = 'Anonymous'; // Para evitar problemas de CORS se a imagem estiver externa
    image.onload = () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      const width = image.width;
      const height = image.height;
      canvas.width = width;
      canvas.height = height;
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(image, 0, 0, pixelCount, pixelCount);
      ctx.drawImage(canvas, 0, 0, pixelCount, pixelCount, 0, 0, width, height);
      setImageUrl(canvas.toDataURL());
    };
  }, [src, pixelCount]);

  return (
    <div>
      {imageUrl && <img src={imageUrl} alt="Pixelized" className={'grayscale' + grayscale} />}
      <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
    </div>
  );
};

export default ImageDrawer;