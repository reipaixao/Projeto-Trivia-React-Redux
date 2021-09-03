import React, { Component } from 'react';
import md5 from 'crypto-js/md5';

class Header extends Component {
  constructor(props) {
    super(props);
    this.Gravatar = this.Gravatar.bind(this);
  }

  Gravatar() {
    // PEGANDO INFORMAÇÕES DO LOCALSTORAGE
    const savePersil = JSON.parse(localStorage.getItem('player'));
    const { email, score, username } = savePersil;

    const hashGerada = md5(email).toString();
    const imgemPerfil = `https://www.gravatar.com/avatar/${hashGerada}`;
    const perfil = { username, imgemPerfil, score };

    return perfil;
  }

  render() {
    // DESESTRUTURANDO DA FUNÇÃO fetchApiGravatar
    const { username, imgemPerfil, score } = this.Gravatar();
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
        <h3 data-testid="header-score">
          {score > 0 ? score : 0}
        </h3>
      </div>
    );
  }
}

export default Header;
