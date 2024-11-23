import type { MetadataRoute } from "next";
import { ProcessName, ProcessShortName } from "../../next.config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: ProcessName,
    short_name: ProcessShortName,
    description: "A Progressive Web App built with Next.js",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/favicon.ico",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
