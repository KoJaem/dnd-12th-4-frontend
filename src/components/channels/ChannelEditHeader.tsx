"use client"
import { ArrowLeft } from "lucide-react"

interface Params {
  onBackClick?: () => void
}

export default function ChannelEditHeader({ onBackClick }: Params) {
  return (
    <div className="fixed top-0 z-50 flex h-[40px] w-full max-w-screen-lg items-center bg-white px-[12px]">
      <button onClick={onBackClick} type="button">
        <ArrowLeft size={24} />
      </button>
      <p className="absolute start-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 sm:block">채널 선택</p>
    </div>
  )
}
