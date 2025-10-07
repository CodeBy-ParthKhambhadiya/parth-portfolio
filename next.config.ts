import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // optional, but recommended
  images: {
    domains: ["res.cloudinary.com"], // ✅ Add Cloudinary as a trusted host
  },
};

export default nextConfig;
