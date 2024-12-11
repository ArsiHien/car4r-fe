import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h2>CAR4R</h2>
        <p>
          Our vision is to provide convenience and help increase your sales
          business.
        </p>
      </div>
      <div className="footer-links">
        <div className="footer-section">
          <h4>About</h4>
          <ul>
            <li>
              <a href="#">How it works</a>
            </li>
            <li>
              <a href="#">Featured</a>
            </li>
            <li>
              <a href="#">Partnership</a>
            </li>
            <li>
              <a href="#">Business Relation</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Community</h4>
          <ul>
            <li>
              <a href="#">Events</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Podcast</a>
            </li>
            <li>
              <a href="#">Invite a friend</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Socials</h4>
          <ul>
            <li>
              <a href="#">Discord</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
