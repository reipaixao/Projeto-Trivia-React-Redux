import PropTypes from 'prop-types';
import React, { Component } from 'react';
import md5 from 'crypto-js/md5';

class Header extends Component {
  constructor(props) {
    super(props);

    this.gravatar = this.gravatar.bind(this);
  }

  getPlayerDataFromLocalStorage() {
    const getPlayerData = JSON.parse(localStorage.getItem('player'));
    return getPlayerData;
  }

  gravatar() {
    const { username, email } = this.getPlayerDataFromLocalStorage();

    const hashGerada = md5(email).toString();
    const imgemPerfil = `https://www.gravatar.com/avatar/${hashGerada}`;
    const perfil = { username, imgemPerfil, email };

    return perfil;
  }

  render() {
    const { username, imgemPerfil } = this.gravatar();
    const { score } = this.props;

    return (
      <div>
        <img
          src={ imgemPerfil }
          alt={ username }
          data-testid="header-profile-picture"
        />
        <p data-testid="header-player-name">
          { username }
        </p>
        <h3 data-testid="feedback-total-question">
          { score }
        </h3>
      </div>
    );
  }
}

const { number } = PropTypes;
Header.propTypes = {
  score: number.isRequired,
};

export default Header;
