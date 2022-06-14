import styled from "styled-components";

export const ButtonDefault = styled.button`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  color: ${({ color }) => color};
  background: ${({ background }) => background};
  border-radius: ${({ bordeRadius }) => bordeRadius};
  border: ${({ border }) => border};
  cursor: ${({ cursor }) => cursor};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  box-shadow: ${({ boxShadow }) => boxShadow};
  display: ${({ display }) => display};

  :hover {
    background: ${({ hoverBackground }) => hoverBackground};
  }

  @media (max-width: 768px) {
    width: ${({ widthTablet }) => widthTablet};
    height: ${({ heightTablet }) => heightTablet};
    margin: ${({ marginTablet }) => marginTablet};
    padding: ${({ paddingTablet }) => paddingTablet};
    position: ${({ positionTablet }) => positionTablet};
    top: ${({ topTablet }) => topTablet};
    left: ${({ leftTablet }) => leftTablet};
    right: ${({ rightTablet }) => rightTablet};
    bottom: ${({ bottomTablet }) => bottomTablet};
  }
`;

ButtonDefault.defaultProps = {
  width: "100%",
  height: "100%",
  color: "#fff",
  background: "#000",
  bordeRadius: "5px",
  border: "none",
  cursor: "pointer",
  padding: "",
  margin: "",
};
