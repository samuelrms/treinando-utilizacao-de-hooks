import React from "react";
import { SubTitleDefault } from "./styled";

const SubTitle = ({
  fontSize,
  children,
  color,
  margin,
  padding,
  ...restProps
}) => {
  return (
    <SubTitleDefault
      color={color}
      fontSize={fontSize}
      margin={margin}
      padding={padding}
      {...restProps}
    >
      {children}
    </SubTitleDefault>
  );
};

export default SubTitle;
