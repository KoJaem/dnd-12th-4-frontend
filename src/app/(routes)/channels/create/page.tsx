import ChannelCreatePageClient from "@/components/channels/create/ChannelCreatePageClient"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "채널생성"
}

export default function ChannelCreatePage() {
  return <ChannelCreatePageClient />
}
