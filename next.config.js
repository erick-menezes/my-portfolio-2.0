/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate');

const nextConfig = {
  reactStrictMode: false,
  ...nextTranslate(),
  swcMinify: true,
};

module.exports = nextConfig;
