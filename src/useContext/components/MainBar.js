import React from "react";
import styled from "styled-components";
import Languages from "./Languages";
import Message from "./Message";

const Styled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  font-size: 25px;
`;

const MainBar = ({ language, setLanguage }) => {
  return (
    <Styled>
      <Message language={language} />
      <Languages language={language} setLanguage={setLanguage} />
    </Styled>
  );
};

export default MainBar;
