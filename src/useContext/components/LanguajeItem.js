import React from "react";
import styled from "styled-components";

const StyledItem = styled.span`
  color: ${({ isActive = false }) => (isActive ? "#61dafb" : "#FFF")};
  margin-left: 5px;
  cursor: pointer;
`;

const LanguajeItem = ({ text, setLanguage, languaje }) => {

  const isActive = text === languaje;

  return <StyledItem onClick={() => setLanguage(text)} isActive={isActive}>{text}</StyledItem>;
};

export default LanguajeItem;
