import React from "react";
import { DescriptionDefault } from "./styled";

const Description = ({ children, fontSize, color, margin, ...restProps }) => {
  return (
    <DescriptionDefault
      margin={margin}
      color={color}
      fontSize={fontSize}
      {...restProps}
    >
      {children}
    </DescriptionDefault>
  );
};

export default Description;
