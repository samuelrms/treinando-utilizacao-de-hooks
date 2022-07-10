import React from "react";
import { Link } from "react-router-dom";
import { HeaderContainer } from "./styled";

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/home">Home</Link>
      <Link to="/useState">useState</Link>
      <Link to="/requestAPIuseState">Request API useState</Link>
      <Link to="/useEffect">useEffect</Link>
      <Link to="/useRef">useRef</Link>
      <Link to="/useMemo">useMemo</Link>
      <Link to="/useContext">useContext</Link>
      <Link to="/useCallback">useCallback</Link>
    </HeaderContainer>
  );
};

export default Header;
