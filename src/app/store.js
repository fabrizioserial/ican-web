import { configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import rootReducers from "./Common/rootReducers";
// import sessionMiddleware from "./Session/session.middleware";
import { sessionApi } from "./Session/session.api";

// const middlewares = [sessionMiddleware];

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sessionApi.middleware),
});

// export const persistor = persistStore(store);
