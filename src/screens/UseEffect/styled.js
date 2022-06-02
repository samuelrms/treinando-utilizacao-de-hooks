import styled from "styled-components";
import Button from "../../components/Button";

export const ContainerUseEffect = styled.div`
  height: 100%;
  width: 90%;
  background: grey;
  margin: 0 auto;
  min-height: 600px;
`;

export const ContentBuy = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ContentButtons = styled.div`
  display: flex;
  flex-direction: row;
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
`;

export const ProductContainer = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
`;

export const ContentDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const ProductButtonContent = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
`;

export const RenderPreference = styled.div`
  display: flex;
  position: relative;
  padding-bottom: 100px;
`;

export const ButtonPreference = styled(Button)`
  position: absolute;
  right: 30px;
  top: 10px;
`;

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
`;
