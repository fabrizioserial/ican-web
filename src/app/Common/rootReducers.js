import { combineReducers } from "@reduxjs/toolkit";
import sessionState from "../Session/session.slice";

const rootReducers = { sessionState };

export default combineReducers(rootReducers);
