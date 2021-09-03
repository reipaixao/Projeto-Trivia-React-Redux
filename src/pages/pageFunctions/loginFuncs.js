// fetch api functions

const saveTokenOnLocalStorage = (token) => {
  localStorage.setItem('token', JSON.stringify(token));
};

const fetchTokenApi = async () => {
  const fetchAppi = await fetch('https://opentdb.com/api_token.php?command=request');
  const jsonFetch = await fetchAppi.json();
  const { token } = await jsonFetch;
  saveTokenOnLocalStorage(token);
};

// validate login functions

function validateEmail(email) {
  if (email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    return true;
  } return false;
}

function validatePassword(password) {
  if (password.length > 1) {
    return true;
  }
  return false;
}

function validateLogin(email, username) {
  if (email && username) {
    return false;
  }
  return true;
}

export const validateLoginFactory = (email, username) => {
  const validateEmailBollean = validateEmail(email);
  const validateUsernameBollean = validatePassword(username);
  return validateLogin(validateEmailBollean, validateUsernameBollean);
};

export default fetchTokenApi;
