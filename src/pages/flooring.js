import React, { useState, useCallback, useMemo }  from "react"; 
import Modal from "react-modal";
import "../css/services-gallery.css";
import { images } from "../components/Services-Gallery/flooring";
import ImageGallery from "../components/Services-Gallery/image-gallery";

Modal.setAppElement("#root");

const Gallery = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [visibleStart, setVisibleStart] = useState(0);
  const visibleCount = 4;

  const openModal = useCallback((image) => {
    setCurrentImage(image);
    setModalIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalIsOpen(false);
    setCurrentImage(null);
  }, []);

  const nextImages = useCallback(() => {
    setVisibleStart((prev) =>
      Math.min(prev + visibleCount, images.length - visibleCount)
    );
  }, []);

  const prevImages = useCallback(() => {
    setVisibleStart((prev) => Math.max(prev - visibleCount, 0));
  }, []);

  const visibleImages = useMemo(
    () => images.slice(visibleStart, visibleStart + visibleCount),
    [visibleStart]
  );

  return (
    <div className="page-wrapper">
      <header className="page-header">
       <button className="go-back" onClick={e => window.location.href='/'}>Go Back Home</button>

        <h1>Flooring</h1>
        <p>New floors will transform any space!</p>
      </header>


      <section className="gallery-section">
        <ImageGallery
          images={visibleImages}
          visibleStart={visibleStart}
          totalImages={images.length}
          visibleCount={visibleCount}
          onPrev={prevImages}
          onNext={nextImages}
          onImageClick={openModal}
        />
      </section>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        {currentImage && (
          <div>
            <button
              className="modal-close-btn"
              onClick={closeModal}
              aria-label="Close modal"
            >
              &times;
            </button>
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              className="modal-image"
            />
          </div>
        )}
      </Modal>
    </div>
  );
};

export default React.memo(Gallery);