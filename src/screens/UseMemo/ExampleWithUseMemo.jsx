import React, { useMemo, useState } from "react";
import Button from "../../components/Button";
import Content from "../../components/Content";
import Description from "../../components/Description/Description";
import Text from "../../components/Text";
import Title from "../../components/Title";

const ExampleWithUseMemo = () => {
  const [count, setCount] = useState(0);

  const slowOperation = () => {
    let slow;
    for (let index = 0; index < 100000000; index++) {
      slow = index + index / 10;
    }
    return slow;
  };

  const getPerformance = performance.now(); // performance.now irá retornar uma temporizador de onde está o meu app neste momento aqui agora

  const useMemoValueSlow = useMemo(() => slowOperation(), []); // após o valor guardado na memoria a operação irá ocorrer mais rapidamentes

  return (
    <>
      <Button
        onClick={() => setCount(count + 1)}
        margin="30px"
        width="100px"
        height="40px"
      >
        UseMemo {count}
      </Button>
      {count > 0 && (
        <>
          <Description
            color="#FFF"
            children="Tempo que demora para ocorrer a operação"
          />
          <Text
            color="#FFF"
            fontSize="20px"
            children={`${performance.now() - getPerformance} tempo em ms`}
          />
        </>
      )}
    </>
  );
};

export default ExampleWithUseMemo;
