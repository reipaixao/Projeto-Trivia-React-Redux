import React from 'react';
import Category from '../components/Category';
import Question from '../components/Question';
import Reset from '../components/Reset';
import Home from '../components/Home';
// import Header from '../components/Header';

class Game extends React.Component {
  render() {
    return (
      <main>
        <Category />
        <Question />
        <Reset />
        <Home />
        {/* <div>
          <Header />
        </div> */}
      </main>
    );
  }
}

export default Game;
