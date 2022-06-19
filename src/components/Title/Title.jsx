import React from "react";
import { DefaultTitle } from "./styled";

const Title = ({
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
    <DefaultTitle
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
    </DefaultTitle>
  );
};

export default Title;
