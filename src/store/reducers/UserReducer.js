const initialState = {
  userList: [],
  user: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOGIN":
      return {
        ...state,
        user: action.payload.data,
      };

    case "GET_USER":
      return {
        ...state,
        userList: action.payload.data,
      };

    case "DELETE_USER":
      const newList = state.userList.filter(
        (item) => item._id !== action.payload.data
      );

      return {
        ...state,
        userList: newList,
      };

    default:
      return state;
  }
};

export default userReducer;
