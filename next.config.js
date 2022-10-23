/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    runtime: 'experimel',
  }
}

const withTM = require('next-transpile-modules')(['three'])
module.exports = withTM()

module.exports = nextConfig
