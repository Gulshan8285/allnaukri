import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "All Naukri",
    short_name: "All Naukri",
    description: "All Jobs, All Sarkari Naukri, All Result and Sarkari Yojna updates.",
    start_url: "/",
    display: "standalone",
    background_color: "#07131a",
    theme_color: "#08c7df",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml"
      }
    ]
  };
}
