import * as api from "./api";

export const signUpAction = (userData, navigate) => async dispatch => {
  try {
    const {data} = await api.signUpApi(userData);
    console.log(data);
    dispatch({type: "LOGIN_SUCCESS", payload: JSON.stringify(data)});
    console.log("naviagting");
    navigate("/");
  } catch (error) {
    console.log(`Error occured in signUp action:${error}`);
  }
};

export const signInAction = (userData, navigate) => async dispatch => {
  try {
    const {data} = await api.signInApi(userData);
    dispatch({type: "LOGIN_SUCCESS", payload: JSON.stringify(data)});
    console.log(data);
    navigate("/");
  } catch (error) {
    console.log(`Error occured in sign IN action:${error}`);
  }
};
