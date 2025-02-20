"use client"
import { useFindChannelById } from "@/api/channel-controller/channel-controller"
import { ChevronDown } from "lucide-react"
import { useParams } from "next/navigation"
import { useState } from "react"
import ChannelBottomSheet from "@/components/root/ChannelBottomSheet"

export default function TitleSection() {
  const { id } = useParams()
  const { data } = useFindChannelById(id as string)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <section className="flex items-center justify-between p-[16px] font-pixel text-pixel-headline text-gray-01">
      {/* <Image src={"/favicon.ico"} alt="타이틀" width={40} height={40} /> */}
      <button className="flex" onClick={() => setIsOpen(true)}>
        <p className="">{data?.body?.channelRoomName ?? ""}</p>
        <ChevronDown size={24} color="white" />
      </button>
      <p>
        <span className="text-primary-200">{data?.body?.countPerson}</span>명이 참여 중
      </p>
      <ChannelBottomSheet isOpen={isOpen} setIsOpen={setIsOpen} />
    </section>
  )
}
