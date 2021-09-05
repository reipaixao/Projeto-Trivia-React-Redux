import React from 'react';
import { fetchGameApi } from './pageFunctions/loginFuncs';
import Category from '../components/Category';

class Game extends React.Component {
  constructor() {
    super();
    this.handleGame = this.handleGame.bind(this);
  }

  async componentDidMount() {
    this.handleGame();
  }

  async handleGame() {
    const token = localStorage.getItem('token');
    const fetchTriviaApi = await fetchGameApi(token);
    const apiResults = fetchTriviaApi.results;

    console.log(apiResults);
  }

  render() {
    return (
      <main>
        <Category />
      </main>
    );
  }
}

export default Game;
