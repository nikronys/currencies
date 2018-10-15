import { AsyncStorage } from 'react-native';
import { applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import Reactotron from '../../ReactotronConfig';
import rootReducer from './reducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = Reactotron.createStore(
  persistedReducer,
  applyMiddleware(thunk),
);

export const persistor = persistStore(store);
