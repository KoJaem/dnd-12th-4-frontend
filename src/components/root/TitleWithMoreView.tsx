"use client"

import { cn } from "@/utils/cn"
import { ChevronRight } from "lucide-react"

interface Params {
  title: string
  countTitle: string
  className?: string
  onClick?: () => void
}
export default function TitleWithMoreView({ title, countTitle, className, onClick }: Params) {
  return (
    <div className={cn("flex justify-between", className)}>
      <p className="text-subtitle-01">
        <span className="text-secondary-300">{countTitle}</span>
        {title}
      </p>
      <button className="flex items-center justify-center text-body-04" onClick={onClick}>
        더보기 <ChevronRight size={24} />
      </button>
    </div>
  )
}
