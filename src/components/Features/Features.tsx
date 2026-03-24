import BuildCat from "../../assets/cats-icons/build-feature.svg";
import FocusCat from "../../assets/cats-icons/focus-feature.svg";
import GameCat from "../../assets/cats-icons/gamified-feature.svg";
import TimerCat from "../../assets/cats-icons/timer-feature.svg";
import circleBg from "../../assets/decorations/circle-bg.svg";
import paws from "../../assets/decorations/paws.svg";
import "./Features.css";

const Features = () => {
  return (
    <section className="features-section">
      <div className="features-decorations">
        <img src={circleBg} alt="" className="features-circle-bg features-circle-bg-1" />
        <img src={circleBg} alt="" className="features-circle-bg features-circle-bg-2" />
        <img src={circleBg} alt="" className="features-circle-bg features-circle-bg-3" />
      </div>

      <img src={paws} alt="" className="features-paws features-paws-left-1" />
      <img src={paws} alt="" className="features-paws features-paws-left-2" />
      <img src={paws} alt="" className="features-paws features-paws-right-1" />
      <img src={paws} alt="" className="features-paws features-paws-right-2" />

      <h2 className="features-title">Our features</h2>

      <div className="features-container">
        <div className="feature feature-text-left">
          <div className="feature-content">
            <h3>Build habits together</h3>
            <p>Create and track daily habits<br/>in a simple and motivating way.</p>
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
            <p>Work together with others<br/>using the body doubling<br/>method to stay focused.</p>
          </div>
        </div>

        <div className="feature feature-text-left">
          <div className="feature-content">
            <h3>Gamified progress</h3>
            <p>Grow your virtual pet as you<br/>complete habits and build<br/>streaks.</p>
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
            <p>Use a built-in timer to stay<br/>productive during work<br/>sessions.</p>
          </div>
        </div>
      </div>
      
      <div className="features-cta">
        <button className="btn">Join the beta</button>
      </div>
    </section>
  );
};

export default Features;
