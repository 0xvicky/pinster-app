const initialState = {
  user: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      localStorage.setItem("user", action.payload);
      return {...state, user: action?.payload};
    case "LOGOUT":
      localStorage.removeItem("user");
      return {...state, user: null};
    default:
      return state;
  }
};
