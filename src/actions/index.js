import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = (userId) => async (dispatch) => {
  const response = await jsonPlaceholder.get("/users/" + userId);

  dispatch({ type: "FETCH_USER", payload: response.data });
};

// FIRST WAY SOLVING UNNECESSARY FETCH REQUESTS
// Using memoize to make sure that we call fetch only if the passed in userId is a different user that you already requested for
// The problem is that with this solution fetch request can be made once for every user which means it won't be able to fetch again to update the user
// export const fetchUser = (userId) => (dispatch) => {
//   _fetchUser(userId, dispatch);
// };

// const _fetchUser = _.memoize(async (userId, dispatch) => {
//   const response = await jsonPlaceholder.get("/users/" + userId);

//   dispatch({ type: "FETCH_USER", payload: response.data });
// });

// SECOND WAY SOLVING UNNECESSARY FETCH REQUESTS

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  // we need to manually dispatch the return to make sure to pass it into the redux pipe line
  // the await keyword making sure that we waiting for fetchPosts api request to return before we would do anything else

  await dispatch(fetchPosts());

  // Using loadish we mapping through the posts as a second argument we passing in userId so thanks to loadish we will get back all the user ids for every single posts
  // after that we call loadish uniq which will return an array on uniq ids

  // const userIds = _.uniq(_.map(getState().posts, "userId"));
  // userIds.forEach((id) => dispatch(fetchUser(id)));

  // REFACTORED VERSION WITH LOADASH
  // it chains all the methods together and user the return from the previous one to make the next one
  //  .value() needed at the end

  _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach((id) => dispatch(fetchUser(id)))
    .value();
};

// call await with forEach
// await Promise.all(userIds.map((id) => dispatch(fetchUser(id))));
