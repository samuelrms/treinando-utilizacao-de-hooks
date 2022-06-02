import React from "react";
import { Link } from "react-router-dom";
import { HeaderContainer } from "./styled";

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">Home</Link>
      <Link to="/usestate">useState</Link>
      <Link to="/requestapiusestate">Request API useState</Link>
    </HeaderContainer>
  );
};

export default Header;
