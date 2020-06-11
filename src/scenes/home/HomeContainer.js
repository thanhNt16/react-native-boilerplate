import React from 'react';
import {View, Text} from 'react-native';
import HomeComponent from 'scenes/home/HomeComponent';
import withReducer from 'duck/withReducer';

function HomeContainer() {
  return (
    <View>
      <HomeComponent />
    </View>
  );
}

export default withReducer('home', HomeContainer);
