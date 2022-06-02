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
`;
