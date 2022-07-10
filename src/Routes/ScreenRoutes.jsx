import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Error from "../screens/Error";
import Home from "../screens/Home";
import RequestAPIUseState from "../screens/RequestAPIUseState";
import UseCallback from "../screens/UseCallback";
import UseContext from "../screens/UseContext";
import UseEffect from "../screens/UseEffect";
import UseMemo from "../screens/UseMemo";
import UseRef from "../screens/UseRef";
import UseState from "../screens/UseState";
import { GlobalStyle } from "../styles/GlobalStyle";

const ScreenRoutes = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/useState" element={<UseState />} />
        <Route path="/requestAPIuseState" element={<RequestAPIUseState />} />
        <Route path="/useEffect" element={<UseEffect />} />
        <Route path="/useMemo" element={<UseMemo />} />
        <Route path="/useContext" element={<UseContext />} />
        <Route path="/useCallback" element={<UseCallback />} />
        <Route path="/useRef" element={<UseRef />} />
        <Route path="/404-not-found" element={<Error />} />
        <Route path="*" element={<Navigate to={"/404-not-found"} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default ScreenRoutes;
