import React, { useReducer, useMemo } from "react";
import { Item, Footer, Card, Input, Title } from "./components";
import reducer, { INITIAL_STATE, init } from "./reducer";
import { objectToString } from "../utils";
import {
  handleChangeInput,
  addItem,
  resetInput,
  toggleItem,
  setActiveFilter,
  clearCompleted,
  resetState,
} from "./actions";

const HookComponent = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE, init);
  const { text, items, activeFilter } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addItem());
    dispatch(resetInput());
  };

  const filteredData = () => {
    const filterByStatus = items.filter((item) =>
      state.activeFilter === "all"
        ? true
        : state.activeFilter === "active"
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
            onChange={(e) => dispatch(handleChangeInput(e.target.value))}
            value={text}
          />
        </form>
        {filteredData().map((item, i) => (
          <Item
            key={i}
            text={item.text}
            isActive={item.active}
            handleClickItem={() => dispatch(toggleItem(item.id))}
          />
        ))}
        <Footer
          totalItems={items.filter((item) => item.active).length}
          handleClickFilter={(filter) => dispatch(setActiveFilter(filter))}
          active={activeFilter}
          handleClickClear={() => dispatch(clearCompleted())}
          handleClickReset={() => dispatch(resetState())}
        />
      </Card>
      <pre>{objectToString(state)}</pre>
    </>
  );
};

export default HookComponent;
