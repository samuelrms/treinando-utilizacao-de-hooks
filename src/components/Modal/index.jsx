import React from "react";
import { colors } from "../../styles/colors";
import Button from "../Button";

export const ModalUseSate = ({
  setModal,
  titleModal,
  subTitle,
  description,
}) => {
  const handleClick = () => {
    //Função de callback para handle click, ele sempre terá o valor anterior armazenado dentro
    setModal((ativo) => !ativo);
  };

  return (
    <div>
      <Button
        width="50px"
        height="50px"
        margin="30px 0 0 60px"
        bordeRadius="50%"
        children="X"
        onClick={handleClick}
        background={colors.background.botoes.vermelho}
      />
      <h1>{titleModal}</h1>
      <h2>{subTitle}</h2>
      <h3>{description}</h3>
    </div>
  );
};
