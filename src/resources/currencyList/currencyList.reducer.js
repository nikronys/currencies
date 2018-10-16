import { ADD_CARD, EDIT_CARD } from './currencyList.actions';

const INITIAL_STATE = [];

const cards = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CARD:
      return [
        ...state,
        action.payload,
      ];
    case EDIT_CARD:
      return state.map((element) => {
        if (element._id === action.payload._id) {
          return action.payload;
        }
        return element;
      });
    default:
      return state;
  }
};

export default cards;
