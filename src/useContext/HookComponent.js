import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import { Header, Content } from "./components";

const GlobalStyle = createGlobalStyle`
    body { 
        display: block;
        padding: 0px;
        width: 100%;
        margin: 0;
    }
`;

const HookComponent = () => {
  const [language, setLanguage] = useState("ES");

  return (
    <>
      <GlobalStyle />
      <Header language={language} setLanguage={setLanguage} />
      <Content language={language} />
    </>
  );
};

export default HookComponent;
