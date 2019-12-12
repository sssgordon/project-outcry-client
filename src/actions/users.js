import request from "superagent";
import { baseUrl } from "../constants";

// const baseUrl = "http://localhost:4000";

// google login
export const GOOGLE_LOGIN = "GOOGLE_LOGIN";
export function googleLoginAction(payload) {
  return {
    type: GOOGLE_LOGIN,
    payload
  };
}

export const signUp = data => () => {
  request
    .post(`${baseUrl}/users`)
    .send(data)
    .then(response => {
      // console.log("Sign up response test", response);
    })
    .catch(console.error);
};

// user details
export const SET_USER_DETAILS = "SET_USER_DETAILS";
function setUserDetails(payload) {
  return {
    type: SET_USER_DETAILS,
    payload
  };
}

export const getUserDetails = email => dispatch => {
  // console.log(email);
  request
    .get(`${baseUrl}/users/${email}`)
    .then(response => {
      // console.log("get user details response", response);
      const action = setUserDetails(response.body);
      dispatch(action);
    })
    .catch(console.error);
};

export const updateUserDetails = (data, email) => () => {
  request
    .put(`${baseUrl}/users/${email}/update-details`)
    .send(data)
    .then(response => {
      console.log("update details response", response);
    })
    .catch(console.error);
};

// export const LOGIN = "LOGIN";
// function doLogin(payload) {
//   return {
//     type: LOGIN,
//     payload
//   };
// }

//Works!
export const test = () => dispatch => {
  request.get(`${baseUrl}/sendMail`).catch(console.error);
};
