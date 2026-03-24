import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <footer className="footer">
        <p>© 2026 Zvycha. Open Source Project.</p>
        <div className="footer-links">
          <a href="#" className="link-privacy">Privacy Policy</a>
          {/*links to gh here*/}
          <a href="#" className="link-contribute">How to contribute</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
