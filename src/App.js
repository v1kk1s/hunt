import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { View, StyleSheet } from 'react-native';

import Main from './scenes/Main';
import configureStore from './store';

const initialState = {
  currentBlock: 0,
  currentBlockQuestion: 0,
};
export const store = configureStore(initialState);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Main />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
