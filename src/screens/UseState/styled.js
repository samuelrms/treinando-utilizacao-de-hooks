import styled from "styled-components";

export const Container = styled.div`
  background: grey;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;
  width: calc(90% - 40px);
  padding: 0 20px 20px;

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
  :last-child {
    div {
      padding-bottom: 30px;
      flex-wrap: wrap;
    }
  }
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
