import React from "react";
import Content from "../../components/Content";
import Text from "../../components/Text";
import Title from "../../components/Title";
import { ContainerContructor } from "./styled";

const Constructor = () => {
  return (
    <ContainerContructor>
      <Content
        display="flex"
        background="#000"
        borderRadius="10px"
        alignItems="center"
      >
        <Text>🚧👷🚧</Text>
        <Title color="#fff" margin="0 20px">
          Página em construção
        </Title>
        <Text>🚧👷🚧</Text>
      </Content>
    </ContainerContructor>
  );
};

export default Constructor;
