import type { NextConfig } from "next";

// GitHub Pages serves the site from /portfolio; local dev serves it from the root.
const basePath = process.env.NODE_ENV === "development" ? "" : "/portfolio";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  // Static export has no image optimization server.
  images: { unoptimized: true },
  // Exposed so plain <img>/<a> paths to files in public/ can be prefixed.
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
