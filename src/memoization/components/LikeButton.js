import React from "react";
import styled from "styled-components";
import Button from "./Button";

const StyledButton = styled(Button)`
  span {
    color: red;
  }
`;

const LikeButton = ({ times, handleClick }) => {
  return (
    <StyledButton onClick={handleClick}>
      I <span className="fa fa-heart" /> this Page: {times}
    </StyledButton>
  );
};

export default LikeButton;
