import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import saveScoreOnStore from '../redux/actions/saveCurPlayerScore';

class Answers extends React.Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      disable: '',
      correctColor: { border: '1px solid black', cursor: 'pointer' },
      wrongColor: { border: '1px solid black', cursor: 'pointer' },
    };

    this.addScoreOnClick = this.addScoreOnClick.bind(this);
    this.addScoreInThisComponent = this.addScoreInThisComponent.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  addScoreInThisComponent() {
    this.setState((prevState) => ({
      score: prevState.score + 1,
    }));
  }

  async addScoreOnClick() {
    await this.addScoreInThisComponent();
    const { addScoreOnStore } = this.props;
    const { score } = this.state;
    addScoreOnStore(score);
  }

  handleClick({ target }, correctAnswer) {
    if (target.value === correctAnswer) {
      this.addScoreOnClick();
    }
    this.setState({
      disable: 'disable',
      correctColor: { border: '3px solid rgb(6, 240, 15)' },
      wrongColor: { border: '3px solid rgb(255, 0, 0)' },
    });
  }

  render() {
    const { answers, correctAnswer } = this.props;
    const { correctColor, wrongColor, disable } = this.state;
    return (
      answers.map((answer, index) => (
        <button
          type="button"
          disabled={ disable }
          key={ answer }
          value={ answer }
          data-testid={ correctAnswer === answers[index]
            ? 'correct-answer' : `wrong-answer-${index}` }
          onClick={ (e) => this.handleClick(e, correctAnswer) }
          className={ correctAnswer === answers[index] ? correctColor : wrongColor }
        >
          {answer}
        </button>))
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addScoreOnStore: (payload) => dispatch(saveScoreOnStore(payload)),
});

export default connect(null, mapDispatchToProps)(Answers);

Answers.propTypes = {
  answers: PropTypes.array,
  correctAnswer: PropTypes.array,
}.isRequired;
