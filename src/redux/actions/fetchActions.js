const requestToken = () => ({
  type: 'REQUEST_TOKEN',
});

const getToken = (token) => ({
  type: 'GET_TOKEN',
  userToken: token,
});

const saveTokenOnLocalStorage = (token) => {
  localStorage.setItem('token', JSON.stringify(token));
};

function fetchActions() {
  return (dispatch) => { // thunk declarado
    dispatch(requestToken());
    fetch('https://opentdb.com/api_token.php?command=request')
      .then((response) => response.json())
      .then((response) => response.token)
      .then((token) => {
        saveTokenOnLocalStorage(token);
        dispatch(getToken(token));
      });
  };
}

export default fetchActions;
