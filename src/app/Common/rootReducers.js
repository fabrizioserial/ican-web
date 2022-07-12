import { combineReducers } from "@reduxjs/toolkit";
import sessionReducer from "../Session/session.reducer";

const rootReducers = { sessionReducer };

export default combineReducers(rootReducers);