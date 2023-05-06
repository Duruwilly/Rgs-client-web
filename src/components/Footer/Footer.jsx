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
      <div className="flex justify-center">
        <div className="section-container">
          <div
            className="footer-pattern"
            style={{ backgroundImage: `url(${Footerbg})` }}
          ></div>
          <div className=" flex flex-col md:flex-row justify-between gap-12 md:gap-0 items-cente px-10 sm:px-14 md:px-16 footer-top  py-8">
            {/* footer top */}
            <div className=" wow animated fadeInUp" data-wow-delay="0.1s">
              <div className="footer-widget__column footer-widget__about flex flex-col">
                <div className="footer-widget__about-logo">
                  <Link to="/">
                    <img src={Logo} alt="logo" className="logo h-28" />
                  </Link>
                </div>
                <p className="footer-widget__about-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat tempora soluta praesentium ratione nisi maiores iusto
                  officia fugiat explicabo illo.
                </p>
              </div>
            </div>

            {/* footer widget column */}
            {/* first widget */}
            <div className=" wow animated fadeInUp" data-wow-delay="0.3s">
              <div className="footer-widget__column footer-widget__services">
                <h2 className="footer-widget__title">Quick Links</h2>
                <ul className="footer-widget__services-list">
                  <li className="footer-widget__services-list-item">
                    <Link to="/about">About Us</Link>
                  </li>
                  <li className="footer-widget__services-list-item">
                    <Link to="/special-offers">Special offers</Link>
                  </li>
                  <li className="footer-widget__services-list-item">
                    <Link to="/reviews">Reviews</Link>
                  </li>
                  <li className="footer-widget__services-list-item">
                    <Link to="/exclusive-rooms">Exclusive rooms</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* second widget */}
            <div className=" wow animated fadeInUp" data-wow-delay="0.3s">
              <div className="footer-widget__column footer-widget__services">
                <h2 className="footer-widget__title">Social Links</h2>
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
                      <a href="#" target="_blank">
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
        </div>
      </div>

      {/* footer bottom */}
      <div className="footer-bottom-container">
        <div className="flex justify-center">
          <div className="section-container">
            <div className="footer-bottom">
              <div className="px-4">
                <div className="flex flex-col footer-bottom-content justify-center items-center text-center space-y-3">
                  <div className="footer-bottom-text">
                    <p>
                      Copyright &copy; 2023 <Link to="/">Ridges Hotel</Link>.
                      All rights reserved.
                    </p>
                  </div>
                  <div className="footer-bottom-list">
                    <ul>
                      <li
                        className="font-semibold text-base"
                        style={{ color: "rgba(255, 255, 255, 0.7)" }}
                      >
                        <CurrencyConversion />
                      </li>
                      <li>
                        <Link to="/terms-and-condition">
                          Terms & Conditions
                        </Link>
                      </li>
                      <li>
                        <Link to="/careers">Careers</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
