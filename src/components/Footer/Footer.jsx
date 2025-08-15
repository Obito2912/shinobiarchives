import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__message">
        Thank you for visiting, please follow us on:
      </p>
      <div className="footer__media" aria-hidden="true" />
      <nav className="footer__links" aria-label="Footer links">
        <ul className="footer__list">
          <li className="footer__item">
            <a className="footer__link" href="https://www.facebook.com/">
              <img
                className="footer__icon"
                src="src/images/facebook-icon.svg"
                alt="Facebook Image"
              />
              <span className="footer__label">Facebook</span>
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="https://www.instagram.com/">
              <img
                className="footer__icon"
                src="src/images/instagram-icon.svg"
                alt="Instagram Image"
              />
              <span className="footer__label">Instagram</span>
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="https://x.com/">
              <img
                className="footer__icon"
                src="src/images/x-twitter-icon.svg"
                alt="X/Twitter Image"
              />
              <span className="footer__label">X / Twitter</span>
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="https://www.tiktok.com/">
              <img
                className="footer__icon"
                src="src/images/tiktok-icon.svg"
                alt="TickTok Image"
              />
              <span className="footer__label">TikTok</span>
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
