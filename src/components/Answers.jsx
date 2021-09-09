import React from 'react';
import PropTypes from 'prop-types';
import NextButton from './NextButton';

class Answers extends React.Component {
  constructor() {
    super();

    this.state = {
      correctColor: { border: '1px solid black', cursor: 'pointer' },
      wrongColor: { border: '1px solid black', cursor: 'pointer' },
      respondido: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick({ target }, correctAnswer) {
    if (target.value === correctAnswer) {
      console.log('acertou');
    }
    this.setState({
      correctColor: { border: '3px solid rgb(6, 240, 15)' },
      wrongColor: { border: '3px solid rgb(255, 0, 0)' },
      respondido: true,
    });
  }

  render() {
    const { answers, correctAnswer } = this.props;
    const { correctColor, wrongColor, respondido } = this.state;
    return (
      <div>
        {answers.map((answer, index) => (
          <button
            type="button"
            key={ answer }
            value={ answer }
            data-testid={ correctAnswer === answers[index]
              ? 'correct-answer' : `wrong-answer-${index}` }
            onClick={ (e) => this.handleClick(e, correctAnswer) }
            style={ correctAnswer === answers[index] ? correctColor : wrongColor }
          >
            {answer}
          </button>))}
        { respondido ? <NextButton /> : null }
      </div>
    );
  }
}

Answers.propTypes = {
  answers: PropTypes.array,
  correctAnswer: PropTypes.array,
}.isRequired;

export default Answers;
