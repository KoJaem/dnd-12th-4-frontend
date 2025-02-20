"use client"

import { useFindQuestionsByMember } from "@/api/question-controller/question-controller"
import QuestionBox from "./QuestionBox"
import { useSearchParams } from "next/navigation"

export default function QuestionBoxSection() {
  const searchParams = useSearchParams()
  const sort = searchParams.get("sort")
  const { data: latestData } = useFindQuestionsByMember({ sort: "latest" })
  const { data: oldestData } = useFindQuestionsByMember({ sort: "oldest" })
  const data = sort === "latest" ? latestData : oldestData
  console.log(data)
  return (
    <section>
      {data?.questionResponse?.map((questionData) => (
        <QuestionBox
          key={`${questionData.createdAt}-${questionData.writerName}`}
          signalNumber={questionData.signalNumber || 1}
          nickname={questionData.writerName || ""}
          time={questionData.createdAt || ""}
          content={questionData.content || ""}
          replyCount={questionData.replyCount || 1}
        />
      ))}
    </section>
  )
}
