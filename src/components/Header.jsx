import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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
    const { score, testID } = this.props;
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
        <h3 data-testid={ testID }>
          {score}
        </h3>
      </div>
    );
  }
}

const { number, string } = PropTypes;
Header.propTypes = {
  score: number.isRequired,
  testID: string.isRequired,
};

const mapStateToProps = (state) => ({
  score: state.ScoreReducer.score,
});

export default connect(mapStateToProps)(Header);
