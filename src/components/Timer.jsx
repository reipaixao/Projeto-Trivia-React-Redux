import React from 'react';

class Timer extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 30,
    };

    this.handleTimer = this.handleTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
  }

  componentDidMount() {
    this.handleTimer();
  }

  componentDidUpdate(prevProps, prevState) {
    const MIN_SECOND = 0;

    if (prevState.count === MIN_SECOND) {
      this.stopTimer();
    }
  }

  handleTimer() {
    const INTERVAL_TIME = 1000;

    setInterval(() => {
      this.setState((prevState) => ({
        count: prevState.count - 1,
      }));
    }, INTERVAL_TIME);
  }

  stopTimer() {
    return this.setState({ count: 0 });
  }

  render() {
    const { count } = this.state;
    return (
      <h2>{ count }</h2>
    );
  }
}

export default Timer;
