import React from "react";
import { DefaultTitle } from "./styled";

const Title = ({ children, fontSize, ...restProps }) => {
  return (
    <DefaultTitle fontSize={fontSize} {...restProps}>
      {children}
    </DefaultTitle>
  );
};

export default Title;
