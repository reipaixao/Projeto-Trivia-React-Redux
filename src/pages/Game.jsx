import PropTypes from 'prop-types';
import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// import resetLocalStorageScore, { fetchQuestions } from './pageFunctions/gameFuncs';

import saveScoreOnStore, {
  addQuestionsOnStore,
} from '../redux/actions/saveCurPlayerScore';
import Header from '../components/Header';
// import Button from '../components/Button';
import Question from '../components/Question';
// import Reset from '../components/Reset';
import Home from '../components/Home';

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

  async componentDidMount() {
    const { addScoreOnStore } = this.props;

    const { score } = this.state;
    await addScoreOnStore(score);
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
    const { redirect } = this.state;
    if (redirect) return <Redirect to="/feedback" />;

    return (
      <div>
        <Header
          testID="header-score"
        />
        <h2>Game Page</h2>
        <main>
          <Question />
          {/* <Reset /> */}
          <Home />

        </main>
        {/* <Button
          text="Add Score Points"
          onClick={ this.addScoreOnClick }
        />
        <Button
          text="Ver Score"
          onClick={ this.onClick }
        /> */}
      </div>

    );
  }
}

Game.propTypes = {
  // addQuestionsOnStoreRedux: PropTypes.func.isRequired,
  addScoreOnStore: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  questions: state.fetchReducer.questions,
  done: state.fetchReducer.done,
});

const mapDispatchToProps = (dispatch) => ({
  addScoreOnStore: (payload) => dispatch(saveScoreOnStore(payload)),
  addQuestionsOnStoreRedux: (payload) => dispatch(addQuestionsOnStore(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
