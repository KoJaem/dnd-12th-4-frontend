"use client"

import { useFindChannelById } from "@/api/channel-controller/channel-controller"
import { useParams, useRouter } from "next/navigation"
import CurrentChannelBox from "./CurrentChannelBox"
import { useState } from "react"
import ChannelEditBottomSheet from "@/components/channels/ChannelEditBottomSheet"
import {
  useFindMyChannelMemberProfile,
  useLeaveOneChannel
} from "@/api/channel-member-controller/channel-member-controller"
import ConfirmModal from "@/components/common/ConfirmModal"

export default function ChannelSection() {
  const router = useRouter()
  const [isOpenChannelSheet, setIsOpenChannelSheet] = useState(false)
  const [isDeleteModal, setIsDeleteModal] = useState(false)

  const params = useParams()
  const { data: channelInfo } = useFindChannelById(params.id as string)
  const { data: userInfo } = useFindMyChannelMemberProfile(params.id as string)
  const leaveChannelMutation = useLeaveOneChannel()
  const handleButtonClick = async () => {
    setIsDeleteModal(true)
    setIsOpenChannelSheet(false)

    try {
      await leaveChannelMutation.mutateAsync({ channelId: channelInfo?.body?.channelId as string })
      router.push("/channels")
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <section className="flex flex-col gap-[20px]">
        <CurrentChannelBox
          key={channelInfo?.body?.channelId}
          count={channelInfo?.body?.signalCount || 0}
          name={channelInfo?.body?.channelRoomName ?? "-"}
          memberCount={channelInfo?.body?.countPerson || 1}
          owner={channelInfo?.body?.channelOwnerName ?? "-"}
          onClick={() => setIsOpenChannelSheet(true)}
        />
      </section>
      <ChannelEditBottomSheet
        isOpen={isOpenChannelSheet}
        setIsOpen={setIsOpenChannelSheet}
        isOwner={userInfo?.body?.codeName === channelInfo?.body?.channelOwnerName}
        onClick={() => {
          setIsOpenChannelSheet(false)
          setIsDeleteModal(true)
        }}
      />
      {isDeleteModal && (
        <ConfirmModal
          title={`채널을 나가시면..\n데이터가 모두 사라져요`}
          description={`지금 나가시면 채널 데이터가\n전부 삭제되어 복구가 불가해요`}
          onCancel={() => setIsDeleteModal((prev) => !prev)}
          onClick={handleButtonClick}
        />
      )}
    </>
  )
}
