import logo from "../../../assets/logos/logo.svg";
import "./Header.css";
const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav>
        <a href="#">Join demo</a>
        <a href="#how-it-works">Guide</a>
        <a href="#features">Features</a>
        <a href="#">Contribute</a>
      </nav>
    </header>
  );
};

export default Header;
