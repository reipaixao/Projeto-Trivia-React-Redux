import React from 'react';
import { Redirect } from 'react-router';
import Button from './Button';

export default class Reset extends React.Component {
  constructor() {
    super();

    this.state = {
      redirect: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  async handleClick() {
    const token = localStorage.getItem('token');
    const fetchResetApi = await fetch(`https://opentdb.com/api_token.php?command=reset&token=${token}`);
    this.setState({
      redirect: true,
    });

    return fetchResetApi;
  }

  render() {
    const { redirect } = this.state;
    if (redirect) return <Redirect to="/" />;

    return (
      <Button
        category="button"
        id="reset-button"
        testID="btn-play-again"
        text="Jogar novamente"
        onClick={ this.handleClick }
      />
    );
  }
}
