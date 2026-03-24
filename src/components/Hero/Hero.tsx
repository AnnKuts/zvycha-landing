import { useState, useRef } from "react";
import "./Hero.css";
import BetaModal from "../BetaModal/BetaModal";
import pawsLeft1 from "../../assets/decorations/paws-left-1.svg";
import pawsLeft2 from "../../assets/decorations/paws-left-2.svg";
import pawsLeft3 from "../../assets/decorations/paws-left-3.svg";
import pawsLeft4 from "../../assets/decorations/paws-left-4.svg";
import pawsLeft5 from "../../assets/decorations/paws-left-5.svg";
import pawsLeft from "../../assets/decorations/paws-left.svg";
import pawsRight1 from "../../assets/decorations/paws-right-1.svg";
import pawsRight2 from "../../assets/decorations/paws-right-2.svg";
import pawsRight3 from "../../assets/decorations/paws-right-3.svg";
import pawsRight4 from "../../assets/decorations/paws-right-4.svg";
import pawsRight5 from "../../assets/decorations/paws-right-5.svg";
import pawsRight from "../../assets/decorations/paws-right.svg";
import PhoneMockup from "./PhoneMockup";
import pic1 from "../../assets/mockups/pics/pics-1.svg";
import pic2 from "../../assets/mockups/pics/pics-2.svg";
import pic3 from "../../assets/mockups/pics/pics-3.svg";

const Hero = () => {
  const [selectedPhone, setSelectedPhone] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isBetaModalOpen, setIsBetaModalOpen] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const phones = [
    { image: pic1, alt: "App mockup", variant: 1 as const },
    { image: pic2, alt: "App mockup main", variant: 2 as const },
    { image: pic3, alt: "App mockup", variant: 1 as const },
  ];

  const handlePhoneClick = (index: number) => {
    setSelectedPhone(index);
  };

  const getPhoneClass = (index: number) => {
    if (selectedPhone === index) {
      return "phone phone-active";
    }
    if (selectedPhone === 1) {
      return index === 0 ? "phone phone-left" : "phone phone-right";
    }
    if (selectedPhone === 0) {
      return index === 1 ? "phone phone-move-right" : "phone phone-far-right";
    }
    if (selectedPhone === 2) {
      return index === 1 ? "phone phone-move-left" : "phone phone-far-left";
    }
    return "phone";
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
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
      <img src={pawsLeft1} alt="" className="hero-paws hero-paws-left delay-0s" />
      <img src={pawsLeft2} alt="" className="hero-paws hero-paws-left delay-0-3s" />
      <img src={pawsLeft3} alt="" className="hero-paws hero-paws-left delay-0-6s" />
      <img src={pawsLeft4} alt="" className="hero-paws hero-paws-left delay-0-9s" />
      <img src={pawsLeft5} alt="" className="hero-paws hero-paws-left delay-1-2s" />
      <img src={pawsLeft} alt="" className="hero-paws hero-paws-left delay-1-5s" />

      <img src={pawsRight1} alt="" className="hero-paws hero-paws-right delay-0s" />
      <img src={pawsRight2} alt="" className="hero-paws hero-paws-right delay-0-3s" />
      <img src={pawsRight3} alt="" className="hero-paws hero-paws-right delay-0-6s" />
      <img src={pawsRight4} alt="" className="hero-paws hero-paws-right delay-0-9s" />
      <img src={pawsRight5} alt="" className="hero-paws hero-paws-right delay-1-2s" />
      <img src={pawsRight} alt="" className="hero-paws hero-paws-right delay-1-5s" />

      <div className="hero-content">
        <h1>BUILD HABITS TOGETHER</h1>
        <p>
          Lorem ipsum blandit dolor<br />
          pellentesque viverra felis nec sed id<br />
          eu malesuada.
        </p>
        <button 
          className="btn hero-cta"
          onClick={() => setIsBetaModalOpen(true)}
        >
          Join the beta
        </button>
      </div>

      <div className="hero-mockups hero-mockups-desktop">
        {phones.map((phone, index) => (
          <div
            key={index}
            className={getPhoneClass(index)}
            onClick={() => handlePhoneClick(index)}
          >
            <PhoneMockup 
              image={phone.image} 
              alt={phone.alt} 
              variant={phone.variant}
              index={index}
            />
          </div>
        ))}
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
              <div className="phone">
                <PhoneMockup 
                  image={phone.image} 
                  alt={phone.alt} 
                  variant={phone.variant}
                  index={index}
                />
              </div>
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

      <BetaModal 
        isOpen={isBetaModalOpen}
        onClose={() => setIsBetaModalOpen(false)}
      />
    </section>
  );
};

export default Hero;
