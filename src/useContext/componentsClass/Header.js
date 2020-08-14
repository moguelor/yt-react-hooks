import React from "react";
import styled from "styled-components";
import MainBar from "./MainBar";

const Styled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #20232a;
  width: 100%;
  height: 50px;
  position: fixed;
  color: #fff;
  top: 0;
`;

const Header = () => {
  return (
    <Styled>
      <MainBar />
    </Styled>
  );
};

export default Header;
