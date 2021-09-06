const saveScore = (currScore) => ({
  type: 'SAVE_SCORE',
  score: currScore,
});

function saveScoreOnStore(currScore) {
  return (dispatch) => {
    dispatch(saveScore(currScore));
  };
}

export default saveScoreOnStore;
