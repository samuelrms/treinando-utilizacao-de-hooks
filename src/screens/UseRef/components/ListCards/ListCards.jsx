import React, { useEffect, useRef, useState } from "react";
import Button from "../../../../components/Button";
import {
  Comment,
  ContainerCards,
  ContentComment,
  ContentInput,
  ContentList,
  InputCard,
} from "./styled";

const ListCards = () => {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState("");
  const inputElement = useRef();

  const handleClickAddComments = () => {
    const mountComments = {
      value: input,
      index: Math.random(),
    }; // montando o comentario cada um com seu respectivo index
    setComments([...comments, mountComments]);
    setInput("");
    inputElement.current.focus();
  };

  useEffect(() => {
    comments !== null &&
      window.localStorage.setItem(
        "Card",
        comments.map((comment) => comment.value),
      );
    console.log(comments.map((comment) => comment.value));
  }, [comments]);

  const handleClickClearComment = (index) => {
    const contentCardClear = comments.filter(
      (getIndex) => getIndex.index !== index,
    );
    setComments(contentCardClear);
  };

  const onKeyDownCommets = (event) => {
    event.key === "Enter" &&
      input !== "" &&
      input !== " " &&
      handleClickAddComments();
  };

  return (
    <ContainerCards>
      <ContentInput>
        <InputCard
          ref={inputElement}
          type="text"
          value={input}
          onKeyDown={(event) => onKeyDownCommets(event)}
          onChange={({ target }) => setInput(target.value)} // defina o input como o value dele
        />
        <Button
          onClick={handleClickAddComments}
          children="Submit"
          width="10%"
          height="40px"
          disabled={input === ""} // se o input for vazio o botão é desabilitado
          cursor={input === "" ? "" : "pointer"} // se o input for vazio o cursor do botão não fica mais como pointer
          bordeRadius="0 10px 10px 0"
        />
      </ContentInput>
      <ContentList>
        {comments.map((comment, index) => (
          <ContentComment>
            <Comment key={index}>{comment.value}</Comment>
            <Button
              key={index - 1}
              onClick={() => handleClickClearComment(comment.index)}
              children="🗑️"
              height="40px"
              width="40px"
            />
          </ContentComment>
        ))}
      </ContentList>
    </ContainerCards>
  );
};

export default ListCards;
