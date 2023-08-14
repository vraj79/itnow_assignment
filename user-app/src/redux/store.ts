import { legacy_createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import userReducer, { User } from "./reducers";

export interface RootState {
  users: User[];
}

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = legacy_createStore(
  userReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
