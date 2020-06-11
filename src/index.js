import React from 'react';
import {View, Text} from 'react-native';
import {HelloWorld} from 'components/atoms';
import Home from 'scenes/home/HomeContainer';
import {Provider} from 'react-redux';
import store from 'duck';

const App = () => {
  return (
    <Provider store={store}>
      <HelloWorld />
    </Provider>
  );
};

export default App;
