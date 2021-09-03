const saveTokenOnLocalStorage = (token) => {
  localStorage.setItem('token', JSON.stringify(token));
};

const fetchTokenApi = async () => {
  const fetchAppi = await fetch('https://opentdb.com/api_token.php?command=request');
  const jsonFetch = await fetchAppi.json();
  const { token } = await jsonFetch;
  saveTokenOnLocalStorage(token);
};

export default fetchTokenApi;
