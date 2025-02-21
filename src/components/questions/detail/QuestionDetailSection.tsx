"use client"

import QuestionOrAnswerDetailBox from "@/components/questions/detail/QuestionOrAnswerDetailBox"
import MyAnswerStatusBox from "@/components/questions/detail/MyAnswerStatusBox"
import { useFindQuestionsByQuestionId } from "@/api/question-controller/question-controller"
import { useParams } from "next/navigation"

export default function QuestionDetailSection() {
  const params = useParams()
  const channelId = String(params.id)
  const questionId = Number(params.questionId)
  const { data } = useFindQuestionsByQuestionId(channelId, questionId)

  const titleStatus = data?.hasMyAnswer
    ? "이미 응답을 보내셨네요. 정말 멋져요!"
    : data?.mySignal
      ? "시그널을 보내셨네요. 최고에요!"
      : data?.questionResponse?.replyCount === 0
        ? "질문자가 응답을 기다리고 있어요!"
        : ""

  return (
    <section className="flex flex-col gap-[12px]">
      <header>
        <h2 className="text-subtitle-01">
          <span className="text-secondary-300">{data?.questionResponse?.signalNumber}번째 </span>
          <span className="text-emphasis-high">시그널</span>
        </h2>
      </header>
      <article className="flex flex-col gap-[12px]">
        <QuestionOrAnswerDetailBox
          type="question"
          channelId={channelId}
          questionId={questionId}
          imageSrc={data?.questionResponse?.writerProfileImage || "https://placehold.co/230x230.png"}
          content={data?.questionResponse?.content || ""}
          nickname={data?.questionResponse?.writerName || ""}
          time={data?.questionResponse?.createdAt || ""}
        />
        <MyAnswerStatusBox title={titleStatus} />
      </article>
    </section>
  )
}
