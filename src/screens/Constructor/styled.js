import styled from "styled-components";

export const ContainerContructor = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 600px;
  padding: 0 0 100px;
  div {
    background-color: #000;
    display: flex;
    align-items: center;
    border-radius: 10px;
    margin: 0 20px;
    h1 {
      color: #fff;
      text-align: center;
    }
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
