import logo from "../../../assets/logos/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav>
        <a href="#">Character</a>
        <a href="#">Guide</a>
        <a href="#">Features</a>
        <a href="#">Contribute</a>
      </nav>
    </header>
  );
};

export default Header;
