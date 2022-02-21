import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { userReducers } from "./user";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  user: userReducers,
});

const enhancers = compose(
  applyMiddleware(thunk), // your own middleware
  window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

const store = createStore(rootReducer, enhancers);

export { store };
