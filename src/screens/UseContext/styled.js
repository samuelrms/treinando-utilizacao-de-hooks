import styled from "styled-components";
import Container from "../../components/Container";

export const ContainerUseContext = styled(Container)`
  background: rgba(39, 1, 64, 0.57);
  justify-content: flex-start;
  backdrop-filter: blur(15px);
  border-radius: 10px;
  width: 90%;
  height: 100vh;
  padding: 30px;
  display: flex;
  flex-direction: column;
`;
