const INITIAL_STATE = {
  userToken: '',
  isFetching: false,
};

function fetchReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'REQUEST_TOKEN':
    return {
      ...state,
      isFetching: true,
    };
  case 'GET_TOKEN':
    return {
      ...state,
      userToken: action.userToken,
      isFetching: false,
    };
  default:
    return {
      ...state,
    };
    // break;
  }
}

export default fetchReducer;
