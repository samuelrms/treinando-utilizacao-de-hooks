import React, { useState } from "react";
import Button from "../../Button";
import { textUseState } from "../../mooks/text";
import { colors } from "../../styles/colors";

const UseState = () => {
  const [active, setActive] = useState(false);
  console.log(textUseState.botoes.ativados[1]);
  return (
    <>
      <Button
        width="100px"
        height="50px"
        children={
          active
            ? textUseState.botoes.ativados[0]
            : textUseState.botoes.desativados[0]
        }
        onClick={() => setActive(!active)}
      />
      <Button
        disabled={active}
        width="100%"
        height="50px"
        margin="30px 0 0 0"
        background={active ? colors.background.botoes.vermelho : ""}
        cursor={active ? "pointer" : ""}
        children={
          !active
            ? textUseState.botoes.ativados[1]
            : textUseState.botoes.desativados[1]
        }
      />
    </>
  );
};

export default UseState;
