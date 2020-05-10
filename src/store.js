import { createStore, applyMiddleware, combineReducers } from "redux";
import { addReducer, fetchreducer } from "./reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  addReducer,
  fetchreducer
});
const store = createStore(
  rootReducer,
  {
    addReducer: { value: 0 },
    fetchreducer: { loading: false, json: [] }
  },
  applyMiddleware(thunk)
);

export default store;
