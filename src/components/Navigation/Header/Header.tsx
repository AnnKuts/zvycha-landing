import logo from "../../../assets/logos/logo.svg";
import "./Header.css";
import {useState} from "react";
import BetaModal from "../../BetaModal/BetaModal";

const Header = () => {
  const [isBetaModalOpen, setIsBetaModalOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <nav>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setIsBetaModalOpen(true);
          }}
        >
          Join demo
        </a>

        <a href="#how-it-works">Guide</a>
        <a href="#features">Features</a>
        <a href="https://github.com/AnnKuts/zvycha-app/blob/main/docs/CONTRIBUTING.md">
          Contribute
        </a>
      </nav>

      <BetaModal
        isOpen={isBetaModalOpen}
        onClose={() => setIsBetaModalOpen(false)}
      />
    </header>
  );
};

export default Header;
