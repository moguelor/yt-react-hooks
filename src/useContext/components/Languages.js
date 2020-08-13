import React from "react";
import styled from "styled-components";
import LanguageItem from "./LanguageItem";

const Styled = styled.div`
  font-size: 12px;
  font-weight: 600;
`;

const ContainerLanguage = ({ language, setLanguage }) => {
  return (
    <Styled>
      <LanguageItem language={language} setLanguage={setLanguage} text="ES" /> |
      <LanguageItem language={language} setLanguage={setLanguage} text="EN" /> |
      <LanguageItem language={language} setLanguage={setLanguage} text="FR" />
    </Styled>
  );
};

export default ContainerLanguage;
