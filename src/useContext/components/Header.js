import React from "react";
import styled from "styled-components";
import Message from "./Message";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #20232a;
  width: 100%;
  height: 50px;
  position: fixed;
  color: #fff;
  top: 0;
  left: 0;
`;

const Header = ({ language, setLanguage }) => {
  return (
    <StyledWrapper>
      <Message language={language} setLanguage={setLanguage} />
    </StyledWrapper>
  );
};

export default Header;
