import React from 'react';
import { Redirect } from 'react-router';
import fetchTokenApi from './pageFunctions/loginFuncs';
import logo from '../trivia.png';
import Input from '../components/Input';
import Button from '../components/Button';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      disable: true,
      email: '',
      username: '',
      redirect: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.shoudRedirectToGamePage = this.shoudRedirectToGamePage.bind(this);
    this.verifyUserLogin = this.verifyUserLogin.bind(this);
  }

  shoudRedirectToGamePage() {
    const { disable } = this.state;
    if (!disable) {
      this.setState({
        redirect: true,
      });
    }
  }

  verifyUserLogin() {
    const { username, email } = this.state;
    const validator = username.length > 0 && email.length > 0;
    if (validator) {
      this.setState({ disable: false });
    } else {
      this.setState({ disable: true });
    }
  }

  saveUserLoginOnState(name, value) {
    this.setState({
      [name]: value,
    });
  }

  handleChange({ target: { name, value } }) {
    this.saveUserLoginOnState(name, value);
    this.verifyUserLogin();
  }

  async handleClick() {
    fetchTokenApi();
    this.shoudRedirectToGamePage();
  }

  render() {
    const { username, email, disable, redirect } = this.state;
    if (redirect) return <Redirect to="/game" />;

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
              name="username"
              id="player-name"
              labelText="Usuário: "
              testID="input-player-name"
              onChange={ this.handleChange }
              value={ username }
            />
            <Input
              type="email"
              name="email"
              id="player-email"
              labelText="E-mail: "
              testID="input-gravatar-email"
              onChange={ this.handleChange }
              value={ email }
            />
            <Button
              id="login-submit"
              testID="btn-play"
              text="Jogar"
              disabled={ disable }
              onClick={ this.handleClick }
            />
          </form>
        </header>
      </div>
    );
  }
}

export default Login;
