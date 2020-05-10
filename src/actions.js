import {
  INCREMENT,
  DECREASE,
  REQUEST_POSTS,
  RECEIVE_POSTS
} from "./actionTypes";

export function incrementAction() {
  return {
    type: INCREMENT
  };
}
export function decreaseAction() {
  return {
    type: DECREASE
  };
}
export const requestPosts = () => ({
  type: REQUEST_POSTS
});
export const receivedPosts = json => ({
  type: RECEIVE_POSTS,
  json: json
});
export function fetchPost() {
  console.log("ckicl");
  return function(dispatch) {
    dispatch(requestPosts());
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => dispatch(receivedPosts(json)));
  };
}
