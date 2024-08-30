import LogoWhite from '../assets/images/kasa_white.png';
import '../assets/styles/components/Footer.scss';

export default function Footer() {
    return (
      <footer>
        <div className="footer-logo">
          <img className="logoWhite" src={LogoWhite} alt="white logo kasa" />
          <span className="footer-text">© 2020 Kasa. All rights reserved</span>
        </div>
      </footer>
    );
}
;
