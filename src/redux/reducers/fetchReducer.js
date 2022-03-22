const INITIAL_STATE = {
  userToken: '',
  isFetching: false,
  questions: [],
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
  case 'SUBMIT_QUESTIONS':
    return {
      ...state,
      questions: action.payload,
    };
  case 'ADD_QUESTIONS_ON_STORE':
    return ({
      ...state,
      questions: action.payload,
    });
  case 'GET_QUESTIONS':
    return ({
      ...state,
      questions: action.questions,
    });
  case 'GET_QUESTIONS_ERROR':
    return ({
      ...state,
    });
  default:
    return {
      ...state,
    };
    // break;
  }
}

export default fetchReducer;
