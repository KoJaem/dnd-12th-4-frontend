"use client"
import { useFindTodayQuestionByChannel } from "@/api/question-controller/question-controller"
import Tag from "@/components/common/Tag"
import Image from "next/image"
import { useParams, useRouter } from "next/navigation"

export default function TodayAnswerSummary() {
  const { id } = useParams()

  const { data } = useFindTodayQuestionByChannel(id as string)

  const router = useRouter()

  return (
    <article
      className="cursor-pointer rounded-[16px] bg-primary-100 p-[20px]"
      onClick={() => router.push(`/${id}/questions/${data?.questionId}`)}
    >
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-[12px]">
          <Tag text={`${data?.signalCount}번째 시그널`} className="bg-gray-01 text-emphasis-high" />
          <div className="flex flex-col gap-[4px]">
            <p className="text-subtitle-01 font-semibold text-emphasis-high">시그널이 도착했어요!</p>
            <p className="text-body-03 text-emphasis-medium">
              지금 바로 응답을 작성해보세요.
              {/* 지금까지 <span className="text-secondary-300">{data?.answerCount}명</span>이 응답했어요. */}
            </p>
          </div>
        </div>
        <Image src={"/walkitalki/walkitalki_signal.webp"} alt="unknown" width={96} height={96} />
      </div>
    </article>
  )
}
