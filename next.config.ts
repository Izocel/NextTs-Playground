import type { NextConfig } from "next";
import {
  buildNumber,
  name,
  version,
} from "./package.json" assert { type: "json" };

export const ProcessTitle = `${name} ${version} #${buildNumber}`;
process.title = ProcessTitle;

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
