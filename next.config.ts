import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  poweredByHeader: false,
  images: {
    // Local assets only — no remote patterns needed.
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // The kits page moved to a descriptive URL before launch. Kept so any
      // link written against the old path still resolves.
      {
        source: "/products/kits",
        destination: "/products/robotics-kits",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
