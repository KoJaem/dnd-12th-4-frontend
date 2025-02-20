import { DefaultSession } from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      accessToken?: string
      userName?: string | null
      refreshToken?: string
      channelId: string
      channelCount: number
    } & DefaultSession["user"]
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string
    refreshToken?: string
    userName?: string | null
    channelId: string
    channelCount: number
  }
}
