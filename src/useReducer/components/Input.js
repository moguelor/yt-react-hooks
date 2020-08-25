import styled from "styled-components";

export default styled.input`
  box-sizing: border-box;
  width: 100%;
  font-size: 20px;
  padding: 16px;
  border: none;
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
  outline: none;
  font-family: roboto;
  font-weight: 100;

  ::placeholder  {
    font-weight: 300;
    font-style: italic;
    color: #c8cacc;
  }
`;
