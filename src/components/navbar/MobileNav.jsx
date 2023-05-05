import React from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import MobileNavBtn from "../button/MobileNavBtn";
import { BsFillTelephoneFill } from "react-icons/bs";
import { RxEnvelopeClosed } from "react-icons/rx";

const MobileNav = ({ toggle }) => {
  return (
    <nav className="mobile-nav_content text-black">
      <span className="mobile-nav__close" onClick={toggle}>
        <FaTimes />
      </span>
      <div className="mobile-nav_container mt-12">
        <div onClick={toggle}>
          <div className="pb-5">
            <Link to="/register">
              <MobileNavBtn text="Register" />
            </Link>
          </div>
          <Link to="/login">
            <MobileNavBtn text="Login" />
          </Link>
        </div>
        <ul className="mobile-menu" onClick={toggle}>
          <li className="current">
            <Link to="/">Special offers</Link>
          </li>
          <li>
            <Link to="/about">About ridges</Link>
          </li>
          <li>
            <Link to="/services">Reviews</Link>
          </li>
          <li>
            <Link to="/projects">Exclusive rooms</Link>
          </li>
        </ul>
      </div>
      <div className="absolute bottom-0">
        <div className=" py-1 text-gray-3 text-sm font-semibold">
          <div className="flex items-center gap-2 mr-8">
            <BsFillTelephoneFill />
            <span>
              <a href="tel:+2349000000000" className="">
                +234 900 0000 000
              </a>
            </span>
          </div>
          <div className="flex items-center gap-2 mr-3">
            <RxEnvelopeClosed />
            <span>
              <a href="mailto:email@email.com" className="">
                email@email.com
              </a>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
