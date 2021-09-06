import React from 'react';
import Category from '../components/Category';
import Question from '../components/Question';
import Reset from '../components/Reset';
import Home from '../components/Home';

class Game extends React.Component {
  render() {
    return (
      <main>
        <Category />
        <Question />
        <Reset />
        <Home />
      </main>
    );
  }
}

export default Game;
