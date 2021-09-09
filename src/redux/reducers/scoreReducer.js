const INITIAL_STATE = {
  score: 0,
};

function ScoreReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'SAVE_SCORE':
    console.log('entrou');
    return ({
      score: action.score,
    });
  default:
    return state;
  }
}

export default ScoreReducer;
