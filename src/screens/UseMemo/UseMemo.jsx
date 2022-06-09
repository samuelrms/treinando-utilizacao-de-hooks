import React, { useMemo, useState } from "react";
import Button from "../../components/Button";

const slowOperation = () => {
  let slow;
  for (let index = 0; index < 100000000; index++) {
    slow = index + index / 10;
  }
  return slow;
};

const UseMemo = () => {
  const [count, setCount] = useState(0);

  const value = useMemo(() => {
    // useMemo irá armazenar um dado na memoria, é muito utilizado para operações lentas
    const localStorage = window.localStorage.getItem("Produto");
    console.log("Ocorreu a operação");
    return localStorage;
  }, []); // array de dependencias mesmo metodo do useEffect

  const returnSlowValue = slowOperation();

  const getPerformance = performance.now(); // performance.now irá retornar uma temporizador de onde está o meu app neste momento aqui agora

  const useMemoValueSlow = useMemo(() => returnSlowValue, []); // aoós o valor guardado na memoria a operação irá ocorrer mais rapidamentes

  // console.log(returnSlowValue);
  // console.log(value);
  console.log(performance.now() - getPerformance); // irá comparar os tempos em ms

  return (
    <Button
      onClick={() => setCount(count + 1)}
      margin="30px"
      width="100px"
      height="40px"
    >
      UseMemo {count}
    </Button>
  );
};

export default UseMemo;
