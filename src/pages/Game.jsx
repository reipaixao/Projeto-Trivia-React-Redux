import PropTypes from 'prop-types';
import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import resetLocalStorageScore from './pageFunctions/gameFuncs';
import saveScoreOnStore from '../redux/actions/saveCurPlayerScore';
import Header from '../components/Header';
import Button from '../components/Button';

class Game extends React.Component {
  constructor() {
    super();

    this.state = {
      score: 0,
      redirect: false,
    };

    this.addScoreOnClick = this.addScoreOnClick.bind(this);
    this.onClick = this.onClick.bind(this);
    this.addScoreInThisComponent = this.addScoreInThisComponent.bind(this);
  }

  componentDidMount() {
    resetLocalStorageScore();
  }

  async onClick() {
    const { score } = this.state;
    await localStorage.setItem('score', JSON.stringify(score));
    this.setState({ redirect: true });
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

  render() {
    const { redirect, score } = this.state;
    if (redirect) return <Redirect to="/feedback" />;

    return (
      <div>
        <Header score={ score } />
        <Button
          text="Add Score Points"
          onClick={ this.addScoreOnClick }
        />
        <Button
          text="Ver Score"
          onClick={ this.onClick }
        />
        <h2>Game Page</h2>
      </div>
    );
  }
}

Game.propTypes = {
  addScoreOnStore: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addScoreOnStore: (payload) => dispatch(saveScoreOnStore(payload)),
});

export default connect(null, mapDispatchToProps)(Game);
