import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import SpinnerRoller from "./components/spinner/Spinner";
import { publicRoute } from "./navigations/Public-route";
import Footer from "./components/Footer/Footer";
import { useSharedContext } from "./context/SharedContext";

function App() {
  const { setDropdownHeader } = useSharedContext();

  const closeModal = () => {
    setDropdownHeader(false);
  };

  return (
    <>
      <Navbar />
      <Routes>
        {publicRoute.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <Suspense fallback={<SpinnerRoller />}>
                <route.component />
              </Suspense>
            }
          />
        ))}
      </Routes>
      <div onClick={closeModal}>
        <Footer />
      </div>
    </>
  );
}

export default App;
