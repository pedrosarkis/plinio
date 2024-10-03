import React, { useState } from 'react';
import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';
import ImageGallery from '../components/ImageGallery';
import ImageModal from '../components/ImageModal';

const drawings = [
  { id: 1, src: '/images/drawings/me.png', title: 'Drawing 1' },
  { id: 2, src: '/images/drawings/partidas.png', title: 'Drawing 2' },
  // Add more drawings here
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