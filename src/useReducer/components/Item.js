import React from "react";
import styled from "styled-components";

const Styled = styled.div`
  padding: 16px;
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
  font-size: 20px;
  cursor: pointer;
  transition: all 0.1s linear;

  ${({ isActive = false }) =>
    !isActive && "text-decoration: line-through; color: #c8cacc;"}
`;

const Item = ({ text, isActive, handleClickItem }) => {
  return (
    <Styled onClick={handleClickItem} isActive={isActive}>
      {text}
    </Styled>
  );
};

export default Item;
