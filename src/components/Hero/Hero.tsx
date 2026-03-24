import { useState, useRef, type TouchEvent } from "react";
import "./Hero.css";
import paws from "../../assets/decorations/paws.svg";
import phoneMockup1 from "../../assets/mockups/phone-mockup-1.svg";
import phoneMockup2 from "../../assets/mockups/phone-mockup-2.svg";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const phones = [
    { src: phoneMockup1, alt: "App mockup", className: "phone phone-side" },
    { src: phoneMockup2, alt: "App mockup main", className: "phone phone-main" },
    { src: phoneMockup1, alt: "App mockup", className: "phone phone-side" },
  ];

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;

    if (diff > threshold && currentSlide < phones.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else if (diff < -threshold && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <section className="hero">
      <img src={paws} alt="" className="hero-paws hero-paws-left" />
      <img src={paws} alt="" className="hero-paws hero-paws-right" />

      <div className="hero-content">
        <h1>BUILD HABITS TOGETHER</h1>
        <p>
          Lorem ipsum blandit dolor<br />
          pellentesque viverra felis nec sed id<br />
          eu malesuada.
        </p>
        <button className="btn">Join the beta</button>
      </div>

      <div className="hero-mockups hero-mockups-desktop">
        <img src={phoneMockup1} alt="App mockup" className="phone phone-left" />
        <img src={phoneMockup2} alt="App mockup main" className="phone phone-center" />
        <img src={phoneMockup1} alt="App mockup" className="phone phone-right" />
      </div>

      <div 
        className="hero-carousel"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          className="hero-carousel-track"
          style={{ transform: `translateX(-${currentSlide * 220}px)` }}
        >
          {phones.map((phone, index) => (
            <div 
              key={index} 
              className={`hero-carousel-slide ${currentSlide === index ? 'active' : ''}`}
            >
              <img src={phone.src} alt={phone.alt} className="phone" />
            </div>
          ))}
        </div>
        <div className="hero-carousel-dots">
          {phones.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${currentSlide === index ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
