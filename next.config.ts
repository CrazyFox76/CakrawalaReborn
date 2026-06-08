import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/CakrawalaReborn",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
