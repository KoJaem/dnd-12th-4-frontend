"use client"
import { cn } from "@/utils/cn"
import Image from "next/image"

interface MyAnswerStatusBoxProps {
  title: string
  src?: string
}
export default function MyAnswerStatusBox({ title, src }: MyAnswerStatusBoxProps) {
  return (
    <section className={cn("flex items-center justify-between rounded-sm bg-primary-0/15 px-[20px] py-[12px]")}>
      <div className="flex flex-1 items-center gap-[12px]">
        <Image src={src ?? "/talki/webp/talki_front.webp"} width={24} height={24} alt="아이콘" />
        <p className="text-body-03 text-emphasis-high">{title}</p>
      </div>
    </section>
  )
}
