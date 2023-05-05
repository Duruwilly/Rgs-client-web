import React, { useEffect, useState } from "react";
import HeroeBg from "../../assets/images/Heroe1.jpg";
import { BsCalendarEvent } from "react-icons/bs";
import { RxPerson } from "react-icons/rx";
import { AiFillCloseCircle } from "react-icons/ai";
import Button from "../button/Button";
import { useSharedContext } from "../../context/SharedContext";

const Heroe = () => {
  const { matches, setDropdownHeader } = useSharedContext();

  const heroeBg = {
    width: "100%",
    padding: "0",
    backgroundImage: `url(${HeroeBg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    minHeight: "300px",
    height: "60vh",
    maxHeight: "600px",
    position: "relative",
  };

  return (
    <section style={heroeBg}>
      <div className="heroe-overlay flex flex-col justify-center items-center">
        <div className="flex justify-center">
          <div className="w-full max-w-screen-sm">
            <p className=" text-gray-100 text-center md:text-[2.2rem] lg:text-[2.5rem]">
              Enjoy and experience the difference during your stay at Ridges
              Hotel.
            </p>
          </div>
        </div>
        {!matches && (
          <div className="flex justify-center py-10">
            <button
              className={` bg-primary py-4 px-9 uppercase text-white text-xs font-semibold rounded-[3px] cursor-pointer`}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setDropdownHeader(true);
              }}
            >
              Check Availability
            </button>
          </div>
        )}
        {matches && (
          <div className="flex justify-center">
            <div className="section-container">
              <div className="searchContainer shadow-md">
                <div className="searchItem">
                  <BsCalendarEvent className="searchIcons" />
                  <span
                    //   onClick={toggleDate}
                    className="pl-8 w-full py-[1.65rem] cursor-pointer"
                  >
                    check-in - check-out
                  </span>
                  {/* {openDate && (
                  <div>
                    <DateRange
                      editableDateInputs={true}
                      onChange={(item) => {
                        setDates([item.selection]);
                        dispatch(setDate({ ...item.selection }));
                      }}
                      moveRangeOnFirstSelection={false}
                      ranges={date}
                      className="date"
                      minDate={new Date()}
                    />
                    <button
                      className="py-1 px-9 text-white bg-red-900 date-btn"
                      onClick={toggleDate}
                    >
                      select date
                    </button>
                  </div>
                )} */}
                </div>
                <div className="searchItem">
                  <RxPerson className="searchIcons" />
                  <span
                    //   onClick={toggleRoomOptions}
                    className="pl-8 w-full py-[1.65rem] cursor-pointer"
                  >
                    2 adults 1 children
                  </span>
                </div>
                <Button />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Heroe;
