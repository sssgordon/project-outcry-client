import request from "superagent";

const baseUrl = "http://localhost:4000";

export const createAlias = (aliasObj, email) => () => {
  request
    .put(`${baseUrl}/users/${email}`)
    .send(aliasObj)
    .then(response => {
      console.log("create alias response", response);
    })
    .catch(console.error);
};
