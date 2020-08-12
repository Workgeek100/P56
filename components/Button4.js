import * as React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {Audio} from 'expo-av';

export default class Button4 extends React.Component{
  playSound=async()=>{
    await Audio.Sound.createAsync(
      {uri:"https://thinkeraty.github.io/thinkerbeats/glimmer.mp3"},
      {shouldPlay:true}
    )
  }
  render(){
    return(
      <TouchableOpacity 
      style={styles.button} 
      onPress={this.playSound}>
      <Text 
      style={styles.buttonText}>
      Press Me
      </Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    marginTop:20,
    marginLeft:50,
    borderWidth: 5,
    borderColor: "rgb(123,34,54)",
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 50,
    backgroundColor: 'lightblue',
    borderRadius: 100,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 40,
  }
});