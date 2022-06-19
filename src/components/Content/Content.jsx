import React from "react";
import { ContentDefault } from "./styled";

const Content = ({
  children,
  width,
  height,
  margin,
  background,
  display,
  justifyContent,
  alignItems,
  alignContent,
  flexDirection,
  flexWrap,
  maxWidth,
  maxHeight,
  ...restProps
}) => {
  return (
    <ContentDefault
      height={height}
      width={width}
      margin={margin}
      background={background}
      display={display}
      justifyContent={justifyContent}
      alignItems={alignItems}
      alignContent={alignContent}
      flexDirection={flexDirection}
      flexWrap={flexWrap}
      maxHeight={maxHeight}
      maxWidth={maxWidth}
      {...restProps}
    >
      {children}
    </ContentDefault>
  );
};

export default Content;
