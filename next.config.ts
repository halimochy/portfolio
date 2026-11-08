import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    // Add remote hosts here if you ever load images from a CDN, e.g.
    // remotePatterns: [{ protocol: "https", hostname: "images.example.com" }],
  },
};

export default nextConfig;
