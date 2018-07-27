import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { View, StyleSheet } from 'react-native';

import Router from './scenes/Router';
import configureStore from './store';

export const store = configureStore({});

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Router />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
