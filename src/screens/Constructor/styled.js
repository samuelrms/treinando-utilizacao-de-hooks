import styled from "styled-components";
import Container from "../../components/Container";

export const ContainerContructor = styled(Container)`
  backdrop-filter: blur(15px);
  background: rgba(39, 1, 64, 0.57);
  border-radius: 10px;
  width: 90%;
  height: 100vh;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  animation: renderConstructor 0.5s ease;
  @keyframes renderConstructor {
    from {
      opacity: 0;
      transform: translate3d(0, -60px, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`;
