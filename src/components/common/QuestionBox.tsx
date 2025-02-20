"use client"

import Tag from "@/components/common/Tag"
import { cn } from "@/utils/cn"
import { formatUtcToKstWithRelativeTime } from "@/utils/formatUtcToKstWithRelativeTime"

interface Params {
  count?: number
  replyCount?: number
  date?: Date
  nickname?: string
  text: string
}

export default function QuestionBox({ count = 1, replyCount = 0, date, nickname = "익명", text }: Params) {
  return (
    <section className="relative flex w-full flex-col gap-[12px] rounded-[20px] bg-gray-01 px-[20px] py-[24px] font-semibold">
      <div className={cn("flex w-full items-center")}>
        <Tag text={`${count}번째 시그널`} className="bg-secondary-0 text-secondary-300" />
      </div>
      <p className="text-caption-01 text-emphasis-medium">
        지금까지 <span className="text-secondary-300">{replyCount}명</span>이 응답했어요
      </p>
      <p className="w-full bg-inherit text-body-04 text-emphasis-high">{text}</p>
      <div className="flex gap-[12px] text-caption-02 text-emphasis-medium">
        <p>{nickname}</p>
        {date && <p>{formatUtcToKstWithRelativeTime(date)}</p>}
      </div>
    </section>
  )
}
