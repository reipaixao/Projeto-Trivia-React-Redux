import React from 'react';
import PropTypes from 'prop-types';
import renderAnswer from './componentsFunctions/FeedbackAnswerfuncs';

class FeedbackAnswers extends React.Component {
  render() {
    const { score } = this.props;

    return (
      <div>
        <h3 data-testid="feedback-text">{renderAnswer(score)}</h3>
      </div>);
  }
}

FeedbackAnswers.propTypes = {
  score: PropTypes.number.isRequired,
};

export default FeedbackAnswers;
