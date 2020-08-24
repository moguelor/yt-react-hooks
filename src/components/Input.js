import React from "react";
import styled from "styled-components";

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
`;

const StyledInput = styled.input`
  width: 100%;
  font-size: 1.2rem;
  line-height: 2;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;

  ::placeholder {
    font-size: 15px;
    font-family: Roboto;
    padding: 10px;
    font-weight: 300;
  }
`;

const Error = styled.small`
  color: #dc3545;
  font-weight: 500;
`;

const Input = ({
  type = "text",
  value = "",
  handleChange,
  label,
  error,
  placeholder,
}) => {
  return (
    <FormGroup>
      <Label>{label}</Label>
      <StyledInput
        value={value}
        type={type}
        onChange={handleChange}
        placeholder={placeholder}
      />
      <Error>{error && error}</Error>
    </FormGroup>
  );
};

export default Input;
