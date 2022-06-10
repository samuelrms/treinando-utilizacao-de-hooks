import React, { useEffect, useRef, useState } from "react";
import Button from "../../components/Button";

  // const UseRef = () => {
  // const video = useRef();
  // useEffect(() => {
  //   video.current = "teste";
  //   // passando o current podemos ter o objeto mutavel para podermos mudar em qualquer momento
  //   console.log(video.current.currentTime);
  // }, []);
  // return <video ref={video} />;

  //----------------------------------------------

  const [comments, setComments] = useState([]);
  const [input, setInput] = useState("");
  const inputElement = useRef();

  const handleClick = () => {
    setComments([...comments, input]);
    setInput("");
    inputElement.current.focus();
  };

  const handleClickClearComment = () => {
    const contentCard = {
      value: input,
      key: Math.random() * 10,
    };
    setComments((contentCards) => [...contentCards, contentCard]);
  };

  // ---------------------------------------------------------

  const [cart, setCart] = useState(0);
  const [notification, setNotification] = useState(null);
  const timeoutRef = useRef();

  const handleClickAddItems = () => {
    setCart(cart + 1);
    setNotification("Item adicionado ao carrinho");

    clearTimeout(timeoutRef.current); // toda vez que a função for limpada ele vai primeiro limpar o timeout para depois agendar um novo do tempo que for passado
    timeoutRef.current = setTimeout(() => {
      // sempre chamar o current para essas situações
      setNotification(null);
    }, 1500);
  };

  return (
    <div>
      <div>
        <input
          ref={inputElement}
          type="text"
          value={input}
          onChange={({ target }) => setInput(target.value)} // defina o input como o value dele
        />
        <Button
          onClick={handleClick}
          children="Submit"
          width="60px"
          height="40px"
          margin="30px 0 30px 30px"
          disabled={input === ""} // se o input for vazio o botão é desabilitado
          cursor={input === "" ? "" : "pointer"} // se o input for vazio o cursor do botão não fica mais como pointer
        />
        <ul>
          {comments.map((comment, index) => (
            <>
              <li key={index}>{comment}</li>
            </>
          ))}
        </ul>
      </div>
      <hr />
      <div>
        <p>{notification}</p>
        <Button
          onClick={handleClickAddItems}
          children="Adicionar Item"
          width="50%"
          height="40px"
          margin="0 0 30px 0"
        />
        <p> Total de itens {cart}</p>
      </div>
    </div>
  );
};

export default UseRef;
