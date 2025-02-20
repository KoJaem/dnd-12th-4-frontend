"use client"
import { ChevronDown } from "lucide-react"
import FilterBottomSheet from "@/components/channels/FilterBottomSheet"
import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { cn } from "@/utils/cn"

interface CountAndSortBoxProps {
  type: "채널" | "응답" | "시그널"
  count: number
  className?: string
}
export default function CountAndSortBox({ type, count, className }: CountAndSortBoxProps) {
  const searchParams = useSearchParams()
  const sort = searchParams.get("sort")
  const [isOpenFilterSheet, setIsOpenFilterSheet] = useState(false)

  return (
    <div className="flex justify-between py-[12px]">
      <div className={cn("flex items-center gap-[4px] text-body-03 text-emphasis-high", className)}>
        <div>{type}</div>
        <div className="text-secondary-300">{count}</div>
      </div>
      <button className="flex items-center gap-[2px]" onClick={() => setIsOpenFilterSheet(true)}>
        <div className="text-body-03 text-emphasis-medium">{sort === "oldest" ? "오래된 순" : "최신순"}</div>
        <ChevronDown size={12} />
      </button>
      <FilterBottomSheet isOpen={isOpenFilterSheet} setIsOpen={setIsOpenFilterSheet} />
    </div>
  )
}
