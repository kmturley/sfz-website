/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: (process.env.NODE_ENV === 'production') ? '/sfz-website' : '',
  generateBuildId: async () => {
    return 'latest'
  },
  reactStrictMode: true,
  swcMinify: true,
}

console.log('NODE_ENV', process.env.NODE_ENV);

module.exports = nextConfig
