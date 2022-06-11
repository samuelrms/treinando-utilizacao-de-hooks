import React, { useEffect, useId, useRef, useState } from "react";
import Button from "../../components/Button";
import Cart from "./components/Cart";
import ListCards from "./components/ListCards";

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
    <div>
      <ListCards />
      <hr />
      <Cart />
    </div>
  );
};

export default UseRef;
