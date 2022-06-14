import React, { useState } from "react";
import Button from "../../components/Button";
import SubTitle from "../../components/SubTitle/SubTitle";
import Product from "./Product";
import { ButtonsContainer, RequestContainer } from "./styled";

const RequestAPIUseState = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);

  const handleClick = async (event) => {
    // console.log(event.target.innerText.toLowerCase()); // pegar o texto dentro do botão
    setLoading(true);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText.toLowerCase()}`,
    );
    console.log(response);
    const json = await response.json();
    console.log(json);
    setData(json);
    setLoading(false);
  };

  return (
    <RequestContainer>
      <ButtonsContainer>
        <Button
          onClick={handleClick}
          children="Notebook"
          width="90px"
          height="40px"
          margin="0 30px 0 0"
          background="#270140"
        />
        <Button
          onClick={handleClick}
          height="40px"
          children="SmartPhone"
          width="90px"
          background="#270140"
        />
        <Button
          onClick={handleClick}
          children="Tablet"
          width="90px"
          height="40px"
          margin="0 0 0 30px"
          background="#270140"
        />
      </ButtonsContainer>
      {loading && <SubTitle color="#fff">Loading...</SubTitle>}
      {!loading && data && <Product data={data} />}
    </RequestContainer>
  );
};

export default RequestAPIUseState;
