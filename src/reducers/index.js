import { generate } from "shortid";

class Item {
  constructor(amount) {
    this.id = generate();
    this.amount = amount;
  }
}

const initialState = { items: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        items: [...state.items, new Item(action.amount)],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: [...state.items.filter((item) => item.id !== action.id)],
      };

    default:
      return state;
  }
};

export default reducer;
