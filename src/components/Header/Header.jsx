import React from "react";
import { Link } from "react-router-dom";
import { HeaderContainer } from "./styled";

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/treinando-utilizacao-de-hooks">Home</Link>
      <Link to="/treinando-utilizacao-de-hooks/usestate">useState</Link>
      <Link to="/treinando-utilizacao-de-hooks/requestapiusestate">
        Request API useState
      </Link>
    </HeaderContainer>
  );
};

export default Header;
