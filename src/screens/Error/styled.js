import styled from "styled-components";
import { ContainerContructor } from "../Constructor/styled";

export const ContainerError = styled(ContainerContructor)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 600px;
  div {
    background-color: #000;
    display: flex;
    align-items: center;
    border-radius: 10px;
    margin: 0 20px;
    h1 {
      color: #e35;
    }
  }
`;
