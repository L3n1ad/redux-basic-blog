import { combineReducers } from "redux";
import postsReducer from "./postsReducer";

// Replace Me is just to get rid off an initial error message, it is a dummy reducer and it's needs to be replaced
export default combineReducers({
  posts: postsReducer,
});
