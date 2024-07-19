import React, { useEffect, useState } from "react";
import Carousel1 from '../images/Carousel-01.png'
import Carousel2 from '../images/Carousel-002.jpg'
import Carousel3 from '../images/Carousel-003.png'

const BasicSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  const slides = [Carousel1, Carousel2, Carousel3];

  return (
    <div className="card relative">
      <div className="container2 relative" style={{ maxWidth: "100%", overflow: "hidden" }}>
        <div className="carousel grid grid-cols-3 gap-4" style={{ width: "100%", display: "flex"  }}>
          {/* Left arrow */}
          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-transparent text-white font-bold py-4 px-6 rounded-l-md transition duration-300 z-10 hover:bg-transparent hover:text-red-600"
            onClick={prevSlide}
          >
            ❮ {/* Left arrow symbol */}
          </button>
          {/* Slides */}
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item col-span-1 ${
                index === currentSlide ? "active" : ""
              }`}
              style={{
                display: index === currentSlide ? "block" : "none",
              }}
            >
              <img
                src={slide}
                className="carousel-image w-full h-auto md:h-[740px] opacity-75 rounded-xl"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
          {/* Right arrow */}
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-transparent text-white font-bold py-4 px-6 rounded-r-md transition duration-300 z-10 hover:bg-transparent hover:text-red-600"
            onClick={nextSlide}
          >
            ❯ {/* Right arrow symbol */}
          </button>
        </div>
      </div>
    </div>
  );
}

export default BasicSlider;
