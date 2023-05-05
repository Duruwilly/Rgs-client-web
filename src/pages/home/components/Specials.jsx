import React from "react";
import { GiWifiRouter } from "react-icons/gi";
import { MdOutlineRoomService } from "react-icons/md";
import { TbMassage } from "react-icons/tb";

const Specials = () => {
  return (
    <section className="flex flex-col items-center mt-16 pb-16 relative px-4">
      <h3 className="capitalize text-2xl font-[500] text-[#222222] relative">
        our hotel specials
        <span className="line"></span>
      </h3>
      <p className="mt-6 text-gray-400">
        Make your stay even more enjoyable with our hotel specials.
      </p>
      <div className="section-container justify-center items-center px-4">
        <div className="grid lg:grid-cols-3 specials-widget gap-8 mt-10">
          <div className="border-r border-gray-200 specials-widget-border text-center p-10  flex flex-col justify-center items-center gap-4 hover:scale-105 duration-500">
            <GiWifiRouter className="text-[#994F12] text-7xl" />
            <h3 className="text-xl font-semibold capitalize">free wifi</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Architecto, nulla.
            </p>
          </div>
          <div className="border-r border-gray-200 specials-widget-border text-center p-10  flex flex-col justify-center items-center gap-4 hover:scale-105 duration-500">
            <MdOutlineRoomService className="text-[#994F12] text-7xl" />
            <h3 className="text-xl font-semibold capitalize">room service</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Architecto, nulla.
            </p>
          </div>
          <div className=" text-center p-10  flex flex-col justify-center items-center gap-4 hover:scale-105 duration-500">
            <TbMassage className="text-[#994F12] text-7xl" />
            <h3 className="text-xl font-semibold capitalize">spa</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Architecto, nulla.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specials;
