import ChannelJoinPageClient from "@/components/channels/join/ChannelJoinPageClient"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "채널참여"
}

export default function ChannelJoinPage() {
  return <ChannelJoinPageClient />
}
