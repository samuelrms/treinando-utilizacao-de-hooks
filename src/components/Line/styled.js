import styled from "styled-components";

export const LineDefault = styled.hr`
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background: ${({ background }) => background};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};

  @media (max-width: 768px) {
    width: ${({ widthTablet }) => widthTablet};
    height: ${({ heightTablet }) => heightTablet};
  }
`;

LineDefault.defaultProps = {
  background:
    "linear-gradient(to bottom,#d9042b,#270140,#f2b705,#f28705,#f22f1d )",
  border: "none",
};
