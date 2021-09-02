import React from 'react';
import logo from '../trivia.png';
import Input from '../components/Input';
import Button from '../components/Button';

class Login extends React.Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <p>
            SUA VEZ
          </p>

          <form>
            <Input
              type="text"
              name="player"
              id="player-name"
              labelText="Usuário: "
              testID="input-player-name"
            />
            <Input
              type="email"
              name="email"
              id="player-email"
              labelText="E-mail: "
              testID="input-gravatar-email"
            />
            <Button
              id="login-submit"
              testID="btn-play"
              text="Jogar"
              disabled="true"
            />
          </form>
        </header>
      </div>
    );
  }
}

export default Login;
