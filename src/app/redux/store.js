import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import sessionMiddleware from "./Session/session.middleware";
import { sessionApi } from "./api/session.api";
import authState from "./slices/auth.slice";
import homeState from "./slices/home.slice";
// const middlewares = [sessionMiddleware];

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducers);

const reducers = combineReducers({
  authState,
  homeState
})

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sessionApi.middleware),
});

// export const persistor = persistStore(store);
