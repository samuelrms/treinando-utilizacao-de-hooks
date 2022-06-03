import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background: #A8A8A8;
    box-sizing: border-box;
    margin: 0;
    a{
      text-decoration: none;
      color: #1d1d1d;
    }
    @media (max-width: 768px){
     #root{ display: flex;
      flex-direction: row;
      width: 100%;}
    }
}
`;
