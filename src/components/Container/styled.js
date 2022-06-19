import styled from "styled-components";

export const ContainerDefault = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  background: ${({ background }) => background};
  padding: ${({ padding }) => padding};
`;

ContainerDefault.defaultProps = {
  margin: "65px auto 30px",
};
