/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // For static export or if images are external
  },
  // Add other configurations if needed
};

export default nextConfig;

