/** @type {import('next').NextConfig} */
const withYaml = require('next-plugin-yaml');

const nextConfig = {
  basePath: (process.env.NODE_ENV === 'production') ? '/sfz-website' : '',
  generateBuildId: async () => {
    return 'latest'
  },
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true,
}

console.log('NODE_ENV', process.env.NODE_ENV);

module.exports = withYaml(nextConfig);
