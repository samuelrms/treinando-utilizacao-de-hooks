import React from "react";
import Line from "../../components/Line/Line";
import Cart from "./components/Cart";
import ListCards from "./components/ListCards";
import { ContainerUseRef } from "./styled";

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
    <ContainerUseRef>
      <ListCards />
      <Line
        width="100%"
        height="3px"
        background="linear-gradient(to left,#d9042b,#270140,#f2b705,#f28705,#f22f1d )"
      />
      <Cart />
    </ContainerUseRef>
  );
};

export default UseRef;
