import "../../assets/animate/animate.min.css";
import "../../assets/animate/custom-animate.css";
import Footerbg from "../../assets/images/footer-v1-pattern.png";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import Logo from "../../assets/logo/RidgesWhiteLogo.png";
import CurrencyConversion from "../currencyConversion/CurrencyConversion";

const Footer = () => {
  return (
    <footer className="footer">
      <div
        className="footer-pattern"
        style={{ backgroundImage: `url(${Footerbg})` }}
      ></div>
      <div className=" flex flex-col md:flex-row justify-between gap-12 md:gap-0 items-cente px-20 footer-top  py-8">
        {/* footer top */}
        <div className=" wow animated fadeInUp" data-wow-delay="0.1s">
          <div className="footer-widget__column footer-widget__about flex flex-col items-center">
            <div className="footer-widget__about-logo">
              <Link to="/">
                <img src={Logo} alt="logo" className="logo h-28" />
              </Link>
            </div>
            <p className="footer-widget__about-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              tempora soluta praesentium ratione nisi maiores iusto officia
              fugiat explicabo illo.
            </p>
          </div>
        </div>

        {/* footer widget column */}
        {/* first widget */}
        <div class=" wow animated fadeInUp" data-wow-delay="0.3s">
          <div class="footer-widget__column footer-widget__services">
            <h2 class="footer-widget__title">Quick Links</h2>
            <ul class="footer-widget__services-list">
              <li class="footer-widget__services-list-item">
                <Link to="/about">About Us</Link>
              </li>
              <li class="footer-widget__services-list-item">
                <Link to="/services">Special offers</Link>
              </li>
              <li class="footer-widget__services-list-item">
                <Link to="/projects">Reviews</Link>
              </li>
              <li class="footer-widget__services-list-item">
                <Link to="/contact">Exclusive rooms</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* second widget */}
        {/* third widget */}
        <div class=" wow animated fadeInUp" data-wow-delay="0.3s">
          <div class="footer-widget__column footer-widget__services">
            <h2 class="footer-widget__title">Social Links</h2>
            <div className="footer-widget__about-social-link">
              <ul className="">
                <li className=" h-[35px] w-[35px] rounded-full bg-white flex justify-center items-center">
                  <a href="#" target="_blank">
                    <span>
                      <FaFacebookF />
                    </span>
                  </a>
                </li>
                <li className="h-[35px] w-[35px] rounded-full bg-white flex justify-center items-center">
                  <a href="#" target="_blank">
                    <span>
                      <FaTwitter />
                    </span>
                  </a>
                </li>
                <li className="h-[35px] w-[35px] rounded-full bg-white flex justify-center items-center">
                  <a href="#" target="_blank">
                    <span>
                      <FaInstagram />
                    </span>
                  </a>
                </li>
                <li className="h-[35px] w-[35px] rounded-full bg-white flex justify-center items-center">
                  <a
                    href="#"
                    target="_blank"
                  >
                    <span>
                      <FaLinkedinIn />
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* end */}
      </div>
      {/* footer bottom */}
      <div className="footer-bottom">
        <div className="containe px-4">
          <div className="flex flex-col footer-bottom-content justify-center items-center space-y-3">
            <div class="footer-bottom-text">
              <p>
                Copyright &copy; 2023 <Link to="/">Ridges Hotel</Link>. All
                rights reserved.
              </p>
            </div>
            <div class="footer-bottom-list">
              <ul>
                <li className="font-semibold text-base" style={{color: "rgba(255, 255, 255, 0.7)"}}>
                  <CurrencyConversion />
                </li>
                <li>
                  <Link to="/terms-and-condition">Terms & Conditions</Link>
                </li>
                <li>
                  <Link to="/careers">Careers</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;