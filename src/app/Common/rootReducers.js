import { combineReducers } from "@reduxjs/toolkit";
import authState from "../Session/auth.slice";
import sessionApiState from "../Session/session.api";
import homeState from "../Home/home.slice";

const rootReducers = { authState, sessionApiState, homeState };

export default combineReducers(rootReducers);