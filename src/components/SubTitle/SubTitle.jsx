import React from "react";
import { SubTitleDefault } from "./styled";

const SubTitle = ({ fontSize, children, color, margin, ...restProps }) => {
  return (
    <SubTitleDefault
      color={color}
      fontSize={fontSize}
      margin={margin}
      {...restProps}
    >
      {children}
    </SubTitleDefault>
  );
};

export default SubTitle;
