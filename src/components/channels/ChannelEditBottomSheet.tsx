"use client"
import "@/styles/bottomSheet.css"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Dispatch, SetStateAction } from "react"
import { Sheet } from "react-modal-sheet"

interface Params {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  isOwner: boolean
  onClick: () => void
}

export default function ChannelEditBottomSheet({ isOpen, setIsOpen, isOwner, onClick }: Params) {
  const { id } = useParams()
  return (
    <Sheet isOpen={isOpen} onClose={() => setIsOpen(false)} detent="content-height" className="">
      <Sheet.Container>
        <Sheet.Content>
          <section className="flex flex-col items-start px-[24px] text-body-01 text-emphasis-high">
            <Link
              href={`/${id}/my-page/modify/channel-profile`}
              className="w-full py-[24px] text-start"
              onClick={() => setIsOpen(false)}
            >
              채널 프로필 수정
            </Link>
            <hr className="w-full border-black/20" />
            {isOwner && (
              <>
                <Link
                  href={`/${id}/my-page/modify/channel-name`}
                  className="w-full py-[24px] text-start"
                  onClick={() => setIsOpen(false)}
                >
                  채널명 변경
                </Link>
                <hr className="w-full border-black/20" />
              </>
            )}
            <button className="w-full py-[24px] text-start" onClick={onClick}>
              나가기
            </button>
          </section>
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop onTap={() => setIsOpen(false)} />
    </Sheet>
  )
}
