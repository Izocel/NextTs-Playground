import { registerOTel } from "@vercel/otel";
import { ProcessTitle } from "../next.config";

export function register() {
  registerOTel(ProcessTitle);
}
