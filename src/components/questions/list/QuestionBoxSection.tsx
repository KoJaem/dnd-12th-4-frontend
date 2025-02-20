"use client"

import { useFindQuestionsByChannel } from "@/api/question-controller/question-controller"
import QuestionBox from "./QuestionBox"
import { useParams, useSearchParams } from "next/navigation"
import CountAndSortBox from "@/components/my-page/CountAndSortBox"

export default function QuestionBoxSection() {
  const params = useParams()
  const searchParams = useSearchParams()
  const sort = searchParams.get("sort") || "latest"
  const tab = searchParams.get("tab") || "all"
  const channelId = params.id as string
  const { data } = useFindQuestionsByChannel(channelId, { tab, sort })

  const questionLength = Number(data?.questionResponse?.length)

  return (
    <section>
      <CountAndSortBox type="시그널" count={questionLength || 0} />
      <ul>
        {data?.questionResponse?.map((questionData) => (
          <QuestionBox
            key={questionData.questionId}
            id={questionData.questionId || 1}
            signalNumber={questionData.signalNumber || 1}
            nickname={questionData.writerName || ""}
            time={questionData.createdAt || ""}
            content={questionData.content || ""}
            replyCount={questionData.replyCount || 0}
          />
        ))}
      </ul>
    </section>
  )
}
