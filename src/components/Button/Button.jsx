import React from "react";
import { ButtonDefault } from "./styled";

const Button = ({
  onClick,
  children,
  width,
  height,
  color,
  background,
  bordeRadius,
  border,
  cursor,
  widthTablet,
  heightTablet,
  marginTablet,
  paddingTablet,
  boxShadow,
  hoverBackground,
  ...restProps
}) => {
  return (
    <ButtonDefault
      onClick={onClick}
      width={width}
      height={height}
      color={color}
      background={background}
      bordeRadius={bordeRadius}
      border={border}
      cursor={cursor}
      widthTablet={widthTablet}
      heightTablet={heightTablet}
      marginTablet={marginTablet}
      paddingTablet={paddingTablet}
      boxShadow={boxShadow}
      hoverBackground={hoverBackground}
      {...restProps}
    >
      {children}
    </ButtonDefault>
  );
};

export default Button;
