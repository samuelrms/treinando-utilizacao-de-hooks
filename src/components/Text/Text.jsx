import React from "react";
import { TextDefault } from "./styled";

const Text = ({ children, fontSize, color, margin, cursor, ...restProps }) => {
  return (
    <TextDefault
      margin={margin}
      color={color}
      fontSize={fontSize}
      cursor={cursor}
      {...restProps}
    >
      {children}
    </TextDefault>
  );
};

export default Text;
