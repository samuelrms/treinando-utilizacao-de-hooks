import React from "react";
import Content from "../../components/Content";
import Line from "../../components/Line/Line";
import Title from "../../components/Title";
import ExampleWithoutUseMemo from "./ExampleWithoutUseMemo";
import ExampleWithUseMemo from "./ExampleWithUseMemo";
import { ContainerUseMemo } from "./styled";

const UseMemo = () => {
  // const value = useMemo(() => {
  //   // useMemo irá armazenar um dado na memoria, é muito utilizado para operações lentas
  //   const localStorage = window.localStorage.getItem("Produto");
  //   console.log("Ocorreu a operação");
  //   return localStorage;
  // }, []); // array de dependencias mesmo metodo do useEffect

  return (
    <ContainerUseMemo>
      <Content width="calc(100%/2 - 70px)">
        <Title color="#FFF" children="Exemplo com useMemo" />
        <ExampleWithUseMemo />
      </Content>
      <Line width="3px" height="400px" margin="0 20px" />
      <Content width="calc(100% / 2 - 70px)">
        <Title color="#FFF" children="Exemplo sem useMemo" />
        <ExampleWithoutUseMemo />
      </Content>
      <Content>
        <Button children={`UseMemo ${count}`} />
      </Content>
    </ContainerUseMemo>
  );
};

export default UseMemo;
