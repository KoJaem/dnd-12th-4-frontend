"use client"

import Tab from "@/components/common/Tab"
import { TAB_MENUS } from "@/constants/tab"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

export default function QuestionListTabBox() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()
  const tab = searchParams.get("tab") || "all"
  return (
    <ul className="flex gap-[8px]">
      {TAB_MENUS.QUESTION.map((TAB_MENU) => (
        <li key={TAB_MENU.value}>
          <Tab
            label={TAB_MENU.label}
            isActive={tab === TAB_MENU.value}
            onClick={() => router.push(`${pathname}?tab=${TAB_MENU.value}`)}
          />
        </li>
      ))}
    </ul>
  )
}
