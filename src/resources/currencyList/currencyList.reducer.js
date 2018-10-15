import { SAVE_CARD, EDIT_CARD } from './currencyList.actions';

const INITIAL_STATE = {
  cards: [],
  cardIdUnderEdition: null,
};

const cards = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVE_CARD:
      return {
        ...state,
        cards: [...state.cards, action.payload],
      };
    case EDIT_CARD:
      return {
        ...state,
        cardIdUnderEdition: action.payload,
      };
    default:
      return state;
  }
};

export default cards;
