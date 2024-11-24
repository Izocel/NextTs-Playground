import { Atom, Riple } from "react-loading-indicators";
import { containers } from "../Theme/Theme";

export function LoadingIndicator() {
  return (
    <div>
      <Riple color="#ffffff" size="small" textColor="" />
    </div>
  );
}

export function AppLoadingIndicator() {
  return (
    <main className={containers.appLoader}>
      <Atom color="#ffffff" size="large" text="Loading" textColor="" />
    </main>
  );
}
