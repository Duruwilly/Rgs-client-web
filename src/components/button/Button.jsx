import React from "react";

const Button = () => {
  return (
    <button
      className={` bg-primary py-4 px-9 uppercase text-white text-xs font-semibold rounded-[3px] cursor-pointer`}
    >
      {/* {loading ? <SearchButtonSpinner /> : "search"} */}
      Search Room
    </button>
  );
};

export default Button;
