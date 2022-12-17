/** @type {import('next').NextConfig} */
const withYaml = require('next-plugin-yaml');

const nextConfig = {
  basePath: (process.env.NODE_ENV === 'production') ? '/sfz-website' : '',
  trailingSlash: true,
  generateBuildId: async () => {
    return 'latest'
  },
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/documentation/',
        destination: '/documentation/getting-started/what_is_sfz/',
        permanent: true,
      },
    ]
  },
}

console.log('NODE_ENV', process.env.NODE_ENV);

module.exports = withYaml(nextConfig);
