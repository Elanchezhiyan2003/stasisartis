/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export", // Make sure this is removed or commented out
  images: {
    domains: ['images.unsplash.com'],
  },
  experimental: {
    appDir: true,
  },
};

export default nextConfig;
