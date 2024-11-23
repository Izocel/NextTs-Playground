import { useDispatch, useSelector, useStore } from "react-redux";
import type { AppDispatch, AppStore, ReduxState } from "./Store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<ReduxState>();
export const useAppStore = useStore.withTypes<AppStore>();
