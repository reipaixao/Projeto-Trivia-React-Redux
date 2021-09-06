// fetch api functions

const saveTokenOnLocalStorage = (token) => {
  localStorage.setItem('token', token);
};

export const fetchTokenApi = async () => {
  const fetchApi = await fetch('https://opentdb.com/api_token.php?command=request');
  const jsonFetch = await fetchApi.json();
  const { token } = await jsonFetch;

  saveTokenOnLocalStorage(token);
};

// validate login functions

const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const validateUsername = (username) => username.length > 1;

export const validateLoginFactory = (email, username) => (
  validateEmail(email) && validateUsername(username)
);
