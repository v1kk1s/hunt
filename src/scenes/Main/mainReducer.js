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
    return Object.assign({}, state, {
      currentBlock: action.blockCount,
    })
    case SET_CURRENT_BLOCK_QUESTION:
    return Object.assign({}, state, {
      currentBlockQuestion: action.blockQuestCount,
    })
    default:
      return state;
  }
}

export default mainReducer;
