import React, { useContext } from "react";
import { ContainerProduct } from "./styled";
import Title from "../../../components/Title";
import { GlobalContext } from "../GlobalContext";
import SubTitle from "../../../components/SubTitle";
import Button from "../../../components/Button";
import Content from "../../../components/Content";

const Product = () => {
  const data = useContext(GlobalContext);

  const handleClick = () => {
    data.setCount((count) => count + 1);
  };

  return (
    <ContainerProduct>
      <Title>{data.hook}</Title>
      <SubTitle>Value: {data.count}</SubTitle>
      <Content display="flex" width="200px" justifyContent="space-between">
        <Button
          onClick={handleClick}
          children="Value + 1"
          height="40px"
          width="80px"
        />
        <Button
          onClick={data.handleClickSubtract}
          children="Value - 1"
          height="40px"
          width="80px"
        />
      </Content>
    </ContainerProduct>
  );
};

export default Product;
