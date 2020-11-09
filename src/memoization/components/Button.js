import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: none;
  border: 1px solid #fff;
  padding: 5px 15px;
  font-weight: 600;
  font-size: 15px;
  border-radius: 5px;
  box-shadow: 3px 3px 3px rgb(0, 0, 0, 0.1);
  outline: none;

  span {
    color: ${({ icon }) => (icon === "heart" ? "#FF0000" : "#F79D00")};
  }
`;

const Button = ({ icon, handleClick, times }) => {
  return (
    <StyledButton icon={icon} onClick={handleClick}>
      I <span className={`fa fa-${icon}`} /> this Page: {times}
    </StyledButton>
  );
};

export default Button;
