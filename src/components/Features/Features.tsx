import BuildCat from "../../assets/cats-icons/build-feature.svg";
import FocusCat from "../../assets/cats-icons/focus-feature.svg";
import GameCat from "../../assets/cats-icons/gamified-feature.svg";
import TimerCat from "../../assets/cats-icons/timer-feature.svg";
import Button from "../common/Button/Button";
const Features = () => {
  return (
    <section className="features">
      <h2>Our features</h2>

      <div className="feature">
        <div>
          <h3>Build habits together</h3>
          <p>Create and track daily habits...</p>
        </div>
        <img src={BuildCat} />
      </div>

      <div className="feature reverse">
        <img src={FocusCat} />
        <div>
          <h3>Focus rooms</h3>
          <p>Work together with others...</p>
        </div>
      </div>

      <div className="feature">
        <div>
          <h3>Gamified progress</h3>
          <p>Grow your virtual pet...</p>
        </div>
        <img src={GameCat} />
      </div>

      <div className="feature reverse">
        <img src={TimerCat} />
        <div>
          <h3>Focus timer</h3>
          <p>Use a built-in timer...</p>
        </div>
      </div>
      <Button>Join the beta</Button>
    </section>
  );
};

export default Features;