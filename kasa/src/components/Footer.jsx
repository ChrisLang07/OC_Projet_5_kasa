import LogoWhite from '../assets/kasa_white.png';
import '../styles/Footer.scss';

export default function Footer() {
    return (
        <footer className='footer'>
            <img className="logoWhite" src={LogoWhite} alt="white logo kasa" />
            <span className='footer-text'>© 2020 Kasa. All rights reserved</span>
        </footer>
    );
}
;
