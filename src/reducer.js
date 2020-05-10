import {
  INCREMENT,
  DECREASE,
  REQUEST_POSTS,
  RECEIVE_POSTS
} from "./actionTypes";
const initialState = {
  value: 0
};

export function addReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, value: state.value + 1 };
    case DECREASE:
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
}

export function fetchreducer(state = {}, action) {
  switch (action.type) {
    case REQUEST_POSTS:
      return { ...state, loading: true };
    case RECEIVE_POSTS:
      return { ...state, json: action.json, loading: false };
    default:
      return state;
  }
}
