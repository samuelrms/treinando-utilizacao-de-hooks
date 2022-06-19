import styled from "styled-components";
import Container from "../../components/Container";

export const ContainerUseCallback = styled(Container)`
  height: 100vh;
  backdrop-filter: blur(15px);
  background: rgba(39, 1, 64, 0.57);
  border-radius: 10px;
  width: 90%;
  padding: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;
