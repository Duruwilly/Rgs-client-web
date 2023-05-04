import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { BsCalendarEvent } from "react-icons/bs";
import { RxPerson } from "react-icons/rx";
import Button from "../button/Button";

const FixedHeroe = () => {
  const [stickyClass, setStickyClass] = useState("hidden");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 800
        ? setStickyClass("sticky top-0 left-0 z-20")
        : setStickyClass("hidden");
    }
  };

  return (
    <div className={`w-full ${stickyClass}`}>
      <div className="w-full ">
        <div className="h-20 bg-white flex items-center justify-around py-3 w-full">
          
          <div className="searchItem">
            <BsCalendarEvent className="searchIcons" />
            <span
              //   onClick={toggleDate}
              className="pl-8 w-full py-[1.65rem] cursor-pointer"
            >
              check in - check out
            </span>
          </div>
          <div className="searchItem">
            <RxPerson className="searchIcons" />
            <span
              //   onClick={toggleRoomOptions}
              className="pl-8 w-full py-[1.65rem] cursor-pointer"
            >
              1 adult 2 children
            </span>
          </div>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default FixedHeroe;
