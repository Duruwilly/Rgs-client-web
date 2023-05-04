import { useContext, createContext, useEffect, useState } from "react";

const SharedContext = createContext();

export const SharedStateProvider = ({ children }) => {
  const [dropdownHeader, setDropdownHeader] = useState(false);

  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 1050px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 1050px)")
      .addEventListener("change", (e) => setMatches(e.matches));

    return () => {
      window
        .matchMedia("(min-width: 1050px)")
        .removeEventListener("change", (e) => setMatches(e.matches));
    };
  }, []);

  return (
    <SharedContext.Provider
      value={{
        matches,
        dropdownHeader,
        setDropdownHeader,
      }}
    >
      {children}
    </SharedContext.Provider>
  );
};

export const useSharedContext = () => useContext(SharedContext);
