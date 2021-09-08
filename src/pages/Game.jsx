import React from 'react';
import Category from '../components/Category';
import {
  Question,
  Reset,
  Home,
} from '../components';
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
