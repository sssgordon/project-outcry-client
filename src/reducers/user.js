export default (state = {}, action = {}) => {
  switch (action.type) {
    case "GOOGLE_LOGIN":
      return action.payload;
    case "SET_USER_DETAILS":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
