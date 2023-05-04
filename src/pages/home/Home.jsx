import React from "react";
import Heroe from "../../components/heroe/Heroe";
import { useSharedContext } from "../../context/SharedContext";
import ExclusiveRooms from "./components/ExclusiveRooms";
import Gallery from "./components/Gallery";
import Specials from "./components/Specials";
import TopDeals from "./components/TopDeals";

const Home = () => {
  const { setDropdownHeader } = useSharedContext();

  return (
    <div onClick={() => setDropdownHeader(false)}>
      <Heroe />
      <TopDeals />
      <ExclusiveRooms />
      <Specials />
      <Gallery />
    </div>
  );
};

export default Home;
