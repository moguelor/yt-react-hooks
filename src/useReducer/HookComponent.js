import React from "react";
import { Item, Footer, Card, Input, Title } from "./components";
import { objectToString } from "../utils";

const HookComponent = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const state = {};

  return (
    <>
      <Title>todos</Title>
      <Card width={400}>
        <form onSubmit={handleSubmit}>
          <Input
            placeholder="What are you thinking to do?"
            onChange={() => {}}
          />
        </form>
        <Item text={"Element 1"} isActive handleClickItem={() => {}} />
        <Item text={"Element 2"} isActive={false} handleClickItem={() => {}} />
        <Item text={"Element 3"} isActive handleClickItem={() => {}} />
        <Footer
          totalItems={0}
          handleClickFilter={() => {}}
          active={"all"}
          handleClickClear={() => {}}
          handleClickReset={() => {}}
        />
      </Card>
      <pre>{objectToString(state)}</pre>
    </>
  );
};

export default HookComponent;
