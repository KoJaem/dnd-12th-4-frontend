"use client"
import { useFindQuestionsByQuestionId } from "@/api/question-controller/question-controller"
import QuestionBox from "@/components/common/QuestionBox"
import FormSection from "@/components/questions/reply/new/FormSection"
import { useParams } from "next/navigation"
import { dayjsWithExtends as dayjs } from "@/utils/dayjsWithExtends"

export default function ReplyPageClient() {
  const { id, questionId } = useParams()

  const { data } = useFindQuestionsByQuestionId(id as string, Number(questionId))

  return (
    <section className="flex h-full flex-col items-center px-[16px] pb-[12px]">
      <QuestionBox
        count={data?.questionResponse?.signalNumber}
        replyCount={data?.questionResponse?.replyCount}
        date={dayjs(data?.questionResponse?.createdAt).toDate()}
        nickname="닉네임"
        text={data?.questionResponse?.content ?? ""}
      />
      <FormSection />
    </section>
  )
}
