import { ApiChannelMembersResponse } from "@/api/model/apiChannelMembersResponse"
import { serverInstance } from "@/api/serverInstance"
import FriendInformation from "@/components/common/FriendInformation"
import HeaderFooterWrapper from "@/components/layout/HeaderFooterWrapper"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "친구목록"
}

type Params = Promise<{ id: string }>

export default async function FriendsPage({ params }: { params: Params }) {
  const { id } = await params

  const { data } = await serverInstance.get<ApiChannelMembersResponse>(`/api/channels/${id}/members`)

  return (
    <HeaderFooterWrapper header headerTitle="내친구">
      <section className="flex flex-col gap-[12px] px-[16px]">
        {data.body?.channelMembers?.map((member) => (
          <FriendInformation key={member.channelMemberId} nickname={member.codeName} url={member.profileImageUrl} />
        ))}
      </section>
    </HeaderFooterWrapper>
  )
}
