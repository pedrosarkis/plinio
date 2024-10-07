import React, { useState } from 'react';
import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';
import ImageGallery from '../components/ImageGallery';
import ImageModal from '../components/ImageModal';

const drawings = [
  { id: 1, src: '/images/painting/painting1.jfif', title: 'Drawing 1' },
  { id: 2, src: '/images/painting/painting2.jfif', title: 'Drawing 2' },
  { id: 3, src: '/images/painting/painting3.jfif', title: 'Drawing 3' },
  { id: 4, src: '/images/painting/painting4.jfif', title: 'Drawing 4' },
  { id: 5, src: '/images/painting/painting5.jfif', title: 'Drawing 5' },
  { id: 6, src: '/images/painting/painting6.jfif', title: 'Drawing 6' },
  { id: 7, src: '/images/painting/painting7.jfif', title: 'Drawing 7' },
];

const DrawingsPage = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openModal = (image) => {
    const index = drawings.findIndex(img => img.id === image.id);
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const goToPrevious = () => {
    setSelectedImageIndex((prevIndex) => 
      prevIndex > 0 ? prevIndex - 1 : drawings.length - 1
    );
  };

  const goToNext = () => {
    setSelectedImageIndex((prevIndex) => 
      prevIndex < drawings.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <Layout>
      <PageTitle title="Galeria de pintura de Plínio Verani" />
      <div className="container mx-auto px-4">
        <ImageGallery images={drawings} onImageClick={openModal} />
        {selectedImageIndex !== null && (
          <ImageModal
            image={drawings[selectedImageIndex]}
            onClose={closeModal}
            onPrev={goToPrevious}
            onNext={goToNext}
          />
        )}
      </div>
    </Layout>
  );
};

export default DrawingsPage;