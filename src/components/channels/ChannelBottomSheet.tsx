"use client"
import "@/styles/bottomSheet.css"
import { useRouter } from "next/navigation"
import { Dispatch, SetStateAction } from "react"
import { Sheet } from "react-modal-sheet"

interface Params {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export default function ChannelBottomSheet({ isOpen, setIsOpen }: Params) {
  const router = useRouter()
  return (
    <Sheet isOpen={isOpen} onClose={() => setIsOpen(false)} detent="content-height" className="">
      <Sheet.Container>
        <Sheet.Content>
          <section className="flex flex-col items-start px-[24px] text-black">
            <button
              className="w-full py-[24px] text-start"
              onClick={() => {
                router.push("/channels/create")
              }}
            >
              채널 생성
            </button>
            <hr className="w-full border-black/20" />
            <button
              className="w-full py-[24px] text-start"
              onClick={() => {
                router.push("/channels/join")
              }}
            >
              초대 코드 입력
            </button>
          </section>
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop onTap={() => setIsOpen(false)} />
    </Sheet>
  )
}
