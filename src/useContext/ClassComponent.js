import React from "react";
import { createGlobalStyle } from "styled-components";
import { Header, Content } from "./componentsClass";
import LanguageProvider from "./providers/LanguageProvider";

const GlobalStyle = createGlobalStyle`
    body { 
        display: block;
        padding: 0px;
        width: 100%;
        margin: 0;
    }
`;

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: "ES",
    };
  }

  setLanguage = (language) => this.setState({ language });

  render() {
    const { language } = this.state;
    const value = {
      language,
      setLanguage: this.setLanguage,
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
  }
}

export default ClassComponent;
