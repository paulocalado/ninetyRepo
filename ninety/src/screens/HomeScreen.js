import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import LoginScreen from './LoginScreen.js'
type Props = {};
export default class HomeScreen extends Component<Props> {
  render() {
    const {loginStyle} = styles;
    return (
      <View>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Text style={loginStyle}>ESSA É A HOME SCREEN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    loginStyle: {
      margin: 30,
      fontSize: 25,
      alignSelf: 'center'
    }
});
