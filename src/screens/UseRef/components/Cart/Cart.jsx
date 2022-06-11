import React, { useRef, useState } from "react";
import Button from "../../../../components/Button";
import Description from "../../../../components/Description";
import { ContainerCart } from "./styled";

const Cart = () => {
  const [cart, setCart] = useState(0);
  const [notification, setNotification] = useState(null);
  const timeoutRef = useRef();

  const handleClickAddItemsCart = () => {
    setCart(cart + 1);
    setNotification("Item adicionado ao carrinho 🛒🛒");
    clearTimeout(timeoutRef.current);
    // toda vez que a função for limpada ele vai primeiro limpar o timeout para depois agendar um novo do tempo que for passado
    timeoutRef.current = setTimeout(() => {
      // sempre chamar o current para essas situações
      setNotification(null);
    }, 1500);
  };
  return (
    <ContainerCart>
      <Button
        onClick={handleClickAddItemsCart}
        children="Adicionar Item"
        width="200px"
        height="40px"
        margin="30px auto 30px auto"
      />
      <Description color="#fdfdfd"> Total de itens {cart}</Description>
      <Description>{notification}</Description>
    </ContainerCart>
  );
};

export default Cart;
