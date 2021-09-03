import React from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import logo from '../trivia.png';
import Input from '../components/Input';
import Button from '../components/Button';
// import fetchActions from '../redux/actions/fetchActions';

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
    this.fetchTokenApi = this.fetchTokenApi.bind(this);
    this.handleClick = this.handleClick.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target: { name, value } }) {
    const { username, email } = this.state;
    const validator = username.length > 0 && email.length > 0;

    this.setState({
      [name]: value,
    });

    if (validator) {
      this.setState({
        disable: false,
      });
    }

    if (!validator) {
      this.setState({
        disable: true,
      });
    }
  }

  saveTokenOnLocalStorage(token) {
    localStorage.setItem('token', JSON.stringify(token));
  }

  async fetchTokenApi() {
    const fetchAppi = await fetch('https://opentdb.com/api_token.php?command=request');
    const jsonFetch = await fetchAppi.json();
    const { token } = await jsonFetch;
    this.saveTokenOnLocalStorage(token);
  }

  async handleClick() {
    const { disable } = this.state;
    this.fetchTokenApi();
    if (!disable) {
      this.setState({
        redirect: true,
      });
    }
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

// const mapDispatchToProps = (dispatch) => ({
//   initFetchApi: () => dispatch(fetchActions()),
// });

export default Login;
// export default connect(null, mapDispatchToProps)(Login);
