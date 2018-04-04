/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import LoginScreen from './src/screens/LoginScreen.js';
import HomeScreen from './src/screens/HomeScreen.js';

type Props = {};
export class App extends Component<Props> {
  render() {
    
    return (
      <View>
        <LoginScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
export default StackNavigator({
  Login: {
    screen: LoginScreen,
  },
   Home: {
      screen: HomeScreen,
  }
});