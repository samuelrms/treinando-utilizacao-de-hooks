import React from "react";
import { colors } from "../../styles/colors";
import Button from "../Button";

export const ModalUseSate = ({
  modal,
  setModal,
  titleModal,
  subTitle,
  description,
}) => {
  return (
    <div>
      <Button
        width="50px"
        height="50px"
        margin="30px 0 0 60px"
        bordeRadius="50%"
        children="X"
        onClick={() => setModal(modal)}
        background={colors.background.botoes.vermelho}
      />
      <h1>{titleModal}</h1>
      <h2>{subTitle}</h2>
      <h3>{description}</h3>
    </div>
  );
};
