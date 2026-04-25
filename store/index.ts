import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // localStorage

import userReducer from "../reducers/user";
import wodReducer from "../reducers/wod";

const rootReducer = combineReducers({
  user: userReducer,
  wod: wodReducer,
});

const persistConfig = {
  key: "thiswod",
  storage,
  whitelist: ["user"], // seul user est persisté (token, profil)
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
