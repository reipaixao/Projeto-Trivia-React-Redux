const resetLocalStorageScore = () => {
  localStorage.setItem('score', JSON.stringify(0));
};

export default resetLocalStorageScore;
