"use client"
import { useFindChannelById } from "@/api/channel-controller/channel-controller"
import { useFindChannelMembers } from "@/api/channel-member-controller/channel-member-controller"
import InviteBottomSheet from "@/components/root/InviteBottomSheet"
import { ChevronRight } from "lucide-react"
import Image from "next/image"
import { useParams } from "next/navigation"
import { useState } from "react"

export default function InviteButton() {
  const { id } = useParams()

  const { data: friendData } = useFindChannelMembers(id as string)

  const { data } = useFindChannelById(id as string)

  const [isOpen, setIsOpen] = useState<boolean>(false)

  if (friendData?.body?.memberCount && friendData?.body?.memberCount <= 1) {
    return null
  }

  return (
    <>
      <button
        className="flex w-full flex-col gap-[12px] rounded-[20px] bg-secondary-0 p-[20px]"
        onClick={() => setIsOpen(true)}
      >
        <article className="flex w-full items-center justify-between">
          <div className="flex items-center gap-[8px]">
            <Image src={"/walkitalki/walkitalki_invite_1.webp"} alt="logo" width={45} height={45} />
            <div className="flex flex-col items-start gap-[4px]">
              <p className="text-subtitle-03 font-semibold text-emphasis-high">새 친구 초대하기</p>
              <p className="text-body-04 text-emphasis-medium">초대 코드로 친구를 초대해보세요.</p>
            </div>
          </div>
          <ChevronRight size={24} />
        </article>
      </button>
      <InviteBottomSheet
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        channelRoomName={data?.body?.channelRoomName}
        inviteCode={data?.body?.inviteCode}
      />
    </>
  )
}
