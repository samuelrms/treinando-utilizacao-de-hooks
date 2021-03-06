import styled from "styled-components";
import Container from "../../components/Container";

export const ContainerHome = styled(Container)`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  backdrop-filter: blur(15px);
  background: rgba(39, 1, 64, 0.57);
  border-radius: 10px;

  h1 {
    margin: 20px 0 10px;
  }
  h2 {
    text-align: center;
  }
  hr {
    width: 100%;
  }
  p {
    font-size: 20px;
  }
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
    margin-bottom: 30px;
  }
`;

export const ContentUseState = styled.div`
  background: rgba(39, 1, 64, 0.77);
  color: #f6f6f6;
  padding: 30px;
  width: 90%;
  border-radius: 10px;
`;

export const ContentUseRef = styled(ContentUseState)`
  margin: 30px 0;
`;
