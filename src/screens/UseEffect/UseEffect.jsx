import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import Product from "./utils/Product";
import {
  ButtonPreference,
  ContainerUseEffect,
  ContentButtons,
  ContentBuy,
  ContentProdutos,
  RenderPreference,
} from "./styled";
import { colors } from "../../styles/colors";

const UseEffect = () => {
  const [contador, setContador] = useState(1);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(false);

  // useEffect(() => {
  //   console.log(`Ocorreu atualização ${contador} vezes`);
  // }); // Efeito vai sempre ocorrer (atualizar)

  // useEffect(() => {
  //   console.log(`Ocorreu atualização ${contador} vezes`);
  // }, []); // Efeito vai ser renderizado apenas uma vez

  useEffect(() => {
    document.title =
      contador > 1 ? `Adicionados ao carrinho ${contador}` : document.title;
  }, [contador]); // Efeito vai ser atualizado sempre que o estado definido como dependencia for atualizado

  useEffect(() => {
    setLoading(true);
    fetch("https://ranekapi.origamid.dev/json/api/produto/notebook")
      .then((response) => response.json())
      .then((json) => setData(json));
    setLoading(false);
  }, []); // Se deixar sem dependencia (mesmo que seja vazio) o efeito vai entrar em looping

  const handleClick = () => {
    setContador(contador + 1);
  };

  const handleClickReduce = () => {
    setContador(contador > 0 ? contador - 1 : contador);
  };

  const handleClickClear = () => {
    setContador(0);
  };

  return (
    <ContainerUseEffect>
      <ContentBuy>
        {loading && <h2>Loading...</h2>}
        {!loading && data && (
          <>
            <ContentProdutos>
              <div>
                <h1>{data.nome}</h1>
                <p>
                  R${" "}
                  {data.preco * contador === 0
                    ? data.preco
                    : data.preco * contador}
                </p>
                <p>Produtos no carrinho {contador}</p>
                <p>Maximo de produtos por compra 10</p>
              </div>
              <ContentButtons>
                <Button
                  onClick={handleClick}
                  height="40px"
                  margin="40px auto"
                  width="25%"
                  disabled={contador > 9}
                  cursor={contador > 9 ? "" : "pointer"}
                  children="Adicionar produtos"
                />
                <Button
                  onClick={handleClickReduce}
                  height="40px"
                  margin="40px auto"
                  width="25%"
                  disabled={contador < 1}
                  cursor={contador > 0 ? "pointer" : ""}
                  children="Reduzir produtos"
                />
                <Button
                  onClick={handleClickClear}
                  height="40px"
                  margin="40px auto"
                  width="25%"
                  disabled={contador === 0}
                  cursor={contador === 0 ? "" : "pointer"}
                  children="Limpar carrinho"
                  background="#e35"
                />
              </ContentButtons>
              <div>
                {data.fotos.map((data, index) => (
                  <img key={index} src={data.src} alt={data.titulo} />
                ))}
              </div>
            </ContentProdutos>
          </>
        )}
      </ContentBuy>
      <RenderPreference>
        {!active && (
          <ButtonPreference
            background={colors.background.botoes.verde}
            onClick={() => setActive(!active)}
            bordeRadius="10px"
            width="20%"
            height="40px"
            children="Mostrar preferencias ↓"
            widthTablet="100%"
            position="absolute"
            right="30px"
            top="10px"
            leftTablet="0"
            topTablet="40px"
          />
        )}
        {active && (
          <>
            <ButtonPreference
              background={colors.background.botoes.vermelho}
              onClick={() => setActive(!active)}
              bordeRadius="50%"
              width="30px"
              height="30px"
              children="X"
              position="absolute"
              right="30px"
              top="10px"
              rightTablet="0px"
              topTablet="10px"
            />
            <Product />
          </>
        )}
      </RenderPreference>
    </ContainerUseEffect>
  );
};

export default UseEffect;
