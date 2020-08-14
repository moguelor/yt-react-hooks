import React from "react";
import styled from "styled-components";
import LanguageItem from "./LanguageItem";

const Styled = styled.div`
  font-size: 12px;
  font-weight: 600;
`;

const Languages = () => {
  return (
    <Styled>
      <LanguageItem text="ES" /> |
      <LanguageItem text="EN" /> |
      <LanguageItem text="FR" />
    </Styled>
  );
};

export default Languages;
