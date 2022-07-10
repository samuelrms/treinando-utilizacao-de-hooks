import React, { useState } from "react";
import Button from "../../components/Button";
import Description from "../../components/Description/Description";
import { ModalUseSate } from "../../components/Modal";
import { textUseState } from "../../components/mocks/text";
import SubTitle from "../../components/SubTitle/SubTitle";
import Text from "../../components/Text/Text";
import Title from "../../components/Title/Title";
import { colors } from "../../styles/colors";
import {
  ContainerUseState,
  ContentButoonsAndValues,
  ContentContador,
} from "./styled";

const UseState = () => {
  const [active, setActive] = useState(true);
  const [userData, setUserData] = useState({ name: "Samuel Ramos", age: "22" });
  const [modal, setModal] = useState(false);
  const [referenceItem, setReferenceItems] = useState(false);
  const [items, setItems] = useState(["Teste de item 1 ", "Teste de item 2"]);
  const [contador, setContador] = useState(1);
  const [screenItems, setScreenItems] = useState(["Item 1"]);

  const handleClick = () => {
    setActive(!active);
    setUserData({ ...userData, job: "Developer front-end" });
  };

  const handleClickModal = () => {
    setModal(!modal);
  };

  // Maneira incorreta devemos utilizar a função que atualiza para modificar o estado
  // const handleClickItems = () => {
  //   items.push("New Item");
  // };

  // Maneira correta de se modificar os estado
  const handleClickItems = () => {
    setItems(["Novo item"]);
    setReferenceItems(!referenceItem);
  };

  const handleClickContador = () => {
    setContador((contador) => contador + 1);
    setScreenItems((screenItems) => [...screenItems, "Item " + (contador + 1)]);
  };

  const handleClickContadorSubtracao = () => {
    setContador((contador) => contador - 1);
    setScreenItems((screenItems) => [...screenItems, "Item " + (contador - 1)]);
  };

  const clearValueContador = () => {
    setScreenItems([]);
    setContador(0);
  };

  const dataInversion = {
    activeToDeactivated: active
      ? textUseState.botoes.ativados[0]
      : textUseState.botoes.desativados[0],
    deactivatedToActive: !active
      ? textUseState.botoes.ativados[1]
      : textUseState.botoes.desativados[1],
    modalState: modal
      ? textUseState.botoes.modal[1]
      : textUseState.botoes.modal[0],
    openingSentence: referenceItem
      ? textUseState.botoes.alterarFrase[1]
      : textUseState.botoes.alterarFrase[0],
  };

  const backgroundInversion = {
    activeToDeactivated: active
      ? colors.background.botoes.vermelho
      : colors.background.botoes.verde,
    activeToDeactivatedModal: modal
      ? colors.background.botoes.vermelho
      : colors.background.botoes.verde,
    disabledopeningSentence: referenceItem
      ? colors.background.botoes.vermelho
      : colors.background.botoes.verde,
  };

  return (
    <ContainerUseState>
      <Title color="#fff">{textUseState.titulo.titulo}</Title>
      <hr />
      <div>
        <SubTitle color="#fff">
          useState (boolean) para alterar estado e propriedades de outro objeto
        </SubTitle>
        <Button
          width="100px"
          height="50px"
          children={dataInversion.activeToDeactivated}
          onClick={handleClick}
          background="#270140"
        />
        <Text color="#fff">
          useState vinculadando dois botões tornando um reativo ao outro, onde o
          botão preto altera do estado do botão de baixo trocando sua frase, sua
          cor e desabilitando o mesmo
        </Text>
        <Button
          disabled={active}
          width="100%"
          height="50px"
          margin="0 0 40px 0"
          background={backgroundInversion.activeToDeactivated}
          hoverBackground="linear-gradient(135deg, #d9042b, #f2b705, #f28705, #f22f1d)"
          cursor=""
          children={dataInversion.deactivatedToActive}
        />
      </div>
      <hr />
      <div>
        <SubTitle color="#fff">
          useState (boolean) vinculado a uma renderização de condição para poder
          mostrar algo como um "Modal" na tela
        </SubTitle>
        <Button
          width="60%"
          height="50px"
          margin={!modal ? "10px 0 0 0" : "100px 0 0 25%"}
          children={dataInversion.modalState}
          onClick={handleClickModal}
          background={backgroundInversion.activeToDeactivatedModal}
          hoverBackground="linear-gradient(135deg, #d9042b, #f2b705, #f28705, #f22f1d)"
          display={!modal ? "" : "none"}
        />
        <Text color="#fff">
          useState usado como um estado para abrir um modal com uma renderização
          de condição, a mesma pode ser fechada clicando em seus botões quando
          eles estão vermelhos.
        </Text>
        {modal && (
          <ModalUseSate
            setModal={setModal}
            titleModal={userData.name}
            subTitle={userData.age}
            description={userData.job}
          />
        )}
      </div>
      <hr />
      <div>
        <SubTitle color="#fff">
          useState (objeto && boolean) utilizado para alterar frase
        </SubTitle>
        <Text color="#fff">
          useState utilizado para alterar frase e condicionado a um valor
          verdadeiro para uma vez que a frase for trocada o botão não ser mais
          clicavel
        </Text>
        <Button
          margin="0"
          height="50px"
          children={dataInversion.openingSentence}
          onClick={handleClickItems}
          disabled={referenceItem}
          background={backgroundInversion.disabledopeningSentence}
          cursor={!referenceItem ? "pointer" : ""}
        />
        <Description color="#fff"> {items}</Description>
      </div>
      <hr />
      <ContentContador>
        <SubTitle color="#fff">
          useState (number) utilizado para atualizar um contador com função de
          callback
        </SubTitle>
        <ContentButoonsAndValues>
          <div>
            <Button
              margin="0"
              height="50px"
              width="50%"
              children="Zerar contador"
              onClick={clearValueContador}
              background="#270140"
            />
            <Button
              margin="10px 0 0"
              width="50%"
              height="50px"
              children="+"
              onClick={handleClickContador}
              disabled={contador >= 5}
              cursor={contador < 5 ? "pointer" : ""}
              background="#270140"
            />
            <Button
              margin="10px 0 0"
              width="50%"
              height="50px"
              children="-"
              onClick={handleClickContadorSubtracao}
              disabled={contador <= 0}
              cursor={contador <= 0 ? "" : "pointer"}
              background="#270140"
            />
          </div>
          <div>
            {screenItems.map((screenItems) => (
              <li key={screenItems}>{screenItems}</li>
            ))}
          </div>
        </ContentButoonsAndValues>
      </ContentContador>
    </ContainerUseState>
  );
};
export default UseState;
