import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView} from 'react-native';


import Main from './app/components/Main';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View>
        <Main />
      </View>
    );
  }
}
