import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-evenly;
  padding: 10px;
  background: #000;
  a {
    color: #fff;
    padding: 10px;
    border-radius: 10px;
    :hover {
      background: grey;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 20%;
    padding: 10px 5px 10px 10px;
    justify-content: flex-start;
  }

  @media (max-width: 425px) {
    width: 30%;
  }
  /* @media (max-width: 525px) {
    width: 25%;
  } */
`;
