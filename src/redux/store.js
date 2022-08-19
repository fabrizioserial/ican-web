import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import sessionMiddleware from "./Session/session.middleware";
import { sessionApi } from "./api/sessionApi";
import authState from "./slices/authSlice";
import homeState from "./slices/homeSlice";
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
