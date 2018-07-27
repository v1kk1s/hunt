import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

class Rules extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Rules page</Text>
      </View>
    );
  }
}

export default Rules;

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  container: {
    flex: 1,
  },
});
