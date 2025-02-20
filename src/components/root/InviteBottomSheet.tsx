"use client"
import "@/styles/bottomSheet.css"
import { share, ShareAPIRequest } from "@/utils/share"
import { Share2 } from "lucide-react"
import Image from "next/image"
import { Dispatch, SetStateAction } from "react"
import { Sheet } from "react-modal-sheet"

interface Params {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  channelRoomName?: string
  inviteCode?: string
}

export default function InviteBottomSheet({ isOpen, setIsOpen, channelRoomName, inviteCode }: Params) {
  const handleShare = async () => {
    const shareData: ShareAPIRequest = {
      title: `피키토키에 초대합니다`,
      text: `${channelRoomName} 채널에서 친구가 기다리고 있어요!\n초대코드: ${inviteCode}`,
      // Todo 데이터 알맞게 수정
      url: "https://dnd.ac"
    }
    share(shareData)
  }

  return (
    <Sheet isOpen={isOpen} onClose={() => setIsOpen(false)} detent="content-height" className="">
      <Sheet.Container>
        <Sheet.Content>
          <section className="flex flex-col gap-[12px] px-[16px] py-[24px] pt-[32px] text-black">
            <Image src={"/talki/webp/talki_share.webp"} width={60} height={60} alt="logo" />
            <p className="text-subtitle-01 text-emphasis-high">
              초대 코드를 공유하고
              <br />
              친구와 소통을 시작해보세요
            </p>
            <p className="text-body-01 text-emphasis-medium">초대 코드는 언제든지 보낼 수 있어요.</p>
            <button
              className="mt-[12px] flex items-center justify-between rounded-[12px] border-2 border-gray-08 px-[20px] py-[16px]"
              onClick={handleShare}
            >
              <p className="text-body-01 text-emphasis-medium">{inviteCode ?? "공유하기"}</p>
              <Share2 size={24} />
            </button>
          </section>
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop onTap={() => setIsOpen(false)} />
    </Sheet>
  )
}
