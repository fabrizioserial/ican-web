import { combineReducers } from "@reduxjs/toolkit";
import authState from "../Session/auth.slice";
import sessionApiState from "../Session/session.api";

const rootReducers = { authState, sessionApiState };

export default combineReducers(rootReducers);
