import React, { useState } from "react";
import Button from "../../components/Button";
import Description from "../../components/Description/Description";
import Text from "../../components/Text";

const ExampleWithoutUseMemo = () => {
  const [soma, setSoma] = useState(0);

  const getPerformance = performance.now();

  const secondSlowOperation = () => {
    const slowOperation = () => {
      let slow;
      for (let index = 0; index < 100000000; index++) {
        slow = index + index / 10;
      }
      return slow;
    };
    return slowOperation(), setSoma(soma + 1);
  };

  console.log(performance.now() - getPerformance);

  return (
    <>
      <Button
        onClick={() => secondSlowOperation()}
        margin="30px"
        width="100px"
        height="40px"
      >
        UseMemo {soma}
      </Button>
      {soma > 0 && (
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

export default ExampleWithoutUseMemo;
