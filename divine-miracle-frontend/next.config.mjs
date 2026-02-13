/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for cPanel hosting
  output: 'export',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Base path if your site is in a subdirectory (remove if root domain)
  // basePath: '/your-folder-name',
  
  // Trailing slash for better compatibility
  trailingSlash: true,
  
  // Enable compression
  compress: true,
  
  // Enable React strict mode for better debugging
  reactStrictMode: true,
};

export default nextConfig;
