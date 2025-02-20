"use client"
import "@/styles/bottomSheet.css"
import { useRouter, useSearchParams } from "next/navigation"
import { Dispatch, SetStateAction } from "react"
import { Sheet } from "react-modal-sheet"

interface Params {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}
// * 최신순, 오래된순 제외 다른 필터값을 받게되면 option 을 props 로 받기
export default function FilterBottomSheet({ isOpen, setIsOpen }: Params) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const updateFilter = (sort: string) => {
    const params = new URLSearchParams(searchParams)
    params.set("sort", sort)

    router.replace(`?${params.toString()}`, { scroll: false })

    setIsOpen(false)
  }
  return (
    <Sheet isOpen={isOpen} onClose={() => setIsOpen(false)} detent="content-height" className="">
      <Sheet.Container>
        <Sheet.Content>
          <section className="flex flex-col px-[24px] text-black">
            <button
              className="w-full py-[24px] text-start"
              onClick={() => {
                updateFilter("latest")
              }}
            >
              최신순
            </button>
            <hr className="w-full border-black/20" />
            <button
              className="w-full py-[24px] text-start"
              onClick={() => {
                updateFilter("oldest")
              }}
            >
              오래된 순
            </button>
          </section>
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop onTap={() => setIsOpen(false)} />
    </Sheet>
  )
}
