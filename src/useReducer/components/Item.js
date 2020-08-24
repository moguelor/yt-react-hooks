import React from "react";
import styled from "styled-components";

const Styled = styled.div`
  padding: 16px;
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
  font-size: 20px;
  cursor: pointer;
  transition: all 0.1s linear;

  ${({ done = false }) =>
    done && "text-decoration: line-through; color: #c8cacc;"}

  :hover {
    text-decoration: line-through;
    color: #c8cacc;
  }
`;

const Item = ({done}) => {
  return <Styled done={done} >Item</Styled>;
};

export default Item;
