import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { categoriesThunk } from '../redux/actions/fetchActions';
// import { fetchQuestions } from '../pages/pageFunctions/gameFuncs';

class Question extends React.Component {
  componentDidMount() {
    const { getQuestions } = this.props;
    getQuestions();
  }

  render() {
    const { questions } = this.props;
    console.log(questions);

    return (
      <h2>Questions</h2>
    );
  }
}

const mapStateToProps = (state) => ({
  questions: state.questions,
});

const mapDispatchToProps = (dispatch) => ({
  getQuestions: (results) => dispatch(categoriesThunk(results)),
});

const { object } = PropTypes;

Question.propTypes = {
  questions: object,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Question);
