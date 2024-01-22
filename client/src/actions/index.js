import * as api from "../api";

export const getPinsAction = () => async dispatch => {
  try {
    const {data} = await api.getAllPinsApi();
    dispatch({type: "GET_PINS", payload: data});
  } catch (error) {
    console.log(`Error occuredh while getting pins:${error}`);
  }
};
export const addPinAction = pinData => async dispatch => {
  try {
    const {data} = await api.addPinApi(pinData);
    dispatch({type: "ADD_PIN", payload: data});
  } catch (error) {
    console.log(`Error occured in add Pin Action:${error}`);
  }
};

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
  console.log(userData);
  try {
    const {data} = await api.signInApi(userData);
    console.log(data);
    dispatch({type: "LOGIN_SUCCESS", payload: JSON.stringify(data)});
    console.log(data);
    navigate("/");
  } catch (error) {
    console.log(error);
    console.log(`Error occured in sign IN action:${error}`);
  }
};
