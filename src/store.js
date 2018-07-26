import { createStore } from 'redux';
import mainReducer from './scenes/Main/mainReducer';

export default function configureStore(initialState = {}) {

  const store = createStore(
    mainReducer,
    initialState,
  );

  // Make reducers hot reloadable, see http://mxs.is/googmo
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      System.import('./reducers').then((reducerModule) => {
        const createReducers = reducerModule.default;
        const nextReducers = createReducers(store.asyncReducers);

        store.replaceReducer(nextReducers);
      });
    });
  }

  return store;
}
