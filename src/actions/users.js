import request from "superagent";

const baseUrl = "http://localhost:4000";

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
