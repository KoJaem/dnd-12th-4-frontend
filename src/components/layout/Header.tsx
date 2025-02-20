"use client"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

interface Params {
  title?: string
  isBack?: boolean
}

export default function Header({ title, isBack = true }: Params) {
  const router = useRouter()
  return (
    <div className="fixed top-0 z-[49] flex h-[56px] w-full max-w-screen-lg items-center bg-background px-[12px] text-subtitle-02 text-emphasis-high">
      {isBack && (
        <button onClick={() => router.back()}>
          <ArrowLeft size={24} />
        </button>
      )}
      {title && <p className="absolute start-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 sm:block">{title}</p>}
    </div>
  )
}
