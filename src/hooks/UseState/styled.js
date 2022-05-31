import styled from "styled-components";

export const Container = styled.div`
  background: #a9b9c9;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 80%;
  margin: 0 auto;

  hr {
    height: 5px;
    background-color: #e35;
    width: 100%;
    border: none;
  }
`;

export const ContentContador = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContentButoonsAndValues = styled.div`
  display: flex;
  flex-direction: row;
  div {
    display: flex;
    width: 50%;
    flex-direction: column;
  }
`;
