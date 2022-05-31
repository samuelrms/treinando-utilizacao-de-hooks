import React, { useState } from "react";
import Button from "../../components/Button";
import { textUseState } from "../../components/mooks/text";
import { colors } from "../../styles/colors";

const UseState = () => {
  const [active, setActive] = useState(true);

  const handleClick = () => setActive(!active);

  const dataInversion = {
    activeToDeactivated: active
      ? textUseState.botoes.ativados[0]
      : textUseState.botoes.desativados[0],
    deactivatedToActive: !active
      ? textUseState.botoes.ativados[1]
      : textUseState.botoes.desativados[1],
  };

  return (
    <>
      <Button
        width="100px"
        height="50px"
        children={dataInversion.activeToDeactivated}
        onClick={handleClick}
      />
      <Button
        disabled={active}
        width="100%"
        height="50px"
        margin="30px 0 0 0"
        background={
          active
            ? colors.background.botoes.vermelho
            : colors.background.botoes.verde
        }
        cursor={active ? "pointer" : ""}
        children={dataInversion.deactivatedToActive}
      />
    </>
  );
};

export default UseState;
