import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default class Scanner extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Align the UPC code within the frame to scan</Text>
        <View style={styles.frame} />
        <View />
        <View style={styles.frame} />
      </View>
    );
  }
}

const window = Dimensions.get('window');
var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  frame: {
    width: window.width, 
    height: window.height/4, 
    backgroundColor: 'rgba(52, 52, 52, 0.8)'
  },
  header: {
    position: 'absolute',
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
    marginTop: 50,
  }
});