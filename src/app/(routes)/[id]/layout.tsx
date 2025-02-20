import { serverInstance } from "@/api/serverInstance"
import { Metadata } from "next"
import React from "react"

type MetadataProps = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: MetadataProps): Promise<Metadata> {
  const { id } = await params

  const { data } = await serverInstance.get(`/api/channels/${id}`)

  return {
    // title: data?.body?.channelRoomName || "채널"
    title: {
      default: data?.body?.channelRoomName || "채널",
      template: `피키토키 | ${data?.body?.channelRoomName || "채널"} %s`
    }
  }
}

export default function ChannelLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
