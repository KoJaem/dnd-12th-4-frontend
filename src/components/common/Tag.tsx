import { cn } from "@/utils/cn"

interface Params {
  text: string
  count?: number
  className?: string
}
export default function Tag({ text, className, count }: Params) {
  return (
    <div
      className={cn(
        "flex w-fit items-center justify-center rounded-[40px] px-[12px] py-[4px] text-caption-01",
        count && count >= 100 ? "bg-primary-0 text-[#A85F00]" : "bg-secondary-0 text-secondary-300",
        className
      )}
    >
      {text}
    </div>
  )
}
