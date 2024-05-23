import { useState } from 'react';
import slide1 from './slider img/slider1.svg';
import slide2 from './slider img/slider2.svg';
import slide3 from './slider img/slider3.svg';
import slider_next from './slider img/slider-vector-next.svg';
import slider_prev from './slider img/slider-vector-prev.svg';
import './Slider.scss';

const slideImages = [slide1, slide2, slide3];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? slideImages.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide(prev => (prev === slideImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="slider">
      <img
        src={slideImages[currentSlide]}
        alt={`slide${currentSlide + 1}`}
        className="slider__picture"
      />
      <div className="slider-content">
        <div className="slider-buttons">
          <div className="slider-button_left">
            <button className="slider-button" onClick={prevSlide}>
              <img src={slider_prev} alt="slider_left" />
            </button>
          </div>
          <div className="slider-button_right">
            <button className="slider-button" onClick={nextSlide}>
              <img src={slider_next} alt="slider_right" />
            </button>
          </div>
        </div>
        <h2 className="slider-text-main">INTRO</h2>
        <h2 className="slider-text">
          By the same illusion which lifts the horizon.
        </h2>
      </div>
    </div>
  );
};

export default Slider;
