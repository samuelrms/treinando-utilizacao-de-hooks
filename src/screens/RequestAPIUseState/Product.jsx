import React from "react";
import { ProductContainer } from "./styled";

const Product = ({ data }) => {
  return (
    <ProductContainer>
      <h1>{data.nome}</h1>
      <p>R$ {data.preco}</p>
      <img src={data.fotos[0].src} alt={data.fotos[0].titulo} />
    </ProductContainer>
  );
};

export default Product;
