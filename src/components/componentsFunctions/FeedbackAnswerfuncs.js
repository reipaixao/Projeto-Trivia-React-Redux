import React from 'react';

const answers = {
  lowScore: {
    score: 2,
    answer: 'Podia ser melhor...',
  },
  highScore: {
    score: 3,
    answer: 'Mandou bem!',
  },
};

const { lowScore, highScore } = answers;

function renderAnswer(score) {
  if (score <= lowScore.score) {
    return (<p>{lowScore.answer}</p>);
  }
  if (score >= highScore.score) {
    return highScore.answer;
  }
}

export default renderAnswer;
