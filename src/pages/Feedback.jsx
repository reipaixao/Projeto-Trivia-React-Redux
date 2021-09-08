import React, { Component } from 'react';
import Header from '../components/Header';
import FeedbackAnswers from '../components/FeedbackAswers';

function getitem() {
  const getItem = localStorage.getItem('score');
  const parseItem = JSON.parse(getItem);
  return parseItem;
}

class Feedback extends Component {
  componentDidMount() {
    getitem();
  }

  render() {
    const score = getitem();
    return (
      <div>
        <Header
          score={ score }
          testID="feedback-total-question"
        />
        <FeedbackAnswers score={ score } />
      </div>
    );
  }
}

export default Feedback;
