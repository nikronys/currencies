import { ADD_CARD, EDIT_CARD } from './currencyList.actions';

const INITIAL_STATE: Array<{ currentCard: { _id: string} }> = [];

const cards = (state = INITIAL_STATE, action: { type : string, payload: any }) => {
  switch (action.type) {
    case ADD_CARD:
      return [
        ...state,
        action.payload,
      ];
    case EDIT_CARD:
      return state.map((element) => {
        if (element.currentCard._id === action.payload.currentCard._id) {
          return action.payload;
        }
        return element;
      });
    default:
      return state;
  }
};

export default cards;
