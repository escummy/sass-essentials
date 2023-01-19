import { configureStore } from "@reduxjs/toolkit";
import { fetchApi } from "../api/fetchApi";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import moviesReducer from "../features/movies/moviesSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  [fetchApi.reducerPath]: fetchApi.reducer,
  movies: moviesReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(fetchApi.middleware),
});
