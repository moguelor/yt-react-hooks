import {
  ADD,
  HANDLE_CHANGE_INPUT,
  RESET_INPUT,
  TOGGLE_ITEM,
  SET_ACTIVE_FILTER,
  CLEAR_COMPLETED,
  RESET_STATE
} from "./constants";

export const handleChangeInput = (value) => ({
  type: HANDLE_CHANGE_INPUT,
  payload: value,
});

export const addItem = () => ({
  type: ADD,
});

export const resetInput = () => ({ type: RESET_INPUT });

export const toggleItem = (id) => ({
  type: TOGGLE_ITEM,
  payload: id,
});

export const setActiveFilter = (filter) => ({
  type: SET_ACTIVE_FILTER,
  payload: filter,
});

export const clearCompleted = () => ({
  type: CLEAR_COMPLETED,
});

export const resetState = () => ({
  type: RESET_STATE
});
