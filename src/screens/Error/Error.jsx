import React from "react";
import { ContainerError } from "./styled";

const Error = () => {
  return (
    <ContainerError>
      <div>
        <p> 🚫🛑🚫</p>
        <h1>Ocorreu um erro, você não deveria estar aqui...</h1>
        <p> 🚫🛑🚫</p>
      </div>
    </ContainerError>
  );
};

export default Error;
