import React, { useState } from "react";
import Button from "../../components/Button";
import { textUseState } from "../../components/mooks/text";
import { colors } from "../../styles/colors";

const UseState = () => {
  const [active, setActive] = useState(true);
  const [userData, setUserData] = useState({ name: "Samuel Ramos", age: "22" });
  const [modal, setModal] = useState(false);

  const handleClick = () => {
    setActive(!active);
    setUserData({ ...userData, job: "Developer front-end" });
  };

  const handleClickModal = () => {
    setModal(!modal);
  };

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
      <Button
        width="60%"
        height="50px"
        margin={!modal ? "100px 0 0 0" : "100px 0 0 25%"}
        children="Open Modal"
        onClick={handleClickModal}
        background={
          modal
            ? colors.background.botoes.vermelho
            : colors.background.botoes.verde
        }
      />
      {modal && (
        <div>
          <Button
            width="50px"
            height="50px"
            margin="30px 0 0 60px"
            bordeRadius="50%"
            children="X"
            onClick={handleClickModal}
            background={colors.background.botoes.vermelho}
          />
          <h1>{userData.name}</h1>
          <h2>{userData.age}</h2>
          {active && <h3>{userData.job}</h3>}
        </div>
      )}
    </>
  );
};

export default UseState;
