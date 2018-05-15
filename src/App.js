import React, { Component } from 'react';
import {  View, Text,KeyboardAvoidingView } from 'react-native';
import RootStack from './navigator/Stack';
export default class App extends Component {
  render() {
    return <RootStack />;
  }
}
