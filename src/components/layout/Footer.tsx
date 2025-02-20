"use client"

import { House, ScrollText, User } from "lucide-react"
import { useParams, usePathname, useRouter } from "next/navigation"

export default function Footer() {
  const { id } = useParams()
  const router = useRouter()
  const pathname = usePathname()

  const navButtonClassName = "flex h-full w-full flex-col items-center justify-center"

  return (
    <div className="fixed bottom-0 z-[49] flex h-[92px] w-full max-w-screen-lg items-center justify-between rounded-t-[28px] border border-outline bg-white">
      <button className={navButtonClassName} onClick={() => router.push(`/${id}`)}>
        <House
          size={24}
          color={!pathname.includes("/questions") && !pathname.includes("/my-page") ? "black" : "#9CAAB9"}
        />
        <p className="text-caption-02 text-emphasis-medium">홈</p>
      </button>
      <button className={navButtonClassName} onClick={() => router.push(`/${id}/questions`)}>
        <ScrollText size={24} color={pathname.includes("/questions") ? "black" : "#9CAAB9"} />
        <p className="text-caption-02 text-emphasis-medium">리스트</p>
      </button>
      {/* <button className={navButtonClassName} onClick={() => router.push(`/${id}/channels`)}>
        <Antenna size={24} />
        <p className='text-caption-02 text-emphasis-medium'>채널</p>
      </button> */}
      <button className={navButtonClassName} onClick={() => router.push(`/${id}/my-page`)}>
        <User size={24} color={pathname.includes("/my-page") ? "black" : "#9CAAB9"} />
        <p className="text-caption-02 text-emphasis-medium">내정보</p>
      </button>
    </div>
  )
}
