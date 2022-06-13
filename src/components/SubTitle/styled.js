import styled from "styled-components";

export const SubTitleDefault = styled.h2`
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ color }) => color};
  margin: ${({ margin }) => margin};
`;

SubTitleDefault.defaultProps = {
  color: "#1d1d1d",
};
