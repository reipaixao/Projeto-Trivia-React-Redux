// fetch api functions

const saveTokenOnLocalStorage = (token) => {
  localStorage.setItem('token', token);
};

export const fetchGameApi = async (token) => {
  const gameToken = await fetch(`https://opentdb.com/api.php?amount=10&token=${token}`);
  const json = await gameToken.json();

  return json;
};

export const fetchTokenApi = async () => {
  const fetchApi = await fetch('https://opentdb.com/api_token.php?command=request');
  const jsonFetch = await fetchApi.json();
  const { token } = await jsonFetch;

  saveTokenOnLocalStorage(token);
};

export const fetchCategoriesList = async () => {
  const api = await fetch('https://opentdb.com/api_category.php');
  const json = await api.json();

  return json;
};

// validate login functions

const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const validateUsername = (username) => username.length > 1;

export const validateLoginFactory = (email, username) => (
  validateEmail(email) && validateUsername(username)
);
