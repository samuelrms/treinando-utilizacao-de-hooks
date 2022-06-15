import React from "react";
import { ContentDefault } from "./styled";

const Content = ({
  children,
  width,
  height,
  margin,
  background,
  ...restProps
}) => {
  return (
    <ContentDefault
      height={height}
      width={width}
      margin={margin}
      background={background}
      {...restProps}
    >
      {children}
    </ContentDefault>
  );
};

export default Content;
