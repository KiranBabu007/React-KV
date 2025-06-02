import { legacy_createStore as createStore, applyMiddleware } from "redux";

import logger from "redux-logger";
import employeeReducer from "./employee/employeeReducer";

const store = createStore(
  employeeReducer,
  undefined,
  applyMiddleware(logger)
);

export default store