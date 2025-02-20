import { cn } from "@/utils/cn"

interface TabProps {
  label: string
  isActive: boolean
  onClick: () => void
}
export default function Tab({ label, isActive, onClick }: TabProps) {
  return (
    <button
      className={cn(
        "cursor-pointer rounded-[100px] bg-gray-01 px-[12px] py-[8px] text-body-04 text-emphasis-medium",
        isActive && "bg-gray-08 text-white"
      )}
      onClick={onClick}
    >
      {label}
    </button>
  )
}
