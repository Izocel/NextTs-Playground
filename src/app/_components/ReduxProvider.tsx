"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { AppStore, makeStore } from "../lib/Redux/Store";
import { AppLoadingIndicator } from "./LoadingIndicators";

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();

  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
  }

  return (
    <Provider store={storeRef.current}>
      <PersistGate
        persistor={persistStore(storeRef.current)}
        loading={<AppLoadingIndicator />}
      >
        {children}
      </PersistGate>
    </Provider>
  );
}
