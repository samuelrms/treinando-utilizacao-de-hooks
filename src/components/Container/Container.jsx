import React from "react";
import { ContainerDefault } from "./styled";

const Container = ({
  children,
  width,
  height,
  margin,
  background,
  padding,
  ...restProps
}) => {
  return (
    <ContainerDefault
      height={height}
      width={width}
      margin={margin}
      background={background}
      padding={padding}
      {...restProps}
    >
      {children}
    </ContainerDefault>
  );
};

export default Container;
