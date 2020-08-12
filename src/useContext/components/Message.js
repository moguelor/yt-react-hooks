import React from "react";
import styled from "styled-components";
import ContainerLanguaje from './ContainerLanguaje';
import i18n from '../i18n';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  font-size: 25px;
`;

const Message = ({language, setLanguage}) => {
  return (
    <StyledWrapper>
      {i18n[language]['welcome']}     
      <ContainerLanguaje language={language} setLanguage={setLanguage} />
    </StyledWrapper>
  );
};

export default Message;
