export default (state = [], action) => {
  // if (action.type === "FETCH_POSTS") {
  //     return action.payload;
  // }

  // return state;
  // USE A SWITCH STATEMENT INSTEAD
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;
    default:
      return state;
  }
};
