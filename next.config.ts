import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fta1tprpvqpelfot.public.blob.vercel-storage.com",
        port: "",
        pathname: "/**", 
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/journal/welcome-to-the-journal",
        destination: "/journal/how-i-found-my-way-to-weddings",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
