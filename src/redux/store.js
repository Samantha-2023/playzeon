import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducer/index";

let initalValues = {};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  initalValues,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;


// store defined value will be globally defined everywhere whole application we can access anywhere 
// dispatch la panra action store la store panum .
// useselector is a hook  , helper file create action create pananum . api call panum pothu what should happen 
// 
