import {
  SET_CURRENT_BLOCK,
  SET_CURRENT_BLOCK_QUESTION,
} from './mainActions';

const initialState = {
  currentBlock: 0,
  currentBlockQuestion: 0,
};

function mainReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_BLOCK:
      return state
        .set('currentBlock', action.currentBlock);
    case SET_CURRENT_BLOCK_QUESTION:
      return state
        .set('currentBlockQuestion', action.currentBlockQuestion);
    default:
      return state;
  }
}

export default mainReducer;
