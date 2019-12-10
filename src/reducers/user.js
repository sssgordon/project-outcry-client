export default (state = {}, action = {}) => {
  switch (action.type) {
    case "GOOGLE_LOGIN":
      return action.payload;
    default:
      return state;
  }
};
