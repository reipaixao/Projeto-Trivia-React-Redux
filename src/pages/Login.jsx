import React from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import fetchTokenApi, { validateLoginFactory } from './pageFunctions/loginFuncs';
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
    this.disableAndAbleButton = this.disableAndAbleButton.bind(this);
    this.verifyUserLogin = this.verifyUserLogin.bind(this);
  }

  disableAndAbleButton(bollean) {
    if (!bollean) {
      this.setState({
        disable: false,
      });
    } else {
      this.setState({
        disable: true,
      });
    }
  }

  verifyUserLogin() {
    const { username, email } = this.state;
    const shoudRedirectBollean = validateLoginFactory(email, username);
    this.disableAndAbleButton(shoudRedirectBollean);
  }

  saveUserLoginOnState(name, value) {
    this.setState({
      [name]: value,
    });
  }

  async handleChange({ target: { name, value } }) {
    await this.saveUserLoginOnState(name, value);
    this.verifyUserLogin();
  }

  async handleClick() {
    fetchTokenApi();
    this.setState({ redirect: true });
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
            <Link to="/settings">
              <button type="button" data-testid="btn-settings">Configurações</button>
            </Link>
          </form>
        </header>
      </div>
    );
  }
}

export default Login;
