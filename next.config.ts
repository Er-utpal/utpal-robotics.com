import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  poweredByHeader: false,
  images: {
    // Local assets only — no remote patterns needed.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
