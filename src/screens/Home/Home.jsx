import React from "react";
import { Link } from "react-router-dom";
import SubTitle from "../../components/SubTitle";
import Button from "../../components/Button";
import Title from "../../components/Title";
import Text from "../../components/Text";
import { textHome } from "../../components/mocks/text";
import { ContainerHome, ContentUseState } from "./styled";

const Home = () => {
  return (
    <ContainerHome>
      <Title color="#fff">{textHome.title.title}</Title>
      <Text color="#fff">{textHome.title.description}</Text>
      <SubTitle color="#fff" margin="10px 0">
        {textHome.title.subTitle}
      </SubTitle>
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
          hoverBackground="linear-gradient(135deg, #d9042b, #f2b705, #f28705, #f22f1d)"
          children={
            <Link to="/treinando-utilizacao-de-hooks/usestate">useState</Link>
          }
        />
      </ContentUseState>
    </ContainerHome>
  );
};

export default Home;
