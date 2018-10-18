import React from 'react';
import {
  Scene,
  Router,
  Stack,
  Actions,
} from 'react-native-router-flux';
import Main from './components/Main';
import Editor from './components/Editor';

const RouterComponent = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene
          key="home"
          component={Main}
          title="Currencies"
          rightTitle="Add"
          onRight={() => Actions.editor()}
          renderBackButton={() => null}
          initial
        />
        <Scene
          backTitle="Back"
          key="editor"
          component={Editor}
          title="Editor"
        />
      </Stack>
    </Router>
  );
};

export default RouterComponent;
