import styled from "styled-components";
import Button from "../../components/Button";

export const ContainerUseEffect = styled.div`
  height: 100%;
  width: 90%;
  background: grey;
  min-height: 600px;
  padding: 0 15px;
  margin: 65px auto 30px;
  backdrop-filter: blur(15px);
  background: rgba(39, 1, 64, 0.57);
  border-radius: 10px;
`;

export const ContentBuy = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ContentButtons = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
    button {
      width: 55%;
      height: 50px;
      margin: 20px auto 0;
      :first-child {
        margin: 40px auto 0;
      }
    }
  }
`;

export const ContentProdutos = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
  img {
    max-width: 100%;
    height: 300px;
    margin-top: 30px;
    border-radius: 10px;
    :last-child {
      margin-left: 30px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    img {
      :last-child {
        margin-left: 0;
      }
    }
  }
`;

export const ProductContainer = styled.div`
  width: 90%;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: flex-start;
    width: 100%;
  }
`;

export const ContentDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ProductButtonContent = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;

  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

export const RenderPreference = styled.div`
  display: flex;
  position: relative;
  padding-bottom: 250px;
`;

export const ButtonPreference = styled(Button)``;

export const GetProductContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  h2 {
    margin: 0 0 0 10px;
  }
  img {
    max-width: 100%;
    height: 350px;
    border-radius: 10px;
    margin-left: 40px;
  }

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    margin: 0 auto;
    img {
      margin-left: 0;
    }
    h2 {
      margin-top: 20px;
    }
  } ;
`;
