import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';

import { StackNavigator } from 'react-navigation';
type Props = {};
export default class LoginScreen extends Component<Props> {

	static navigationOptions = {
	   header: null
  };

  render() {
    const {loginStyle, container,
    	   inputStyle, buttonsStyle,
    	   registerStyle, loginTouchable} = styles;
    return (
      <View style={container}>
      	<Text style={{marginBottom: 300}}> TESTEEEE </Text>
 		 
 		  <TextInput
	        style={inputStyle}
	        value={''}
      	/>
       <TextInput
	        style={inputStyle}
	        onChangeText={(text) => this.setState({text})}
	        value={''}
      	/>

	     <View style={buttonsStyle}> 	
	        <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
	          <Text style={registerStyle}>Register</Text>
	        </TouchableOpacity>
	         <TouchableOpacity style={loginTouchable} onPress={() => this.props.navigation.navigate('Home')}>
	          <Text style={loginStyle}>Login</Text>
	        </TouchableOpacity>
	     </View>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#0B0D0C',
		flex: 1,
		//justifyContent: 'center'
	},
    loginStyle: {
      margin: 5,
      fontSize: 20,
      color: '#0B0D0C',
      //alignSelf: 'center',
      padding: 5
    },
    loginTouchable: {
    	margin: 5,
    	backgroundColor: '#EABA34',
    	borderColor: '#EABA34',
    	borderWidth: 1,
    	borderRadius: 20,
    },
    inputStyle:{
    	height: 40, 
    	borderColor: '#EABA34', 
    	borderWidth: 1, 
    	borderRadius: 10,
    	color:'#DFDFDF',
    	marginTop: 10,
    	marginRight: 50,
    	marginLeft: 50,

    },
    registerStyle: {
    	color: '#EABA34',
    	fontSize: 15,
    	marginTop: 15,
    },
    buttonsStyle: {
    	flexDirection: 'row',
    	marginLeft: 140,
    }
});
