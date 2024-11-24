// https://redux.js.org/usage/nextjs
// https://dev.to/sasithwarnakafonseka/setting-up-redux-with-persistent-state-rehydration-in-nextjs-h3o

import {
  Action,
  combineReducers,
  configureStore,
  ThunkAction,
} from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { playgroundSlice } from "./Slices/Playground/PlaygroundSlice";

const LocalPersistConfig = {
  key: "local",
  storage: storage,
};

// const SessionPersistConfig = {
//   key: "session",
//   storage: sessionStorage,
// };

const CombinedReducer = combineReducers({
  playground: playgroundSlice.reducer,
});

const PersistReducer = persistReducer(LocalPersistConfig, CombinedReducer);

export const makeStore = () => {
  return configureStore({
    reducer: PersistReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `ReduxState` and `AppDispatch` types from the store itself
export type ReduxState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  ReduxState,
  unknown,
  Action<string>
>;
