import styled from "styled-components";

export const TextDefault = styled.p`
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ color }) => color};
  margin: ${({ margin }) => margin};
`;
