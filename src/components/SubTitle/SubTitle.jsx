import React from "react";
import { SubTitleDefault } from "./styled";

const SubTitle = ({ fontSize, children, color, ...restProps }) => {
  return (
    <SubTitleDefault color={color} fontSize={fontSize} {...restProps}>
      {children}
    </SubTitleDefault>
  );
};

export default SubTitle;
