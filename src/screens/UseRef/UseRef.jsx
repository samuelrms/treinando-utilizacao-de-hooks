import React, { useEffect, useId, useRef, useState } from "react";
import Button from "../../components/Button";
import Cart from "./components/Cart";
import ListCards from "./components/ListCards";
import { Container } from "./styled";

const UseRef = () => {
  // const video = useRef();
  // useEffect(() => {
  //   video.current = "teste";
  //   // passando o current podemos ter o objeto mutavel para podermos mudar em qualquer momento
  //   console.log(video.current.currentTime);
  // }, []);
  // return <video ref={video} />;

  //----------------------------------------------

  return (
    <Container>
      <ListCards />
      <hr />
      <Cart />
    </Container>
  );
};

export default UseRef;
