import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const [count, setCount] = useState(0);

  const handleClickSubtract = () => {
    setCount(count - 1);
  };

  return (
    <GlobalContext.Provider
      value={{ hook: "useContext", count, setCount, handleClickSubtract }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
