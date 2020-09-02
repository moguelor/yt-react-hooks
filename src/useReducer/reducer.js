import {
  HANDLE_CHANGE_INPUT,
  ADD_ITEM,
  RESET_INPUT,
  TOGGLE_ITEM,
  SET_ACTIVE_FILTER,
  CLEAR_COMPLETED,
  RESET_STATE,
} from "./constants";

const INITIAL_STATE = {
  text: "",
  activeFilter: "all",
  items: [
    {
      id: 1,
      text: "Learn hook useState",
      active: true,
    },
    {
      id: 2,
      text: "Learn hook useEffect",
      active: true,
    },
    {
      id: 3,
      text: "Learn hook useContext",
      active: true,
    },
    {
      id: 4,
      text: "Learn hook useReducer",
      active: true,
    },
  ],
};

const init = () => {
    return INITIAL_STATE;
};

const reducer = (state, action) => {
  switch (action.type) {
    case HANDLE_CHANGE_INPUT:
      return {
        ...state,
        text: action.payload,
      };

    case ADD_ITEM:
      return {
        ...state,
        items: [
          { id: new Date().valueOf(), text: state.text, active: true },
          ...state.items,
        ],
        text: action.payload,
      };

    case RESET_INPUT:
      return { ...state, text: "" };

    case TOGGLE_ITEM:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id !== action.payload ? item : { ...item, active: !item.active }
        ),
      };

    case SET_ACTIVE_FILTER:
      return {
        ...state,
        activeFilter: action.payload,
      };

    case CLEAR_COMPLETED:
      return {
        ...state,
        items: state.items.filter((item) => item.active),
      };

    case RESET_STATE:
        return init();

    default:
      return state;
  }
};

export { INITIAL_STATE, init };
export default reducer;
