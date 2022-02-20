import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./user";

const rootReducer = combineReducers({
  user: userSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export { store };
