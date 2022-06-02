import styled from "styled-components";

export const RequestContainer = styled.div`
  background: grey;
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 650px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const ProductContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    max-width: 80%;
    height: 400px;
  }
`;
