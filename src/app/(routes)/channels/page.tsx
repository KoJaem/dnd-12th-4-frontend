export const dynamic = "force-dynamic"

import { getFindChannelsByRoleQueryKey } from "@/api/channel-controller/channel-controller"
import { serverInstance } from "@/api/serverInstance"
import ChannelsPageClient from "@/components/channels/ChannelsPageClient"
import HeaderFooterWrapper from "@/components/layout/HeaderFooterWrapper"
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query"
import { Metadata } from "next"
import { notFound } from "next/navigation"

export const metadata: Metadata = {
  title: "채널"
}

interface Params {
  searchParams: Promise<{
    tab?: string
    sort?: string
  }>
}

export default async function ChannelsPage({ searchParams }: Params) {
  const queryClient = new QueryClient()
  const { tab, sort } = await searchParams

  try {
    await queryClient.fetchQuery({
      queryKey: getFindChannelsByRoleQueryKey({ tab: tab, sort }),
      queryFn: async () => {
        const { data } = await serverInstance.get(`/api/channels/channel-profile?tab=${tab ?? ""}&sort=${sort ?? ""}`)
        return data
      }
    })
  } catch {
    notFound()
  }

  return (
    <HeaderFooterWrapper>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ChannelsPageClient />
      </HydrationBoundary>
    </HeaderFooterWrapper>
  )
}
