/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  env: {
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: "dfj8gfqru",
    NEXT_PUBLIC_CLOUDINARY_PRESET_NAME: "k0hk2aqn",
  },
};

module.exports = nextConfig;
