/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cloud.nevolearn.co', 'kandra-storage-bucket.blr1.cdn.digitaloceanspaces.com', 'images.unsplash.com'],
  },
};

export default nextConfig;
