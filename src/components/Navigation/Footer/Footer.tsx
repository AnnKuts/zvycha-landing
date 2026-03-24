import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <footer className="footer">
        <p>© 2026 Zvycha. Open Source Project.</p>
        <div className="footer-links">
          <a
            href="https://github.com/AnnKuts/zvycha-app/blob/main/docs/PRIVACY.md"
            className="link-privacy"
          >
            Privacy Policy
          </a>
          <a
            href="https://github.com/AnnKuts/zvycha-app/blob/main/docs/CONTRIBUTING.md"
            className="link-contribute"
          >
            How to contribute
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
