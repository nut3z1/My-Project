/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/workspace-setting",
        destination: "/workspace-setting/settings-packs",
        permanent: true,
      },
    ];
  },
  reactStrictMode: true,
  webpack(config, {}) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
