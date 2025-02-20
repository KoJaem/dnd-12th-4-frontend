import { ApiChannelSpecificResponse } from "@/api/model"
import { serverInstance } from "@/api/serverInstance"
import HeaderFooterWrapper from "@/components/layout/HeaderFooterWrapper"
import ModifyProfileForm from "@/components/my-page/profile/ModifyProfileForm"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "채널 프로필"
}

type Params = Promise<{ id: string }>

export default async function ChannelProfileModifyPage({ params }: { params: Params }) {
  const { id } = await params
  const { data } = await serverInstance.get<ApiChannelSpecificResponse>(`/api/channels/${id}`)
  return (
    <HeaderFooterWrapper header footer headerTitle={data.body?.channelRoomName}>
      <ModifyProfileForm profileType="channel" />
    </HeaderFooterWrapper>
  )
}
