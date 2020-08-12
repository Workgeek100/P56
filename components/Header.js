import * as React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {Audio} from 'expo-av';

export default class Button5 extends React.Component{
  render(){
    return(
      <TouchableOpacity 
      style={styles.button}>
      <Text 
      style={styles.buttonText}>
      DJ SOUND MIXER
      </Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    marginTop:-430,
    alignItems: 'center',
    justifyContent: 'center',
    width: 325,
    height: 50,
    backgroundColor: 'yellow',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 30,
  }
});