import styled from "styled-components";
import Container from "../../components/Container";

export const ContainerUseState = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: calc(90% - 40px);
  padding: 0 20px 20px;

  backdrop-filter: blur(15px);
  background: rgba(39, 1, 64, 0.57);
  border-radius: 10px;

  hr {
    height: 5px;
    background: linear-gradient(
      to left,
      #d9042b,
      #270140,
      #f2b705,
      #f28705,
      #f22f1d
    );
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
    list-style: none;
    li {
      color: #fff;
      font-size: 22px;
    }
  }
`;
