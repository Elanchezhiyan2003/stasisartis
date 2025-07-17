/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export", // Make sure this is removed or commented out
  images: {
    domains: [
      'images.unsplash.com',
      'img.freepik.com', // Add this line
      'res.cloudinary.com'
    ],
  },
  experimental: {
    appDir: true,
  },
};

export default nextConfig;
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'images.unsplash.com',
//       },
//       {
//         protocol: 'https',
//         hostname: 'images.freepik.com',
//       },
//     ],
//   },
//   experimental: {
//     appDir: true,
//   },
// };

// module.exports = nextConfig;
