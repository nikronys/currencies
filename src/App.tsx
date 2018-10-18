import React from 'react';
import { Provider } from 'react-redux';
import { ActivityIndicator } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import Router from './Router';
import { store, persistor } from './resources/store';

const renderSpinner = () => {
  return (
    <ActivityIndicator size="large" style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} />
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={renderSpinner()} persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  );
};

export default App;
