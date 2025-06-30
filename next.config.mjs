/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // For static site export (like GitHub Pages)
  basePath: '/portfolio', // replace with your repo name if using project page
  reactStrictMode: true,
  images: {
    unoptimized: true, // Required for GitHub Pages + static export
  },
  trailingSlash: true, // Optional: adds trailing slashes for static routing
};

export default nextConfig;

