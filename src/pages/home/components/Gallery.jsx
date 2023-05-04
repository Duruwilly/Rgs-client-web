import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import room2 from "../../../assets/images/room2.jpg";
import room1 from "../../../assets/images/room.jpg";

const Gallery = () => {
  const options = {
    loop: true,
    margin: 10,
    nav: true,
    smartSpeed: 500,
    autoHeight: false,
    autoplay: true,
    dots: false,
    autoplayTimeout: 8000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      750: {
        items: 2,
      },
      1100: {
        items: 3,
      },
      
    },
  };

  return (
    <section className="flex flex-col items-center mt-16 py-16 bg-gray">
      <h3 className="capitalize text-2xl font-[500] text-[#222222] relative">
        our gallery
        <span className="line"></span>
      </h3>
      <div className="w-full justify-center items-center px- mt-10">
        <OwlCarousel className="owl-carousel owl-theme" {...options}>
          <img src={room2} alt="" />
          <img src={room2} alt="" />
          <img src={room2} alt="" />
          <img src={room2} alt="" />
          <img src={room2} alt="" />
        </OwlCarousel>
      </div>
    </section>
  );
};

export default Gallery;
