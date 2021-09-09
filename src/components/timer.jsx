import React, { Component } from 'react';

const SECOND_1 = 1000;

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { currentCount: 5 };
  }

  componentDidMount() {
    this.intervalId = setInterval(this.timer.bind(this), SECOND_1);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  timer() {
    const { currentCount } = this.state;
    if (currentCount < 1) {
      clearInterval(this.intervalId);
    } else {
      this.setState({
        currentCount: currentCount - 1,
      });
    }
  }

  render() {
    const { currentCount } = this.state;

    return (
      <div>{currentCount}</div>
    );
  }
}
export default Clock;
