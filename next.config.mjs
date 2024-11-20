import nextMDX from "@next/mdx";

const withMDX = nextMDX();

/** @type {import('next').NextConfig} */
const baseNextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

const nextConfig = withMDX({
  ...baseNextConfig,
  reactStrictMode: true,
  swcMinify: true,
  // Konfiguracja obrazków z zewnętrznych źródeł
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
});

export default nextConfig;
