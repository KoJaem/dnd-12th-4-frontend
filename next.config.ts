import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co"
      },
      {
        protocol: "http",
        hostname: "img1.kakaocdn.net"
      },
      {
        protocol: "http",
        hostname: "ec2-52-79-242-171.ap-northeast-2.compute.amazonaws.com"
      }
    ]
  }
}

export default nextConfig
