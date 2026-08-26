import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Do not use `output: "export"` — the contact form needs /api/contact
  // as a serverless route (static export cannot serve API routes).
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
