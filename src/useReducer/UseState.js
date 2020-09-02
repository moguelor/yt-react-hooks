import React, { useState } from "react";
import { Item, Footer, Card, Input, Title } from "./components";
import { objectToString } from "../utils";

const HookComponent = () => {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");

  const state = { text, items, activeFilter };

  const handleChangeInput = (e) => setText(e.target.value);

  const add = () => {
    setItems([
      { id: new Date().valueOf(), text: text, active: true },
      ...items,
    ]);
  };

  const resetInput = () => {
    setText("");
  };

  const toggleItem = (id) => {
    setItems(
      items.map((item) =>
        item.id !== id ? item : { ...item, active: !item.active }
      )
    );
  };

  const assignActiveFilter = (filter) => setActiveFilter(filter);

  const clearCompleted = () => {
    setItems(items.filter((item) => item.active));
  };

  const resetState = () => {
    setItems([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    add();
    resetInput();
  };

  const filteredData = () => {
    const filterByStatus = items.filter((item) =>
      activeFilter === "all"
        ? true
        : activeFilter === "active"
        ? item.active
        : !item.active
    );

    return text
      ? filterByStatus.filter((item) => item.text.indexOf(text) > -1)
      : filterByStatus;
  };

  return (
    <>
      <Title>todos</Title>
      <Card width={450}>
        <form onSubmit={handleSubmit}>
          <Input
            placeholder="What are you thinking to do?"
            onChange={handleChangeInput}
            value={text}
          />
        </form>
        {filteredData().map((item, i) => (
          <Item
            key={i}
            text={item.text}
            isActive={item.active}
            handleClickItem={() => toggleItem(item.id)}
          />
        ))}
        <Footer
          totalItems={items.filter((item) => item.active).length}
          handleClickFilter={assignActiveFilter}
          active={activeFilter}
          handleClickClear={() => clearCompleted()}
          handleClickReset={() => resetState()}
        />
      </Card>
      <pre>{objectToString(state)}</pre>
    </>
  );
};

export default HookComponent;