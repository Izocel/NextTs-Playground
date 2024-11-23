import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { playgroundSlice } from "./Slices/Playground/PlaygroundSlice";

export const makeStore = () => {
  return configureStore({
    reducer: { playground: playgroundSlice.reducer },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
