"use client"

import { useFindChannelById } from "@/api/channel-controller/channel-controller"
import InviteBottomSheet from "@/components/root/InviteBottomSheet"
import Image from "next/image"
import { useParams } from "next/navigation"
import { useState } from "react"

export default function InviteMission() {
  const { id } = useParams()
  const { data } = useFindChannelById(id as string)

  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <article
      className="cursor-pointer rounded-[16px] bg-primary-100 p-[20px]"
      onClick={() => {
        setIsOpen(true)
      }}
    >
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-[12px]">
          {/* <Tag text={`1번째 시그널`} className="bg-gray-01 text-emphasis-high" /> */}
          <div className="flex flex-col gap-[4px]">
            <p className="text-subtitle-01 font-semibold text-emphasis-high">친구들을 초대해보세요!</p>
            <p className="text-body-03 text-emphasis-medium">초대 코드를 공유해보세요.</p>
          </div>
        </div>
        <Image src={"/walkitalki/walkitalki_invite_2.webp"} alt="unknown" width={96} height={96} />
      </div>
      <InviteBottomSheet
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        channelRoomName={data?.body?.channelRoomName}
        inviteCode={data?.body?.inviteCode}
      />
    </article>
  )
}
