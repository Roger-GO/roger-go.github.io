/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/roger-go.github.io' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/roger-go.github.io' : '',
  images: {
    domains: [
      'i.scdn.co',
      'image-cdn-ak.spotifycdn.com',
      'blend-playlist-covers.spotifycdn.com',
      'image-cdn-fa.spotifycdn.com',
      'miro.medium.com',
      'cdn-images-1.medium.com'
    ],
    unoptimized: true
  }
};

export default nextConfig;
