import React from "react";
import Text from "../../components/Text/Text";
import Title from "../../components/Title/Title";
import { ProductContainer } from "./styled";

const Product = ({ data }) => {
  return (
    <ProductContainer>
      <Title color="#fff">{data.nome}</Title>
      <Text color="#fff">R$ {data.preco}</Text>
      <img src={data.fotos[0].src} alt={data.fotos[0].titulo} />
    </ProductContainer>
  );
};

export default Product;
