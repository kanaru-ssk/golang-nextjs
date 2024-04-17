/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  async rewrites() {
    return [
      {
        source: "/query:path*",
        destination: `http://backend:${process.env.BACKEND_PORT}/query:path*`,
      },
    ];
  },
};

export default nextConfig;
