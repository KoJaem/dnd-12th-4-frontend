"use client"
import { useFindQuestionsByQuestionId } from "@/api/question-controller/question-controller"
import Button from "@/components/common/Button"
import QuestionBox from "@/components/common/QuestionBox"
import { dayjsWithExtends as dayjs } from "@/utils/dayjsWithExtends"
import { useParams, useRouter } from "next/navigation"

export default function QuestionCheckPageClient() {
  const { id, questionId } = useParams()
  const router = useRouter()

  const { data } = useFindQuestionsByQuestionId(id as string, Number(questionId))

  return (
    <>
      <div className="flex w-full flex-col items-center gap-[24px]">
        <p className="text-center text-headline-01 font-semibold text-gray-09">
          치직...치치직...
          <br />
          시그널이 도착했어요!
        </p>
        <QuestionBox
          count={data?.questionResponse?.signalNumber || 1}
          replyCount={data?.questionResponse?.replyCount}
          date={dayjs.utc(data?.questionResponse?.createdAt).toDate()}
          nickname="닉네임"
          text={data?.questionResponse?.content ?? ""}
        />
      </div>
      <div className="flex h-full w-full items-end justify-center gap-[12px]">
        <Button
          className="w-full bg-gray-03"
          onClick={() => {
            router.push(`/${id}`)
          }}
        >
          홈으로 돌아가기
        </Button>
        <Button
          className="w-full bg-primary-200"
          onClick={() => {
            router.push(`/${id}/questions/${questionId}/reply/new`)
          }}
        >
          응답하기
        </Button>
      </div>
    </>
  )
}
