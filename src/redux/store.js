import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import sessionMiddleware from "./Session/session.middleware";
import { sessionApi } from './api/sessionApi';
import authSliceReducer from './slices/authSlice';
import homeSliceReducer from './slices/homeSlice';
import formSliceReducer from './slices/formSlice';
import listSliceReducer from './slices/listSlice';
import treatmentSliceReducer from './slices/treatmentSlice';
import { api } from './api/api';
import utilsSliceReducer from './slices/utilsSlice';
// const middlewares = [sessionMiddleware];

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducers);

const reducers = combineReducers({
	[api.reducerPath]: api.reducer,
	authSlice: authSliceReducer,
	homeSlice: homeSliceReducer,
	formSlice: formSliceReducer,
	listSlice: listSliceReducer,
	// reportsSlice: resporstSliceReducer,
	utilsSlice: utilsSliceReducer,
	treatmentSlice: treatmentSliceReducer,
});

export const store = configureStore({
	reducer: reducers,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(api.middleware),
});

// export const persistor = persistStore(store);
