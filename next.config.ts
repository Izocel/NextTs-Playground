import type { NextConfig } from "next";
import {
  buildNumber,
  name,
  version,
} from "./package.json" assert { type: "json" };

export const ProcessShortName = `${name}`;
export const ProcessName = `${ProcessShortName} ${version} #${buildNumber}`;

const headers = [
  {
    source: "/(.*)",
    headers: [
      {
        key: "X-Content-Type-Options",
        value: "nosniff",
      },
      {
        key: "X-Frame-Options",
        value: "DENY",
      },
      {
        key: "Referrer-Policy",
        value: "strict-origin-when-cross-origin",
      },
    ],
  },
  {
    source: "/sw.js",
    headers: [
      {
        key: "Content-Type",
        value: "application/javascript; charset=utf-8",
      },
      {
        key: "Cache-Control",
        value: "no-cache, no-store, must-revalidate",
      },
      {
        key: "Content-Security-Policy",
        value: "default-src 'self'; script-src 'self'",
      },
    ],
  },
];

const nextConfig: NextConfig = {
  headers: async () => headers,
};

export default nextConfig;
