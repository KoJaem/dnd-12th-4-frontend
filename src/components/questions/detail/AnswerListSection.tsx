"use client"

import Image from "next/image"
import QuestionOrAnswerDetailBox from "@/components/questions/detail/QuestionOrAnswerDetailBox"
import { cn } from "@/utils/cn"
import CountAndSortBox from "@/components/my-page/CountAndSortBox"
import { useShowAnswers } from "@/api/answer-controller/answer-controller"
import { useParams, useSearchParams } from "next/navigation"
import TolkiIcon from "../../../../public/talki/webp/talki_empty.webp"

export default function AnswerListSection() {
  const params = useParams()
  const searchParams = useSearchParams()
  const questionId = Number(params.questionId)
  const channelId = String(params.id)
  const sort = searchParams.get("sort") || "latest"

  const { data } = useShowAnswers(questionId, { sort })
  const hasAnswers = Number(data?.body?.answerList?.length) > 0

  return (
    <section className={cn("flex flex-col", !hasAnswers && "gap-[28px]")}>
      <CountAndSortBox type="응답" count={data?.body?.answerList?.length || 0} className="text-subtitle-01" />
      {!hasAnswers && (
        <div className="flex flex-col items-center justify-center gap-[12px]">
          <Image src={TolkiIcon} width={60} height={60} alt="아이콘" />
          <p className="text-body-01 text-disabled">아직 응답이 없어요...</p>
        </div>
      )}
      <ul className="flex flex-col gap-[12px]">
        {data?.body?.answerList?.map((answerItem) => (
          <li key={answerItem.id}>
            <QuestionOrAnswerDetailBox
              key={answerItem.id}
              type="answer"
              channelId={channelId}
              questionId={questionId}
              answerId={answerItem.id}
              imageSrc="https://placehold.co/230x230.png"
              content={answerItem.content || ""}
              nickname={answerItem.codeName || ""}
              time={answerItem.createdAt || ""}
              isMyAnswer={answerItem.myAnswer || false}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
