import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: #270140;
  color: #fff;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 10%;
    h1 {
      transform: rotate(270deg);
      z-index: 99;
      margin: 0;
      padding: 0;
    }
  }
`;
