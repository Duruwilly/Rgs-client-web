import React from "react";
import { Link } from "react-router-dom";
import room2 from "../../../assets/images/room2.jpg";
import room1 from "../../../assets/images/room.jpg";

const ExclusiveRooms = () => {
  return (
    <section className="bg-gray flex flex-col items-center mt-16 py-16">
      <div className="section-container justify-center items-center px-4">
        <div className="flex flex-wrap items-center justify-center gap-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div
              className=" space-y-6 exclusive-flex-grow-heading"
              // style={{ flex: "1 1 auto", width: "30%" }}
            >
              <h3 className="capitalize text-4xl font-[500] text-[#222222] relative">
                exclusive rooms
                <span className="line"></span>
              </h3>
              <p className="leading-relaxed text-gray-400">
                Choose from a wide range of exclusive rooms, and apartments.
              </p>
              <Link to="/">
                <button
                  type="button"
                  className="bg-primary hover:bg-transparent hover:border hover:border-borderPrimary hover:text-[#343a40] text-white py-3 px-9 mt-4"
                >
                  View more
                </button>
              </Link>
            </div>
            <Link to="/" className="exclusive-flex-grow-image">
              <div className="relative">
                <img src={room1} alt="" style={{ position: "relative" }} />
                <div className="absolute bg-white py-3 px-6 left-1/2 transform -translate-x-1/2 bottom-0 mb-2">
                  <p>executive room</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <Link to="/">
              <div className="relative">
                <img src={room2} alt="" style={{ position: "relative" }} />

                <div className="absolute bg-white py-3 px-6 left-1/2 transform -translate-x-1/2 bottom-0 mb-2">
                  <p>executive room</p>
                </div>
              </div>
            </Link>
            <Link to="/">
              <div className="relative">
                <img src={room2} alt="" style={{ position: "relative" }} />

                <div className="absolute bg-white py-3 px-6 left-1/2 transform -translate-x-1/2 bottom-0 mb-2">
                  <p>executive room</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExclusiveRooms;
