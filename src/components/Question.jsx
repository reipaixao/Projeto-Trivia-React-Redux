// import PropTypes from 'prop-types';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { fetchQuestions } from '../redux/actions/fetchActions';
// import {
//   addQuestionsOnStore,
// } from '../redux/actions/saveCurPlayerScore';

// import GenerateCards from './GenerateCards';

class Question extends React.Component {
  componentDidMount() {
    const { getQuestions, token } = this.props;

    getQuestions(token);
  }

  renderQuestions(question) {
    const answers = [question.correct_answer, ...question.incorrect_answers];
    answers.sort();
    return (
      <div>
        <p>{question.category}</p>
        <p>{question.question}</p>
        <p>{question.correct_answer}</p>
        <div>
          {/* <Aswers /> */}
          { answers
            .map((answer) => <button type="button" key={ answer }>{answer}</button>)}
        </div>
      </div>
    );
  }

  render() {
    const { questions } = this.props;
    if (questions.length === 0) return <p>Loading...</p>;
    const questionMap = questions.map((question) => this.renderQuestions(question));
    return (
      questionMap[0]
      // <div>oi</div>
    );
  }
}

Question.propTypes = {
  getQuestions: PropTypes.func,
  questions: PropTypes.shape({
    length: PropTypes.number,
    map: PropTypes.func,
  }),
  token: PropTypes.string,
}.isRequired;

Question.propTypes = {
  questions: PropTypes.shape({
    length: PropTypes.number,
    map: PropTypes.func,
  }),
}.isRequired;

const mapStateToProps = (state) => ({
  questions: state.fetchReducer.questions,
  token: state.fetchReducer.userToken,
});

const mapDispatchToProps = (dispatch) => ({
  getQuestions: (payload) => dispatch(fetchQuestions(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Question);
