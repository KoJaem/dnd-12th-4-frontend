"use client"
import { cn } from "@/utils/cn"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: keyof typeof buttonVariants
  size: keyof typeof buttonSizes
  children: React.ReactNode
  className?: string
  onNext?: () => void
  isSubmit?: boolean
}

const buttonVariants = {
  default:
    "font-medium bg-primary cursor-pointer hover:opacity-70 active:opacity-80 disabled:bg-[#ECF0F3] disabled:text-disabled disabled:pointer-events-none rounded-sm",
  kakao:
    "relative flex items-center justify-center rounded-xsm bg-primary-100 hover:opacity-70 active:opacity-80 cursor-pointer"
}

const buttonSizes = {
  default: "h-[60px] w-full",
  kakao: "h-[52px] w-full"
}

export default function Button({ variant, children, size, className, onNext, isSubmit, ...props }: ButtonProps) {
  console.log(isSubmit)
  const handleButtonClick = () => {
    if (!isSubmit && onNext) {
      onNext()
    }
  }
  return (
    <button
      type={isSubmit ? "submit" : "button"}
      className={cn(buttonVariants[variant], buttonSizes[size], className)}
      onClick={handleButtonClick}
      {...props}
    >
      {children}
    </button>
  )
}
