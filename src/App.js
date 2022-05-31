import React from "react";
import UseState from "./hooks/UseState";
import { GlobalStyle } from "./styles/GlobalStyle";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <UseState />
    </div>
  );
};

export default App;
