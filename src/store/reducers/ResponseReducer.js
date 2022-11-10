const initialState = {
  response: {},
  authResponse: {},
};

const responseReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_RESPONSE":
      return {
        ...state,
        response: action.payload,
      };

    case "SET_AUTH_RESPONSE":
      return {
        ...state,
        authResponse: action.payload,
      };

    default:
      return state;
  }
};

export default responseReducer;
