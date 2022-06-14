import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background: linear-gradient(to left top, #D9042B, #270140, #F2B705, #F28705, #F22F1D);
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
