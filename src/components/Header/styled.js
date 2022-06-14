import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-evenly;
  padding: 10px;
  background: #270140;
  position: fixed;
  width: 100%;
  margin-top: -65px;
  z-index: 99;
  a {
    color: #fff;
    padding: 10px;
    border-radius: 10px;
    :hover {
      background: linear-gradient(135deg, #d9042b, #f2b705, #f28705, #f22f1d);
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
