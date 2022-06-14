import React from "react";
import { colors } from "../../styles/colors";
import Button from "../Button";
import Description from "../Description/Description";
import SubTitle from "../SubTitle/SubTitle";
import Title from "../Title/Title";

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
        hoverBackground="linear-gradient(135deg, #d9042b, #f2b705, #f28705, #f22f1d)"
      />
      <Title color="#fff">{titleModal}</Title>
      <SubTitle color="#fff">{subTitle}</SubTitle>
      <Description color="#fff">{description}</Description>
    </div>
  );
};
