import React from 'react';
import { Provider } from 'react-redux';
import Router from './Router';
import configureStore from './resources/store';

const store = configureStore({});

const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
