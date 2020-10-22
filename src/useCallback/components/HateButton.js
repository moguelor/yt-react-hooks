import React from "react";
import Button from "./Button";
import styled from "styled-components";

const StyledButton = styled(Button)`
  span {
    color: #F79D00;
  }
`;

const HateButton = ({ handleClick, times }) => {
  return (
    <StyledButton onClick={handleClick}>
      I <span className="fa fa-angry" /> this Page: {times}
    </StyledButton>
  );
};

export default HateButton;
