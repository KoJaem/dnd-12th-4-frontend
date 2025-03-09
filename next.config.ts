import type { NextConfig } from "next"
import withSerwistInit from "@serwist/next"

const revision = crypto.randomUUID()

const withSerwist = withSerwistInit({
  cacheOnNavigation: true,
  swSrc: "src/app/sw.ts",
  swDest: "public/sw.js",
  additionalPrecacheEntries: [{ url: "/~offline", revision }]
})

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
      },
      {
        protocol: "https",
        hostname: "k.kakaocdn.net"
      },
      {
        protocol: "http",
        hostname: "k.kakaocdn.net"
      }
    ]
  }
}

export default withSerwist(nextConfig)
