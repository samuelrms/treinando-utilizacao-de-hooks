import styled from "styled-components";

export const ContainerContructor = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  /* align-items: center;
  justify-content: center; */
  h1 {
    margin: auto;
    background: #000;
    color: #fff;
    padding: 30px;
    border-radius: 10px;
    height: 10%;
  }

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
