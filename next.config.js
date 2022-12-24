/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  async rewrites() {
      return [
          {
              source: '/js/script.js',
              destination: 'http://167.172.7.89:8000/js/script.js'
          },
          {
              source: '/api/event', // Or '/api/event/' if you have `trailingSlash: true` in this config
              destination: 'http://167.172.7.89:8000/api/event'
          }
      ];
  },
}
