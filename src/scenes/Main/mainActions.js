export const SET_CURRENT_BLOCK = 'SET_CURRENT_BLOCK';
export const SET_CURRENT_BLOCK_QUESTION = 'SET_CURRENT_BLOCK_QUESTION';

export const setCurrentBlock = (blockCount) => ({ blockCount, type: SET_CURRENT_BLOCK });

export const setCurrentBlockQuestion = (blockQuestCount) => ({ blockQuestCount, type: SET_CURRENT_BLOCK_QUESTION });