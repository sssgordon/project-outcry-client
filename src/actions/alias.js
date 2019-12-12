import request from "superagent";
import { baseUrl } from "../constants";

// const baseUrl = "http://localhost:4000";

// create alias in user in db
export const createAlias = (aliasObj, email) => () => {
  request
    .put(`${baseUrl}/users/${email}/alias`)
    .send(aliasObj)
    .then(response => {
      // console.log("create alias response", response);
    })
    .catch(console.error);
};

// create alias (name) entity in dialogflow
export const createDialogflowEntity = (alias, accessToken) => () => {
  request
    .post(
      "https://dialogflow.googleapis.com/v2/projects/lifeline-82492/agent/entityTypes/cd1fd866-ec8d-4c51-b447-92be3611a6ef/entities:batchCreate"
    )
    .set("Authorization", `Bearer ${accessToken}`)
    .send({
      entities: [
        {
          value: `${alias}`,
          synonyms: []
        }
      ],
      languageCode: ""
    })
    .then(response => {
      console.log("create dialogflow entity response", response);
    })
    .catch(console.error);
};
