import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import room1 from "../../../assets/images/room6.jpg";
import room2 from "../../../assets/images/room2.jpg";
import { Link } from "react-router-dom";

const TopDeals = () => {
  return (
    <section className="flex flex-col items-center mt-16 pb-10 relative">
      <div className="w-full max-w-screen-lg justify-center items-center px-4">
        <Swiper
          className="slider"
          modules={[Navigation, Autoplay, Pagination]}
          pagination={{ clickable: true }}
          autoplay={true}
        >
          <SwiperSlide>
            <div className="flex flex-col md:flex-row items-cente gap-8">
              <div className="slider-flex-grow">
                <span className=" text-xl font-bold">Special offers</span>
                <h3 className="text-gray-500 text-2xl capitalize">
                  royal suite
                </h3>
                <p className="py-6 font-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque, blanditiis nobis earum sed dolor accusantium corrupti
                  saepe debitis accusamus ex aliquam quas, ut, ad ullam est.
                  Eaque illo explicabo ad.
                </p>
                <Link to="/">
                  <button
                    type="button"
                    data-text="Discover Deal"
                    className="hover:bg-transparent hover:text-[#343a40] py-3 px-9 rounded-md font-bold mt-4 thm-btn"
                  >
                    Discover Deal
                  </button>
                </Link>
              </div>
              <div className="slider-flex-grow" >
                <img src={room1} alt="room" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col md:flex-row items-cente flex-wra gap-8">
              <div className="slider-flex-grow">
                <span className=" text-xl font-bold">Special offers</span>
                <h3 className="text-gray-500 text-2xl capitalize">
                  super deluxe
                </h3>
                <p className="py-6 font-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque, blanditiis nobis earum sed dolor accusantium corrupti
                  saepe debitis accusamus ex aliquam quas, ut, ad ullam est.
                  Eaque illo explicabo ad.
                </p>
                <Link to="/">
                  <button
                    type="button"
                    data-text="Discover Deal"
                    className="hover:bg-transparent hover:text-[#343a40] py-3 px-9 rounded-md font-bold mt-4 thm-btn"
                  >
                    Discover Deal
                  </button>
                </Link>
              </div>
              <div className="image">
                <img src={room2} alt="room" className="slider-flex-grow" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default TopDeals;
