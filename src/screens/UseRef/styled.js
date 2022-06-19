import styled from "styled-components";
import Container from "../../components/Container";

export const ContainerUseRef = styled(Container)`
  backdrop-filter: blur(15px);
  background: rgba(39, 1, 64, 0.57);
  border-radius: 10px;
  width: 90%;
  padding: 30px;

  hr {
    margin-bottom: 30px;
  }
`;
