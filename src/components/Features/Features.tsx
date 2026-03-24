import { useEffect, useRef, useState } from "react";
import BuildCat from "../../assets/cats-icons/build-feature.svg";
import FocusCat from "../../assets/cats-icons/focus-feature.svg";
import GameCat from "../../assets/cats-icons/gamified-feature.svg";
import TimerCat from "../../assets/cats-icons/timer-feature.svg";
import circleBg from "../../assets/decorations/circle-bg.svg";
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
import "./Features.css";

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [pawsAnimated, setPawsAnimated] = useState(false);
  const [isBetaModalOpen, setIsBetaModalOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" },
    );

    const features = featuresRef.current?.querySelectorAll(".feature");
    features?.forEach((feature) => observer.observe(feature));

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const pawsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setPawsAnimated(true);
            pawsObserver.disconnect();
          }
        });
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      pawsObserver.observe(sectionRef.current);
    }

    return () => {
      pawsObserver.disconnect();
    };
  }, []);

  return (
    <section id="features" className="features-section" ref={sectionRef}>
      <div className="features-decorations">
        <img
          src={circleBg}
          alt=""
          className="features-circle-bg features-circle-bg-1"
        />
        <img
          src={circleBg}
          alt=""
          className="features-circle-bg features-circle-bg-2"
        />
        <img
          src={circleBg}
          alt=""
          className="features-circle-bg features-circle-bg-3"
        />
      </div>

      {pawsAnimated && (
        <>
          <img
            src={pawsLeft1}
            alt=""
            className="features-paws features-paws-left-1 delay-0s"
          />
          <img
            src={pawsLeft2}
            alt=""
            className="features-paws features-paws-left-1 delay-0-3s"
          />
          <img
            src={pawsLeft3}
            alt=""
            className="features-paws features-paws-left-1 delay-0-6s"
          />
          <img
            src={pawsLeft4}
            alt=""
            className="features-paws features-paws-left-1 delay-0-9s"
          />
          <img
            src={pawsLeft5}
            alt=""
            className="features-paws features-paws-left-1 delay-1-2s"
          />
          <img
            src={pawsLeft}
            alt=""
            className="features-paws features-paws-left-1 delay-1-5s"
          />

          <img
            src={pawsRight1}
            alt=""
            className="features-paws features-paws-right-1 delay-2-1s"
          />
          <img
            src={pawsRight2}
            alt=""
            className="features-paws features-paws-right-1 delay-2-4s"
          />
          <img
            src={pawsRight3}
            alt=""
            className="features-paws features-paws-right-1 delay-2-7s"
          />
          <img
            src={pawsRight4}
            alt=""
            className="features-paws features-paws-right-1 delay-3-0s"
          />
          <img
            src={pawsRight5}
            alt=""
            className="features-paws features-paws-right-1 delay-3-3s"
          />
          <img
            src={pawsRight}
            alt=""
            className="features-paws features-paws-right-1 delay-3-6s"
          />

          <img
            src={pawsLeft1}
            alt=""
            className="features-paws features-paws-left-2 delay-4-2s"
          />
          <img
            src={pawsLeft2}
            alt=""
            className="features-paws features-paws-left-2 delay-4-5s"
          />
          <img
            src={pawsLeft3}
            alt=""
            className="features-paws features-paws-left-2 delay-4-8s"
          />
          <img
            src={pawsLeft4}
            alt=""
            className="features-paws features-paws-left-2 delay-5-1s"
          />
          <img
            src={pawsLeft5}
            alt=""
            className="features-paws features-paws-left-2 delay-5-4s"
          />
          <img
            src={pawsLeft}
            alt=""
            className="features-paws features-paws-left-2 delay-5-7s"
          />

          <img
            src={pawsRight1}
            alt=""
            className="features-paws features-paws-right-2 delay-6-3s"
          />
          <img
            src={pawsRight2}
            alt=""
            className="features-paws features-paws-right-2 delay-6-6s"
          />
          <img
            src={pawsRight3}
            alt=""
            className="features-paws features-paws-right-2 delay-6-9s"
          />
          <img
            src={pawsRight4}
            alt=""
            className="features-paws features-paws-right-2 delay-7-2s"
          />
          <img
            src={pawsRight5}
            alt=""
            className="features-paws features-paws-right-2 delay-7-5s"
          />
          <img
            src={pawsRight}
            alt=""
            className="features-paws features-paws-right-2 delay-7-8s"
          />
        </>
      )}

      <h2 className="features-title">Our features</h2>

      <div className="features-container" ref={featuresRef}>
        <div className="feature feature-text-left">
          <div className="feature-content">
            <h3>Build habits together</h3>
            <p>
              Create and track daily habits
              <br />
              in a simple and motivating way.
            </p>
          </div>
          <div className="feature-image">
            <img src={BuildCat} alt="Build habits" />
          </div>
        </div>

        <div className="feature feature-text-right">
          <div className="feature-image">
            <img src={FocusCat} alt="Focus rooms" />
          </div>
          <div className="feature-content">
            <h3>Focus rooms</h3>
            <p>
              Work together with others
              <br />
              using the body doubling
              <br />
              method to stay focused.
            </p>
          </div>
        </div>

        <div className="feature feature-text-left">
          <div className="feature-content">
            <h3>Gamified progress</h3>
            <p>
              Grow your virtual pet as you
              <br />
              complete habits and build
              <br />
              streaks.
            </p>
          </div>
          <div className="feature-image">
            <img src={GameCat} alt="Gamified progress" />
          </div>
        </div>

        <div className="feature feature-text-right">
          <div className="feature-image">
            <img src={TimerCat} alt="Focus timer" />
          </div>
          <div className="feature-content">
            <h3>Focus timer</h3>
            <p>
              Use a built-in timer to stay
              <br />
              productive during work
              <br />
              sessions.
            </p>
          </div>
        </div>
      </div>

      <div className="features-cta">
        <button className="btn" onClick={() => setIsBetaModalOpen(true)}>
          Join the beta
        </button>
      </div>

      <BetaModal
        isOpen={isBetaModalOpen}
        onClose={() => setIsBetaModalOpen(false)}
      />
    </section>
  );
};

export default Features;
