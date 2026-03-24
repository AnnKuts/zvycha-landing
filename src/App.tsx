import "./App.css";
import Header from "./components/Navigation/Header/Header.tsx";
import Hero from "./components/Hero/Hero.tsx";
import Footer from "./components/Navigation/Footer/Footer.tsx";
import HowItWorks from "./components/HowItWorks/HowItWorks.tsx";
import Features from "./components/Features/Features.tsx";
import circleBg from "./assets/decorations/circle-bg.svg";

function App() {
  return (
    <>
      <div className="top-dark-section">
        <div className="top-dark-section-bg"></div>
        <Header />
        <Hero />
      </div>

      <div className="green-section">
        <img src={circleBg} alt="" className="green-circle-bg green-circle-1" />
        <img src={circleBg} alt="" className="green-circle-bg green-circle-2" />
        <img src={circleBg} alt="" className="green-circle-bg green-circle-3" />
      </div>

      <HowItWorks />
      <Features />
      <Footer />
    </>
  );
}

export default App;
