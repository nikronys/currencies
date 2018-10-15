import { combineReducers } from 'redux';
import cards from './currencyList/currencyList.reducer';

const reducers = {
  cards,
};

export default combineReducers(reducers);
