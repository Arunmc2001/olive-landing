import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['127.0.0.1'],
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/olive-landing' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/olive-landing' : '',
};

export default nextConfig;
