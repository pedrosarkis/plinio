import React from 'react';
import Image from 'next/image';

const ImageModal = ({ image, onClose, onPrev, onNext }) => {
  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={onClose}>
      <div className="max-w-4xl w-full mx-4" onClick={handleContentClick}>
        <div className="relative w-full h-[80vh]">
          <Image
            src={image.src}
            alt={image.title}
            layout="fill"
            objectFit="contain"
          />
          <button
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={onClose}
          >
            ×
          </button>
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl"
            onClick={onPrev}
          >
            ‹
          </button>
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl"
            onClick={onNext}
          >
            ›
          </button>
        </div>
        <div className="bg-white p-4 mt-4">
          <h2 className="text-xl font-bold">{image.title}</h2>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
