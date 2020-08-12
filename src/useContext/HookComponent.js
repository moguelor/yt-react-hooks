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

/**
    <Header language={language} setLanguage={setLanguaje} > <-- language:NO setLanguage:NO
          <Message language={language} setLanguage={setLanguaje}>  <-- language:SI setLanguage:NO
              <ContainerLanguaje language={language} setLanguage={setLanguaje}> <-- language:NO setLanguage:NO
                 <LanguageItem language={} setLanguage={} />  <-- language:SI setLanguage:SI
              </ContainerLanguaje>
          </Message>
    </Header>
    <Content language={language}> <-- language:SI
        <CustomCard> 
    </Content>
 */

/**
    <Header> 
        <Message>  <-- Llamariamos al useContext.
            <ContainerLanguaje>
                <LanguageItem />  <-- Llamariamos al useContext
            </ContainerLanguaje>
        </Message>
    </Header>
    <Content> <-- Llamariamos al useContext
        <CustomCard> 
    </Content>
 */

export default HookComponent;
