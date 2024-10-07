import React, { useState } from 'react';
import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';
import ImageGallery from '../components/ImageGallery';
import ImageModal from '../components/ImageModal';

const sculptures = [
    { id: 1, src: '/images/sculpture/sculpture1.jfif', title: 'Sculpture 1' },
    { id: 2, src: '/images/sculpture/sculpture2.jfif', title: 'Sculpture 2' },
    { id: 3, src: '/images/sculpture/sculpture3.jfif', title: 'Sculpture 3' },
    { id: 4, src: '/images/sculpture/sculpture4.jfif', title: 'Sculpture 4' },
    { id: 5, src: '/images/sculpture/sculpture5.jfif', title: 'Sculpture 5' },
    { id: 6, src: '/images/sculpture/sculpture6.jfif', title: 'Sculpture 6' },
    { id: 7, src: '/images/sculpture/sculpture7.jfif', title: 'Sculpture 7' },
    { id: 8, src: '/images/sculpture/sculpture8.jfif', title: 'Sculpture 8' },
    { id: 9, src: '/images/sculpture/sculpture9.jfif', title: 'Sculpture 9' },
];

const SculpturePage = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openModal = (image) => {
    const index = sculptures.findIndex(img => img.id === image.id);
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const goToPrevious = () => {
    setSelectedImageIndex((prevIndex) => 
      prevIndex > 0 ? prevIndex - 1 : sculptures.length - 1
    );
  };

  const goToNext = () => {
    setSelectedImageIndex((prevIndex) => 
      prevIndex < sculptures.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <Layout>
      <PageTitle title="Galeria de desenhos de Plínio Verani" />
      <div className="container mx-auto px-4">
        <ImageGallery images={sculptures} onImageClick={openModal} />
        {selectedImageIndex !== null && (
          <ImageModal
            image={sculptures[selectedImageIndex]}
            onClose={closeModal}
            onPrev={goToPrevious}
            onNext={goToNext}
          />
        )}
      </div>
    </Layout>
  );
};

export default SculpturePage;