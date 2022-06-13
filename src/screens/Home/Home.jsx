import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { textHome } from "../../components/mooks/text";
import SubTitle from "../../components/SubTitle";
import Text from "../../components/Text";
import Title from "../../components/Title";
import { ContainerHome, ContentUseState } from "./styled";

const Home = () => {
  return (
    <ContainerHome>
      <Title>{textHome.title.title}</Title>
      <Text>{textHome.title.description}</Text>
      <SubTitle margin="10px 0">{textHome.title.subTitle}</SubTitle>
      <hr />
      <ContentUseState>
        <SubTitle color="#f6f6ff" margin="0 0 30px">
          {textHome.content.useState.title}
        </SubTitle>
        <Text>{textHome.content.useState.description}</Text>
        <Button
          height="40px"
          width="80px"
          margin="30px 20px 0"
          background="#FFF"
          children={
            <Link to="/treinando-utilizacao-de-hooks/usestate">useState</Link>
          }
        />
      </ContentUseState>
    </ContainerHome>
  );
};

export default Home;
