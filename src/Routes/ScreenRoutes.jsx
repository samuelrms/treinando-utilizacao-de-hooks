import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../screens/Home";
import RequestAPIUseState from "../screens/RequestAPIUseState";
import UseState from "../screens/UseState";
import { GlobalStyle } from "../styles/GlobalStyle";

const ScreenRoutes = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/treinando-utilizacao-de-hooks/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/usestate" element={<UseState />} />
        <Route path="/requestapiusestate" element={<RequestAPIUseState />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default ScreenRoutes;
