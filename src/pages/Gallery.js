<<<<<<< HEAD
import React from "react";
import "../components/Home-Components/featuredGallery.css";
import Image1 from "../assets/images/FB_IMG_1609818291318_Original.jpeg";
import Image2 from "../assets/images/FB_IMG_1609818276266_Original.jpeg";
import Image3 from "../assets/images/FB_IMG_1609818328585_Original.jpeg";
import Image4 from "../assets/images/FB_IMG_1606604883160_Original.jpeg";
import Image5 from "../assets/images/FB_IMG_1609818199940_Original.jpeg";
import Image6 from "../assets/images/FB_IMG_1609818315477_Original.jpeg";
import Image7 from "../assets/images/20210707_155857_Original.jpeg";
import Image8 from "../assets/images/FB_IMG_1606604670891_Original.jpeg";
import Image9 from "../assets/images/FB_IMG_1606604901321_Original.jpeg";
import Image10 from "../assets/images/FB_IMG_1606604911539_Original.jpeg";
import Image11 from "../assets/images/FB_IMG_1606604956514_Original.jpeg";
import Image12 from "../assets/images/FB_IMG_1606604982389_Original.jpeg";
import Image13 from "../assets/images/FB_IMG_1606605002519_Original.jpeg";
import Image14 from "../assets/images/FB_IMG_1609818258950_Original.jpeg";
import Image15 from "../assets/images/IMG_0162.jpeg";
import Image16 from "../assets/images/IMG_0163.jpeg";
import Image17 from "../assets/images/IMG_0164.jpeg";
import Image18 from "../assets/images/IMG_0165.jpeg";
import Image19 from "../assets/images/IMG_0166.jpeg";
import Image20 from "../assets/images/IMG_0167.jpeg";
import Image21 from "../assets/images/IMG_0276.jpeg";
import Image22 from "../assets/images/IMG_0466.jpeg";
import Image23 from "../assets/images/IMG_0468.jpeg";
import Image24 from "../assets/images/IMG_0631.jpeg";
=======
import React, {
  useState,
  useCallback,
  useMemo,
  useRef,
  useEffect,
} from "react";
import Modal from "react-modal";
import "../pages/gallery.css";
import { images } from "./gallery-img";
import { services } from "./Services-list";
>>>>>>> b68f94c4aeb02017e3b37f839dfaadc5d67eb87c

Modal.setAppElement("#root");

export const Gallery = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [visibleStart, setVisibleStart] = useState(0);
  const [expandedService, setExpandedService] = useState(null);
  const visibleCount = 4;
  const servicesSectionRef = useRef(null);

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

  const toggleService = (index) => {
    setExpandedService(expandedService === index ? null : index);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        servicesSectionRef.current &&
        !servicesSectionRef.current.contains(event.target)
      ) {
        setExpandedService(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="page-wrapper">
      <header className="page-header">
        <h1>Elite Construction & Renovations</h1>
        <p>Transforming Spaces, Building Dreams</p>
      </header>

      <section className="services-section" ref={servicesSectionRef}>
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-item ${
                expandedService === index ? "expanded" : ""
              }`}
              onClick={() => toggleService(index)}
            >
              <div className="service-header">
                <h3>{service.title}</h3>
                <span className="service-arrow">&#9656;</span>
              </div>
              <div className="service-description">
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="gallery-section">
        <h2>Our Work</h2>
        <div className="image-gallery-wrapper">
          {visibleStart > 0 && (
            <button
              className="navigation-btn navigation-btn-prev"
              onClick={prevImages}
            >
              &#10094;
            </button>
          )}
          <div className="image-grid">
            {visibleImages.map((image) => (
              <div
                key={image.id}
                className="image-tile"
                onClick={() => openModal(image)}
              >
                <img src={image.src} alt={image.alt} loading="lazy" />
              </div>
            ))}
          </div>
          {visibleStart + visibleCount < images.length && (
            <button
              className="navigation-btn navigation-btn-next"
              onClick={nextImages}
            >
              &#10095;
            </button>
          )}
        </div>
      </section>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        {currentImage && (
          <div>
            <button className="modal-close-btn" onClick={closeModal}>
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
