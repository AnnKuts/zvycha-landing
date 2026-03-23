import "./App.css";
import Header from "./components/Navigation/Header/Header.tsx";
import Footer from "./components/Navigation/Footer/Footer.tsx";
import HowItWorks from "./components/GetStartedSection/HowItWorks/HowItWorks.tsx";
import Features from "./components/Features/Features.tsx";
function App() {
  return (
    <>
      <Header />
      <HowItWorks />
      <Features />
      <Footer />
    </>
  );
}

export default App;
