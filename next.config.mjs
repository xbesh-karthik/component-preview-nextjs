/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
    // Add HTML loader configuration
    config.module.rules.push({
      test: /\.html$/,
      use: 'html-loader'
    });

    return config;
  }
};

export default nextConfig;
