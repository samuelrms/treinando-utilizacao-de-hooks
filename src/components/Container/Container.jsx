import React from "react";
import { ContainerDefault } from "./styled";

const Container = ({
  children,
  width,
  height,
  margin,
  background,
  ...restProps
}) => {
  return (
    <ContainerDefault
      height={height}
      width={width}
      margin={margin}
      background={background}
      {...restProps}
    >
      {children}
    </ContainerDefault>
  );
};

export default Container;
