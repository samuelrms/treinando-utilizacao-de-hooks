import styled from "styled-components";

export const ContainerHome = styled.div`
  width: 100%;
  background: grey;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    cursor: none;
    padding: 20px;
    :hover {
      color: #fff;
      background: #000;
      border-radius: 10px;
    }
  }
`;
