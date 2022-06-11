import styled from "styled-components";

export const DefaultTitle = styled.h1`
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ color }) => color};
`;

DefaultTitle.defaultProps = {
  color: "#1d1d1d",
};
