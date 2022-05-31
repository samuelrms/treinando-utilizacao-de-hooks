import React, { useState } from "react";
import Button from "../../components/Button";
import { ModalUseSate } from "../../components/Modal";
import { textUseState } from "../../components/mooks/text";
import { colors } from "../../styles/colors";
import { Container } from "./styled";

const UseState = () => {
  const [active, setActive] = useState(true);
  const [userData, setUserData] = useState({ name: "Samuel Ramos", age: "22" });
  const [modal, setModal] = useState(false);
  const [referenceItem, setReferenceItems] = useState(false);
  const [items, setItems] = useState(["Item1 ", "Item2"]);

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
    setItems(["New Item"]);
    setReferenceItems(!referenceItem);
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
    <Container>
      <h1>{textUseState.titulo.titulo}</h1>
      <hr />
      <div>
        <h2>
          useState (boolean) para alterar estado e propriedades de outro objeto{" "}
        </h2>
        <Button
          width="100px"
          height="50px"
          children={dataInversion.activeToDeactivated}
          onClick={handleClick}
        />
        <p>
          useState vinculadando dois botões tornando um reativo ao outro, onde o
          botão preto altera do estado do botão de baixo trocando sua frase, sua
          cor e desabilitando o mesmo
        </p>
        <Button
          disabled={active}
          width="100%"
          height="50px"
          margin="0 0 40px 0"
          background={backgroundInversion.activeToDeactivated}
          cursor={active ? "pointer" : ""}
          children={dataInversion.deactivatedToActive}
        />
      </div>
      <hr />
      <div>
        <h2>
          useState (boolean) vinculado a uma renderização de condição para poder
          mostrar algo como um "Modal" na tela
        </h2>
        <Button
          width="60%"
          height="50px"
          margin={!modal ? "10px 0 0 0" : "100px 0 0 25%"}
          children={dataInversion.modalState}
          onClick={handleClickModal}
          background={backgroundInversion.activeToDeactivatedModal}
        />
        <p>
          useState usado como um estado para abrir um modal com uma renderização
          de condição, a mesma pode ser fechada clicando em seus botões quando
          eles estão vermelhos.
        </p>
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
        <h2>useState (objeto && boolean) utilizado para alterar frase</h2>
        <p>
          useState utilizado para alterar frase e condicionado a um valor
          verdadeiro para uma vez que a frase for trocada o botão não ser mais
          clicavel
        </p>
        <Button
          margin="0"
          height="50px"
          children={dataInversion.openingSentence}
          onClick={handleClickItems}
          disabled={referenceItem}
          background={backgroundInversion.disabledopeningSentence}
          cursor={!referenceItem ? "pointer" : ""}
        />
        <h2> {items}</h2>
      </div>
    </Container>
  );
};
export default UseState;
