import React from "react";
import { ContentFooter, FooterContainer } from "./styled";
import Text from "./../Text";

const Footer = () => {
  return (
    <FooterContainer>
      <ContentFooter flexDirection="row">
        <Text>Todos os direitos reservados</Text>
        <Text>
          Projeto criado para fins educacionais, com foco em dar exemplos de
          utilizações de hooks
        </Text>
      </ContentFooter>
    </FooterContainer>
  );
};

export default Footer;
