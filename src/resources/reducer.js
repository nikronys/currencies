import { combineReducers } from 'redux';
import currencies from './currencyList/currencyList.reducer';

const reducers = {
  currencies,
};

export default combineReducers(reducers);
