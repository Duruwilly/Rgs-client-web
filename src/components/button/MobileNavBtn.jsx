import React from "react";

export const MobileNavBtn = ({ text }) => {
  return (
    <button
      data-text={text}
      className="w-full hover:bg-black py-3 hover:text-white hover:border-none rounded-sm thm-btn"
    >
      {text}
    </button>
  );
};

export default MobileNavBtn;
