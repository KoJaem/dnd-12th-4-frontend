"use client"

import { cn } from "@/utils/cn"

interface MenuHeaderProps {
  title: string
  button?: boolean
  onClick?: () => void
  buttonTitle?: string
  buttonClassName?: string
  titleClassName?: string
}

export default function MenuHeader({
  title,
  button,
  onClick,
  buttonTitle,
  buttonClassName,
  titleClassName
}: MenuHeaderProps) {
  return (
    <header className="flex h-[56px] items-center justify-between py-[12px]">
      <h2 className={cn("text-headline-02 font-bold", titleClassName)}>{title}</h2>
      {button && (
        <button
          className={cn("rounded-[8px] bg-gray-03 px-[12px] py-[4px] text-caption-01", buttonClassName)}
          type="button"
          onClick={onClick}
        >
          {buttonTitle}
        </button>
      )}
    </header>
  )
}
