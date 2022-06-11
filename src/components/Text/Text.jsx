import React from "react";
import { TextDefault } from "./styled";

const Text = ({ children, fontSize, color, margin, ...restProps }) => {
  return (
    <TextDefault
      margin={margin}
      color={color}
      fontSize={fontSize}
      {...restProps}
    >
      {children}
    </TextDefault>
  );
};

export default Text;
