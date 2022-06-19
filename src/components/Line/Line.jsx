import React from "react";
import { LineDefault } from "./styled";

const Line = ({
  margin,
  padding,
  width,
  height,
  background,
  border,
  borderRadius,
  heightTablet,
  widthTablet,
  ...restProps
}) => {
  return (
    <LineDefault
      margin={margin}
      padding={padding}
      width={width}
      height={height}
      background={background}
      border={border}
      borderRadius={borderRadius}
      heightTablet={heightTablet}
      widthTablet={widthTablet}
      {...restProps}
    />
  );
};

export default Line;
