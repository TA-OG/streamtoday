/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.supabase.co",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/book-a-session",
        destination: "/book",
        permanent: true,
      },
    ];
  },
  experimental: {
    serverComponentsExternalPackages: ["@supabase/ssr"],
  },
};

export default nextConfig;
