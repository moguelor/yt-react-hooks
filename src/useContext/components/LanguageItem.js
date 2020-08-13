import React from "react";
import styled from "styled-components";

const Styled = styled.span`
  color: ${({ isActive = false }) => (isActive ? "#61dafb" : "#FFF")};
  margin-left: 5px;
  cursor: pointer;
`;

const LanguageItem = ({ language, setLanguage, text }) => {
  
  const isActive = text === language;

  return (
    <Styled onClick={() => setLanguage(text)} isActive={isActive}>
      {text}
    </Styled>
  );
};

export default LanguageItem;
