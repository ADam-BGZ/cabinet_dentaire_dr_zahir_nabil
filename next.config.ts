import type { NextConfig } from "next";

const isProd = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/cabinet_dentaire_dr_zahir_nabil" : "",
  assetPrefix: isProd ? "/cabinet_dentaire_dr_zahir_nabil/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
