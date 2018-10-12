import { SAVE_CURRENCY } from './currencyList.actions';

const INITIAL_STATE = [];

const currencies = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVE_CURRENCY:
      return [
        ...state,
        action.payload,
      ];
    default:
      return state;
  }
};

export default currencies;
