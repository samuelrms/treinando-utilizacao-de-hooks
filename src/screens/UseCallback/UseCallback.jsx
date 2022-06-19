import React, { useCallback, useState } from "react";
import Button from "../../components/Button";
import Content from "../../components/Content";
import Text from "../../components/Text";
import { ContainerUseCallback } from "./styled";

const Exemple = () => {
  const firstExemple = new Set();
  const secondExemple = new Set();
  // Para a conferencia irei utilizar o Set() pois ele permite apenas valores únicos dentro do mesmo, ou seja não aceita valores repetidos

  const firstHandleClick = () => {
    console.log("Exemplo 1");
    alert("Olhe o console");
  };

  const secondHandleClick = useCallback(() => {
    // useCallback cria a função apenas uma vez, não a recria a cada renderização
    console.log("Exemplo 2");
    alert("Olhe o console");
  }, []);

  firstExemple.add(firstExemple);
  secondExemple.add(secondExemple);

  console.log("====================================");
  console.log("Exemplo 1", { firstExemple });
  console.log("Exemplo 2", { secondExemple });
  console.log("====================================");

  return (
    <Content>
      <Text
        color="#fff"
        fontSize="20px"
        cursor="pointer"
        onClick={firstHandleClick}
        children="Exemple 1"
      />
      <Text
        color="#fff"
        fontSize="20px"
        cursor="pointer"
        onClick={secondHandleClick}
        children="Exemple 2"
      />
    </Content>
  );
};

const UseCallback = () => {
  const [count, setCount] = useState(0);

  return (
    <ContainerUseCallback>
      <Exemple />
      <Content>
        <Button
          onClick={() => setCount(count + 1)}
          margin="30px"
          width="100px"
          height="40px"
        >
          useCallback {count}
        </Button>
      </Content>
    </ContainerUseCallback>
  );
};

export default UseCallback;
