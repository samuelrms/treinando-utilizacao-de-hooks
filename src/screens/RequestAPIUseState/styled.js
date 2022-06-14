import styled from "styled-components";

export const RequestContainer = styled.div`
  background: grey;
  width: 90%;
  display: flex;
  flex-direction: column;
  height: 650px;
  padding-top: 30px;
  align-items: center;
  margin: 65px auto 30px;
  backdrop-filter: blur(15px);
  background: rgba(39, 1, 64, 0.57);
  border-radius: 10px;

  @media (max-width: 768px) {
    padding: 0 15px;
    button {
      width: 45%;
      background: green;
      :first-child {
        background-color: red;
      }
      :last-child {
        background: blue;
      }
    }
  } ;
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
    border-radius: 10px;
  }
`;
