import React from "react";
import { SubTitleDefault } from "./styled";

const SubTitle = ({
  children,
  fontSize,
  color,
  margin,
  cursor,
  padding,
  background,
  borderRadius,
  border,
  ...restProps
}) => {
  return (
    <SubTitleDefault
      fontSize={fontSize}
      margin={margin}
      color={color}
      cursor={cursor}
      padding={padding}
      background={background}
      borderRadius={borderRadius}
      border={border}
      {...restProps}
    >
      {children}
    </SubTitleDefault>
  );
};

export default SubTitle;
