

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        
        <View style={styles.header}>
            <Text style={styles.headerText}>NOTE TAKER</Text>
        </View>

        <ScrollView style={styles.scrollContainer}>

        </ScrollView>

        <View style={styles.footer}>
            <TextInput style={styles.textInput} placeholder=">Note" placeholderTextColor="white" underlineColorAndroid="transparent">

            </TextInput>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    backgroundColor: '#E91E63',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 10,
    borderBottomColor: '#ddd',
  },
  headerText: {
      color: 'white',
      fontSize: 18,
      padding: 26,
  }
  
});
