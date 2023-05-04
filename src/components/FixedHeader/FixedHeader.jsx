import { BsCalendarEvent } from "react-icons/bs";
import { RxPerson } from "react-icons/rx";
import { useSharedContext } from "../../context/SharedContext";
import Button from "../button/Button";

const FixedHeader = () => {
  const { setDropdownHeader, dropdownHeader } = useSharedContext();

  return (
    <>
      {!dropdownHeader ? (
        <div className="" onClick={() => setDropdownHeader(!dropdownHeader)}>
          <div className="w-full ">
            <div className="h-16 bg-white flex items-center justify-between px-4 py-3 w-full">
              <div className="searchItem">
                <input
                  type="text"
                  placeholder="Search room"
                  className="pl-8 w-full placeholder:text-gray-600"
                  //   value={destination}
                  readOnly
                />
              </div>
              <div className="flex justify-center items-center gap-6 px-4">
                <div className="searchItm">
                  <BsCalendarEvent className="searchIcon" />
                </div>
                <div className="searchItm">
                  <RxPerson className="searchIcon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-secondary w-full py-3 px-4 transition">
          <div className="grid gap-3">
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-3">
              <div className="h- bg-white py- w-full">
                <div className="searchItem">
                  <BsCalendarEvent className="searchIcons" />
                  <span
                    //   onClick={toggleDate}
                    className="pl-8 w-full py-[1.65rem] cursor-pointer"
                  >
                    check in - check out
                  </span>
                </div>
              </div>

              <div className="h- bg-white py- w-full">
                <div className="searchItem">
                  <RxPerson className="searchIcons" />
                  <span
                    // onClick={toggleRoomOptions}
                    className="pl-8 w-full py-[1.65rem] cursor-pointer"
                  >
                    1 adult 2 children
                  </span>
                </div>
              </div>
            </div>
            <Button />
          </div>
        </div>
      )}
    </>
  );
};

export default FixedHeader;
