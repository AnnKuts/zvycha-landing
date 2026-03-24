import { FaCalendarPlus, FaLink, FaArrowTrendUp } from "react-icons/fa6";
import "./HowItWorks.css";

const HowItWorks = () => {
  return (
    <div id="how-it-works" className="how-it-works-wrapper">
      <section className="get-started">
        <div className="container">
          <h2 className="title">How it works?</h2>
          <p className="subtitle">3 small steps:</p>

          <div className="cards">
            <div className="card active">
              <div className="icon">
                <FaCalendarPlus />
              </div>
              <h3>Create habits</h3>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>

            <div className="card">
              <div className="icon">
                <FaLink />
              </div>
              <h3>Join focus rooms</h3>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>

            <div className="card">
              <div className="icon">
                <FaArrowTrendUp />
              </div>
              <h3>Grow your pet</h3>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
