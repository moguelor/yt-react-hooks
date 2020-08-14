import React, { useContext } from "react";
import styled from "styled-components";
import { LanguageContext } from "../providers/LanguageProvider";

const Styled = styled.span`
  color: ${({ isActive = false }) => (isActive ? "#61dafb" : "#FFF")};
  margin-left: 5px;
  cursor: pointer;
`;

const LanguageItem = ({ text }) => {

  const context = useContext(LanguageContext);
  const isActive = text === context.language;

  return (
    <Styled onClick={() => context.setLanguage(text)} isActive={isActive}>
      {text}
    </Styled>
  );
};

export default LanguageItem;
