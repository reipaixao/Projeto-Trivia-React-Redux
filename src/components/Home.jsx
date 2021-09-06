import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

export default class Home extends React.Component {
  render() {
    return (
      <Link to="/">
        <Button
          category="button"
          id="go-home"
          data-testid="btn-go-home"
          text="Home"
        />
      </Link>
    );
  }
}
