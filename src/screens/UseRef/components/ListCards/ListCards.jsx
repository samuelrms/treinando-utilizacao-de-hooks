import React, { useEffect, useRef, useState } from "react";
import Button from "../../../../components/Button";
import { textUseRef } from "../../../../components/mooks/text";
import SubTitle from "../../../../components/SubTitle";
import Text from "../../../../components/Text";
import Title from "../../../../components/Title";
import {
  CardInfoAndDelete,
  CardNumber,
  Comment,
  ContainerCards,
  ContentComment,
  ContentInfo,
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
    const commentsToString = JSON.stringify(comments);
    Boolean(comments.length) &&
      window.localStorage.setItem("Card", commentsToString);
  }, [comments]);

  useEffect(() => {
    const item = window.localStorage.getItem("Card");
    const localComments = JSON.parse(item);
    Boolean(localComments) && setComments(localComments);
  }, []);

  const handleClickClearComment = (index) => {
    const contentCardClear = comments.filter(
      (getIndex) => getIndex.index !== index,
    );
    window.localStorage.clear();
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
      <ContentInfo>
        <Title
          color="#fff"
          children={textUseRef.content.descriptionTodo.title}
        />
        <SubTitle
          color="#fff"
          children={textUseRef.content.descriptionTodo.subTitle}
        />
        <Text
          fontSize="20px"
          color="#fff"
          children={textUseRef.content.descriptionTodo.description}
        />
      </ContentInfo>
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
          height="60px"
          disabled={input === "" || input === " "} // se o input for vazio o botão é desabilitado
          cursor={input === "" || input === " " ? "" : "pointer"} // se o input for vazio o cursor do botão não fica mais como pointer
          bordeRadius="0 10px 10px 0"
          background="#270140"
        />
      </ContentInput>
      <ContentList>
        {comments.map((comment, index) => (
          <ContentComment key={index}>
            <CardNumber>
              <Text color="#fff" children={`Card nº ${index + 1}`} />
            </CardNumber>
            <CardInfoAndDelete>
              <Comment>{comment.value}</Comment>
              <Button
                onClick={() => handleClickClearComment(comment.index)}
                children="🗑️"
                height="40px"
                width="40px"
                background="#D9042B"
              />
            </CardInfoAndDelete>
          </ContentComment>
        ))}
      </ContentList>
    </ContainerCards>
  );
};

export default ListCards;
