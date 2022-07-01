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
        <Route path="/treinando-utilizacao-de-hooks" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/treinando-utilizacao-de-hooks/usestate"
          element={<UseState />}
        />
        <Route
          path="/treinando-utilizacao-de-hooks/requestapiusestate"
          element={<RequestAPIUseState />}
        />
        <Route
          path="/treinando-utilizacao-de-hooks/useeffect"
          element={<UseEffect />}
        />
        <Route
          path="/treinando-utilizacao-de-hooks/usememo"
          element={<UseMemo />}
        />
        <Route
          path="/treinando-utilizacao-de-hooks/usecontext"
          element={<UseContext />}
        />
        <Route
          path="/treinando-utilizacao-de-hooks/usecallback"
          element={<UseCallback />}
        />
        <Route
          path="/treinando-utilizacao-de-hooks/useref"
          element={<UseRef />}
        />
        <Route
          path="/treinando-utilizacao-de-hooks/error"
          element={<Error />}
        />
        <Route
          path="*"
          element={<Navigate to={"/treinando-utilizacao-de-hooks/error"} />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default ScreenRoutes;
