import { combineReducers } from 'redux';

import routerReducer from './scenes/Router/routerReducer';
import mainSceneReducer from './scenes/Main/mainReducer';

export default function createReducer(asyncReducers) {
  return combineReducers({
    routes: routerReducer,
    main: mainSceneReducer,
    ...asyncReducers,
  });
}