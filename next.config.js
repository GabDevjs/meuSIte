/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
}

const withVideos = require('next-videos')

module.exports = withVideos()
module.exports = nextConfig
module.exports = {
  webpack: (config) => {
      config.module.rules.push({
          test: /\.(gif|ico|eot|ttf|woff|woff2|mp4|pdf|webm|txt)$/,
          type: 'asset/resource',
          generator: {
              filename: 'static/chunks/[path][name].[hash][ext]'
          },
      });

      return config;
  }
};