"use client"
import Button from "@/components/common/Button"
import { category } from "@/dummy/categoryData"
import { XIcon } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react"
import { Sheet } from "react-modal-sheet"

interface Params {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export default function RecommendQuestionBottomSheet({ isOpen, setIsOpen }: Params) {
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  const [selectedKey, setSelectedKey] = useState<keyof typeof category>("interest")
  const [indicatorLeft, setIndicatorLeft] = useState(0)
  const [indicatorWidth, setIndicatorWidth] = useState(105)
  const buttonsRef = useRef<(HTMLButtonElement | null)[]>([])

  useEffect(() => {
    if (buttonsRef.current[selectedIndex]) {
      const button = buttonsRef.current[selectedIndex]
      const container = button?.parentElement

      if (button && container) {
        const buttonRect = button.getBoundingClientRect()
        const containerRect = container.getBoundingClientRect()

        setIndicatorLeft(buttonRect.left - containerRect.left)
        setIndicatorWidth(buttonRect.width)
      }
    }
  }, [selectedIndex])

  return (
    <Sheet isOpen={isOpen} onClose={() => setIsOpen(false)} snapPoints={[500]} detent="content-height">
      <Sheet.Container>
        <Sheet.Content>
          <Sheet.Scroller>
            <section className="flex h-full min-h-[500px] flex-col justify-between overflow-hidden px-[20px] pb-[80px] pt-[16px] text-black">
              <article className="flex flex-col items-center">
                <article className="flex w-full justify-between">
                  <p className="text-subtitle-02 font-semibold text-emphasis-high">추천 시그널</p>
                  <XIcon size={20} color="#000000DE" className="cursor-pointer" onClick={() => setIsOpen(false)} />
                </article>
                <article className="mt-[8px] flex w-full flex-col">
                  <div className="relative flex whitespace-nowrap">
                    {Object.keys(category).map((objectKey, index) => (
                      <Button
                        key={index}
                        ref={(el) => {
                          buttonsRef.current[index] = el
                        }}
                        type="button"
                        className="flex-1 bg-white text-body-03"
                        onClick={() => {
                          setSelectedKey(objectKey as keyof typeof category)
                          setSelectedIndex(index)
                        }}
                      >
                        {category[objectKey as keyof typeof category].label}
                      </Button>
                    ))}
                    <div className="absolute bottom-0 left-0 right-0 h-[4px] rounded-full bg-outline">
                      <AnimatePresence>
                        <motion.span
                          className="absolute bottom-0 h-[4px] rounded-full bg-gray-08"
                          initial={{ left: indicatorLeft, width: indicatorWidth }}
                          animate={{ left: indicatorLeft, width: indicatorWidth }}
                          transition={{ duration: 0.3 }}
                        />
                      </AnimatePresence>
                    </div>
                  </div>
                  <article className="flex w-full flex-col gap-[8px] py-[20px]">
                    {category[selectedKey]?.items.map((data, i) => (
                      <p className="text-body-03 text-emphasis-high" key={i}>
                        {data}
                      </p>
                    ))}
                  </article>
                </article>
              </article>
              <article className="absolute bottom-0 left-[0px] right-[0px] h-[80px] w-full content-center bg-white px-[16px] text-body-01 text-emphasis-high">
                <Button className="w-full" type="button" onClick={() => setIsOpen(false)}>
                  확인
                </Button>
              </article>
            </section>
          </Sheet.Scroller>
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop onTap={() => setIsOpen(false)} />
    </Sheet>
  )
}
