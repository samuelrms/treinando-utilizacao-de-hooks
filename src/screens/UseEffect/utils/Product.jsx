import React, { useEffect, useState } from "react";
import Button from "../../../components/Button";
import {
  ContentDescription,
  ProductButtonContent,
  ProductContainer,
} from "../styled";
import GetProduct from "./GetProduct";

const Product = () => {
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const handleScroll = (event) => {
      // console.log(event);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      // essa função só occorre quando o elemento acima sai da tela
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    product !== null && window.localStorage.setItem("Produto", product);
  }, [product]);

  useEffect(() => {
    const localProduct = window.localStorage.getItem("Produto");
    localProduct !== null && setProduct(localProduct);
    console.log(localProduct);
  }, []);

  const handleClick = ({ target }) => {
    setProduct(target.innerText);
  };

  return (
    <ProductContainer>
      <ContentDescription>
        <h1>Minhas preferencias</h1>
        <h2>Produto de preferência: {product}</h2>
      </ContentDescription>
      <ProductButtonContent>
        <Button
          onClick={handleClick}
          width="60%"
          height="50px"
          margin="0 0 20px 0"
          children="Notebook"
          widthTablet="100%"
        />
        <Button
          onClick={handleClick}
          height="50px"
          width="60%"
          children="SmartPhone"
          widthTablet="100%"
        />
      </ProductButtonContent>
      <GetProduct items={product} />
    </ProductContainer>
  );
};

export default Product;
