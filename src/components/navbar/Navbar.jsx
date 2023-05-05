import React, { useEffect, useState } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { RxEnvelopeClosed } from "react-icons/rx";
import { FaBars } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo/logo1.png";
import CurrencyConversion from "../currencyConversion/CurrencyConversion";
import MobileNav from "./MobileNav";
import { useSharedContext } from "../../context/SharedContext";
import FixedHeader from "../FixedHeader/FixedHeader";
import FixedHeroe from "../heroe/FixedHeroe";

const Navbar = () => {
  const location = useLocation();
  const { matches, setDropdownHeader } = useSharedContext();
  const [mobileNav, setMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  const [stickySearchIcon, setStickySearchIcon] = useState("hidden");

  const stickSearchIcon = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 600
        ? setStickySearchIcon("block")
        : setStickySearchIcon("hidden");
    }
  };

  const toggleDropDownHeader = () => {
    setDropdownHeader(true);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", stickSearchIcon);

    return () => {
      window.removeEventListener("scroll", stickSearchIcon);
    };
  }, []);

  return (
    <>
      <header className="text-black font-medium uppercase px-4 left-0 top-0 right-0 z-10 pb-4 transition">
        <div className="flex justify-center transition">
          <div className="w-full flex justify-between items-center">
            <div className="relative navIconsToggle cursor-pointer">
              <FaBars
                className="text-gray-3 text-xl"
                onClick={toggleMobileNav}
              />
              {/* <div
              className={`h-10 w-10 flex items-center justify-center rounded-full bg-secondary text-white ${stickySearchIcon}`}
            >
              <CiSearch
                className="text-white text-2xl"
                onClick={toggleDropDownHeader}
              />
            </div> */}
            </div>
            {/* menu 1 */}
            <div className="hidden navContact items-center py-1 text-gray-3 text-sm">
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
            {/* menu 2 */}

            <div className="max-w-[17rem] max-h-[60px] flex justify-center items-center">
              <Link to="/">
                <img src={logo} alt="logo" className=" w-full p-0 m-0" />
              </Link>
            </div>

            {/* menu 3 */}
            <div className="flex gap-3 justify-between items-center">
              <CurrencyConversion />
              <div className="text-gray-3 text-sm hidden lg:block">
                <Link to="/login" className="px-4 border-r-2 border-gray-800">
                  Register
                </Link>
                <Link to="/login" className="px-4">
                  Login
                </Link>
              </div>
              {/* <div className="relative navIconsToggle cursor-pointer">
              <FaBars className="text-gray-3 text-xl" />
            </div> */}
            </div>
            {/* mobile nav */}
            <div
              className={`${
                mobileNav ? "left0" : "left-100"
              } navMobileVisibility mobile-wrapper`}
            >
              <div className="mobile-overlay" onClick={toggleMobileNav}></div>
              <MobileNav toggle={toggleMobileNav} />
            </div>
          </div>
        </div>
        <div className="hidden navMenu justify-center">
          <div className="w-full containe flex justify-betwee items-center">
            <ul className="list-none flex justify-between items-center gap-4">
              <li>
                <Link to="/">special offers</Link>
              </li>
              <li>
                <Link to="/">about ridges</Link>
              </li>
              <li>
                <Link to="/">reviews</Link>
              </li>
              <li>
                <Link to="/">exclusive rooms</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
      {matches && location.pathname === "/" ? <FixedHeroe /> : null}
      {!matches && location.pathname === "/" ? (
        <FixedHeader />
      ) : null}
    </>
  );
};

export default Navbar;
