import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import PetData from './App/Components/PetData/PetData';
import PetDataOptions from './App/Components/PetDataOptions/PetDataOptions';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <PrimaryNav />
      </View>
    );
  }
}

const PrimaryNav = createSwitchNavigator (
  {
    PetData: PetData,
    Options: PetDataOptions,
  },
  {
    PetData: 'PetData',
    backBehavior: 'initialRoute'
  }
);

export default createAppContainer(PrimaryNav);

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: '#f1f1f1',
    }
})