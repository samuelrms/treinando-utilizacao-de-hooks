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
