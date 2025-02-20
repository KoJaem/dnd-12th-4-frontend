"use client"
import { useFindChannelStatus } from "@/api/channel-controller/channel-controller"
import Image from "next/image"
import { useParams } from "next/navigation"
import { Tooltip } from "react-tooltip"
// import "react-tooltip/dist/react-tooltip.css"

export default function CharacterInformation() {
  const { id } = useParams()
  // const { data: channelData } = useFindChannelById(id as string)

  // const { data: questionData } = useFindTodayQuestionByChannel(id as string)

  // const { data: answerData } = useShowAnswers(questionData?.questionId as number)

  const { data: channelStatusData } = useFindChannelStatus(id as string)
  const level = channelStatusData?.body?.level ?? 1

  return (
    <>
      <section className="mb-[60px] flex justify-between px-[16px]">
        <div className="flex flex-col gap-[4px]">
          <p className="font-pixel text-pixel-headline text-gray-01">
            토키 <span className="text-pixel-caption text-gray-03">Lv. {level}</span>
          </p>
          {/* <p className="font-pixel text-pixel-caption">
            <span className="text-gray-03">오늘 응답 </span>
            <span className="text-primary-200">{answerData?.body?.answerList?.length ?? 0}</span>
            <span className="text-gray-04">/{channelData?.body?.countPerson}</span>
          </p> */}
        </div>
        <div className="flex items-start gap-[4px]">
          <Image src={"/etc/lightning.webp"} alt="타이틀" width={24} height={24} />
          <p data-tooltip-id="tooltip-message" data-tooltip-place="bottom-end" className="font-pixel">
            <span className="text-primary-200">{channelStatusData?.body?.point}</span>
            <span className="text-gray-04">/100</span>
          </p>
          <Tooltip
            defaultIsOpen
            id="tooltip-message"
            style={{ backgroundColor: "white", borderRadius: 8, padding: "8px" }}
            openOnClick
          >
            <div className="flex flex-col items-end">
              <p className="text-caption-01 text-emphasis-high">번개 포인트로 토키를 성장시켜보세요!</p>
              <p className="text-caption-02 text-emphasis-high">
                시그널을 보내면 <span className="text-secondary-200">10P</span>를 얻어요
              </p>
            </div>
          </Tooltip>
        </div>
      </section>
      <article className="relative mb-[40px] flex justify-center">
        <Image src={`/talki/webp/talki_lv${level}.webp`} alt="tokki" width={120} height={120} />
      </article>
    </>
  )
}
