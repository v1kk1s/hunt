import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux';

class Main extends Component {
  render() {
    return (
      <View>
        <Text style={styles.welcome}>Hello, Kityk!</Text>
        <Text style={styles.instructions}>Swipe and start!</Text>
        <Text style={styles.instructions}>Current block {this.props.currentBlock}</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  currentBlock: state.currentBlock,
});

export default connect(
  mapStateToProps,
)(Main);

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
