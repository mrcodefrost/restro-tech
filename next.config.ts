import type { NextConfig } from "next";

const basePath = process.env.GITHUB_PAGES
  ? process.env.NEXT_PUBLIC_BASE_PATH
  : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
