"use client"
import { useShowAnswers } from "@/api/answer-controller/answer-controller"
import { useFindTodayQuestionByChannel } from "@/api/question-controller/question-controller"
import TitleWithMoreView from "@/components/root/TitleWithMoreView"
import ToadyAnswerSlider from "@/components/root/ToadyAnswerSlider"
import Image from "next/image"
import { useParams, useRouter } from "next/navigation"

export default function TodayAnswer() {
  const { id } = useParams()
  const router = useRouter()

  const { data: questionData } = useFindTodayQuestionByChannel(id as string)

  const { data } = useShowAnswers(questionData?.questionId as number)

  return (
    <article className="flex flex-col gap-[12px]">
      <TitleWithMoreView
        title=" 의 응답이 있어요"
        countTitle={`${data?.body?.answerList?.length || 0}개`}
        onClick={() => {
          router.push(`/${id}/questions`)
        }}
      />
      {data?.body?.answerList && data?.body?.answerList?.length > 0 ? (
        <>
          <ToadyAnswerSlider />
          {data?.body?.answerList?.length > 1 && (
            <section id="today-answer-slider" className="flex h-[12px] w-full justify-center gap-[4px]" />
          )}
        </>
      ) : (
        <section className="flex flex-col items-center justify-center gap-[4px] rounded-[20px] bg-gray-01 px-[20px] py-[24px]">
          <Image src={"/talki/webp/talki_empty.webp"} width={80} height={80} alt="logo" />
          <p className="text-body-03 text-emphasis-medium">아직 응답이 없어요...</p>
        </section>
      )}
    </article>
  )
}
