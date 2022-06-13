import styled from "styled-components";

export const ContainerHome = styled.div`
  width: 90%;
  background: grey;
  height: 100vh;
  display: flex;
  align-items: center;
  margin: 0 auto;
  flex-direction: column;
  h1 {
    margin: 20px 0 10px;
  }
  h2 {
    text-align: center;
  }
  hr {
    width: 100%;
  }
  p {
    margin: 0 20px;
    font-size: 20px;
  }
`;

export const ContentUseState = styled.div`
  background: #1d1d1d;
  color: #f6f6f6;
  padding: 30px;
  width: 90%;
  border-radius: 10px;
  a {
    padding: 10px 10px 10px 8px;
    width: 100%;
    margin: auto;
  }
`;
