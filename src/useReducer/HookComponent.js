import React from "react";
import styled from "styled-components";
import { Item, Footer } from "./components";

const Card = styled.div`
  background-color: #fff;
  width: 400px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border: 1px solid #ececec;
  padding: 0px;
  border-radius: 5px;
`;

const Input = styled.input`
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

const Title = styled.div`
  font-size: 80px;
  font-weight: 300;
  color: #af2f2f26;
  margin-bottom: 10px;
  width: 100%;
  text-align: center;
`;

const HookComponent = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Title>todos</Title>
      <Card width={450}>
        <form onSubmit={handleSubmit}>
          <Input placeholder="¿What are you thinking to do?" />
        </form>
        <Item> Hola </Item>
        <Item> Hola </Item>
        <Item> Hola </Item>
        <Item> Hola </Item>
        <Footer />
      </Card>
    </>
  );
};

export default HookComponent;
