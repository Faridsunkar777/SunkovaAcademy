import type { NextConfig } from "next";

// Static export allows deployment to Cloudflare Pages without a Node.js server.
// For real server-side auth/data later, remove output: "export" and use vinext on Workers.
const nextConfig: NextConfig = { output: "export", reactStrictMode: true, images: { unoptimized: true }, trailingSlash: true };
export default nextConfig;
