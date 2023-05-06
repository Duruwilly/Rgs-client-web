import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import room2 from "../../../assets/images/room2.jpg";
import room3 from "../../../assets/images/room6.jpg";
import { VscClose } from "react-icons/vsc";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const Gallery = () => {
  const options = {
    loop: true,
    margin: 10,
    nav: true,
    smartSpeed: 500,
    // autoHeight: false,
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

  const galleryPhotos = [
    {
      id: 1,
      src: room2,
    },
    {
      id: 2,
      src: room2,
    },
    {
      id: 3,
      src: room3,
    },
    {
      id: 3,
      src: room3,
    },
  ];

  const [sliderNumber, setSliderNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const handleOpen = (index) => {
    setSliderNumber(index);
    setOpen(true);
  };

  const handleMove = (dir) => {
    let newSliderNumber;

    if (dir === "l") {
      newSliderNumber = sliderNumber === 0 ? 3 : sliderNumber - 1;
    } else {
      newSliderNumber = sliderNumber === 3 ? 0 : sliderNumber + 1;
    }

    setSliderNumber(newSliderNumber);
  };

  return (
    <section className="flex flex-col items-center mt-16 py-16 bg-gray">
      <h3 className="capitalize text-2xl font-[500] text-[#222222] relative">
        our gallery
        <span className="line"></span>
      </h3>
      {open && (
        <div
          className=" w-screen h-screen fixed top-0 left-0 flex items-center justify-center z-[100] px-2"
          style={{ background: "rgba(0, 0, 0, 0.8)" }}
          onClick={(e) => {
            e.stopPropagation();
            setOpen(false);
          }}
        >
          <div className="w-full max-w-screen-lg relative shadow-md overflow-y-auto">
            <div className="absolute top-0 right-0">
              <button
                className={`rounded-full w-12 h-12 p-0 border-0 inline-flex items-center justify-center text-4xl text-white opacity-70 hover:text-white hover:opacity-100`}
                style={{ background: "rgba(0,0,0,0.4)" }}
              >
                <VscClose className="" onClick={() => setOpen(false)} />
              </button>
            </div>
            <button className="text-4xl absolute left-0 top-[50%] cursor-pointer text-white opacity-70 hover:text-white hover:opacity-100 z-20">
              <SlArrowLeft
                className=""
                onClick={(e) => {
                  e.stopPropagation();
                  handleMove("l");
                }}
              />
            </button>

            <button className="text-4xl absolute  -right-0 top-[50%] cursor-pointer text-white opacity-70 hover:text-white hover:opacity-100 z-20">
              <SlArrowRight
                onClick={(e) => {
                  e.stopPropagation();
                  handleMove("r");
                }}
              />
            </button>
            <div className="sliderWrapper">
              <img
                src={galleryPhotos[sliderNumber].src}
                alt=""
                className="sliderImg"
              />
            </div>
          </div>
        </div>
      )}
      <div className="w-full justify-center items-center px- mt-10">
        <OwlCarousel className="owl-carousel owl-theme" {...options}>
          {galleryPhotos.map((photo, index) => (
            <div key={index}>
              <img
                onClick={() => handleOpen(index)}
                src={photo.src}
                alt="gallery"
                className="hover:scale-105 duration-500 cursor-pointer"
              />
            </div>
          ))}
        </OwlCarousel>
      </div>
    </section>
  );
};

export default Gallery;
