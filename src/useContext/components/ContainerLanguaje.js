import React from "react";
import styled from "styled-components";
import LanguageItem from "./LanguajeItem";

const StyledWrapper = styled.div`
  font-size: 12px;
  font-weight: 600;
`;

const ContainerLanguage = ({ language, setLanguage }) => {
  return (
    <StyledWrapper>
      <LanguageItem
        setLanguage={setLanguage}
        languaje={language}
        text="ES"
      />{" "}
      |
      <LanguageItem
        setLanguage={setLanguage}
        languaje={language}
        text="EN"
      />{" "}
      |
      <LanguageItem
        setLanguage={setLanguage}
        languaje={language}
        text="FR"
      />
    </StyledWrapper>
  );
};

export default ContainerLanguage;
