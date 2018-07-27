import React, {Component} from 'react';
import { Actions } from 'react-native-router-flux';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Hello, Kityk!</Text>
        <Button style={styles.btn}
          title="Start an adventure!"
          onPress={() => { Actions.rules() }}
        />
      </View>
    );
  }
}

export default Main;

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
