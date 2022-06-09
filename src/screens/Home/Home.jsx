import React from "react";
import { textHome } from "../../components/mooks/text";
import { ContainerHome } from "./styled";

const Home = () => {
  return (
    <ContainerHome>
      <h1>{textHome.title.title}</h1>
      <p>{textHome.title.description}</p>
      <h2>{textHome.title.subTitle}</h2>
      <hr />
      <div>
        <h2>{textHome.content.useState.title}</h2>
        <p>{textHome.content.useState.description}</p>
      </div>
    </ContainerHome>
  );
};

export default Home;
