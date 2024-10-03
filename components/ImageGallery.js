import React from 'react';
import Image from 'next/image';

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {images.map((image) => (
        <div
          key={image.id}
          className="cursor-pointer hover:opacity-80 transition-opacity aspect-square relative"
          onClick={() => onImageClick(image)}
        >
          <Image
            src={image.src}
            alt={image.title}
            layout="fill"
            objectFit="cover"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;