import React, { useEffect, useState } from "react";
import { GetProductContainer } from "../styled";

const GetProduct = ({ items }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    items !== null &&
      fetch(
        `https://ranekapi.origamid.dev/json/api/produto/${items.toLowerCase()}`,
      )
        .then((response) => response.json())
        .then((json) => setData(json));
    console.log({ data });
  }, [items]);

  return (
    <>
      {data !== null && (
        <GetProductContainer>
          <h2>{data.nome}</h2>
          <h2>R$ {data.preco}</h2>
          <img src={data.fotos[0].src} alt={data.fotos[0].titulo} />
        </GetProductContainer>
      )}
    </>
  );
};

export default GetProduct;
