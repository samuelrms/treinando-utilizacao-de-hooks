import React from "react";
import Product from "./Product";
import { ContainerUseContext } from "./styled";
import { GlobalStorage } from "./GlobalContext";
import Line from "../../components/Line";

const UseContext = () => {
  return (
    <GlobalStorage>
      <ContainerUseContext>
        <Product />
        <Line width="100%" height="3px" />
      </ContainerUseContext>
    </GlobalStorage>
  );
};

export default UseContext;
