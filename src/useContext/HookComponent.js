import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import { Header, Content } from "./components";
import LanguageProvider, { DefaultValue } from "./providers/LanguageProvider";

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

  const value = {
    language,
    setLanguage,
  };

  return (
    <>
      <GlobalStyle />
      <LanguageProvider value={value}>
        <Header />
        <Content />
      </LanguageProvider>
    </>
  );
};

export default HookComponent;
