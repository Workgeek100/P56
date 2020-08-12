import * as React from 'react';
import { View } from 'react-native';
import Button1 from './components/Button1';
import Button2 from './components/Button2';
import Button3 from './components/Button3';
import Button4 from './components/Button4';
import Button5 from './components/Button5';
import Header from './components/Header';

export default class App extends React.Component {
  render() {
    return (
      <View style={{backgroundColor:"lightgreen", flex:2}}>
        <Button1 />
        <Button2 />
        <Button3 />
        <Button4 />
        <Button5 />
        <Header />
      </View>
    );
  }
}

