import { createStore } from 'redux';
import createReducer from './reducers';

export default function configureStore(initialState = {}) {

  const store = createStore(
    createReducer(),
    initialState,
  );

  return store;
}
