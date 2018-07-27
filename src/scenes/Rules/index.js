import React, {Component} from 'react';
import { Actions } from 'react-native-router-flux';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

class Rules extends Component {
  onAgree = () => Actions.question();

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Rules page</Text>

        <TouchableOpacity
          onPress={this.onAgree}
        >
          <Text>Ready? Start!</Text>
        </TouchableOpacity>
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
