"use client"
import { getShowAnswersQueryKey, useDeleteAnswer } from "@/api/answer-controller/answer-controller"
import ConfirmModal from "@/components/common/ConfirmModal"
import { useAnswerStore } from "@/stores/useAnswerStore"
import { cn } from "@/utils/cn"
import { kstToYYYYMMDD } from "@/utils/kstToYYYYMMDD"
import { useQueryClient } from "@tanstack/react-query"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "sonner"

interface QuestionOrAnswerDetailBoxProps {
  type: "question" | "answer"
  channelId?: string
  questionId?: number
  answerId?: number
  imageSrc: string
  content: string
  nickname: string
  time: string
  isMyAnswer?: boolean
}
export default function QuestionOrAnswerDetailBox({
  type,
  channelId,
  answerId,
  questionId,
  imageSrc,
  content,
  nickname,
  time,
  isMyAnswer
}: QuestionOrAnswerDetailBoxProps) {
  const router = useRouter()
  const [isDeleteModal, setIsDeleteModal] = useState(false)
  const setAnswer = useAnswerStore((state) => state.setAnswer)
  const queryClient = useQueryClient()
  const deleteAnswerMutation = useDeleteAnswer()

  const handleDeleteButtonClick = async () => {
    try {
      await deleteAnswerMutation.mutateAsync({ answerId: answerId as number })
      await queryClient.invalidateQueries({ queryKey: getShowAnswersQueryKey(questionId as number) })
      setIsDeleteModal(false)
      toast("응답을 삭제했어요!")
    } catch (error) {
      console.error(error)
    }
  }

  const handleEditButtonClick = () => {
    setAnswer(content)
    router.push(`/${channelId}/questions/${questionId}/reply/${answerId}/modify`)
  }

  return (
    <section className="flex flex-col gap-[12px] rounded-xl bg-[#F5F8FA] px-[20px] py-[24px]">
      <div className="flex items-center gap-[8px]">
        <Image src={imageSrc} className="rounded-full object-cover" width={32} height={32} alt="프로필 이미지" />
        <div className="flex flex-col">
          <div className="text-body-03 text-emphasis-high">{nickname}</div>
          <div className="text-caption-02 text-emphasis-medium">{kstToYYYYMMDD(time)}</div>
        </div>
      </div>
      <p className={cn("text-body-02 text-emphasis-high", type === "answer" && "text-body-04")}>{content}</p>

      {isMyAnswer && (
        <div className="flex justify-end gap-[12px] text-[12px] text-black/60">
          <button type="button" onClick={handleEditButtonClick}>
            수정
          </button>
          <button type="button" onClick={() => setIsDeleteModal(true)}>
            삭제
          </button>
        </div>
      )}
      {isDeleteModal && (
        <ConfirmModal
          type="answer"
          title="답변을 삭제하시겠어요?"
          description={`답변을 삭제하면 더 이상\n복구가 어려워요`}
          onCancel={() => setIsDeleteModal((prev) => !prev)}
          onClick={() => handleDeleteButtonClick()}
        />
      )}
    </section>
  )
}
