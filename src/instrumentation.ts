import { registerOTel } from "@vercel/otel";
import { ProcessName } from "../next.config";

export function register() {
  registerOTel(ProcessName);
}
