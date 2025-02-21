"use client"
import { getShowAnswersQueryKey, useUpdateAnswer } from "@/api/answer-controller/answer-controller"
import Button from "@/components/common/Button"
import Textarea from "@/components/common/Textarea"
import Toggle from "@/components/common/Toggle"
import { useAnswerStore } from "@/stores/useAnswerStore"
import { replySchema } from "@/validations/replySchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useQueryClient } from "@tanstack/react-query"
import { useParams, useRouter } from "next/navigation"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

export default function FormSection() {
  const router = useRouter()
  const params = useParams()
  const answerId = Number(params.replyId)
  const answer = useAnswerStore((state) => state.answer)

  const { questionId } = params
  const queryClient = useQueryClient()

  const {
    handleSubmit,
    setValue,
    watch,
    formState: { isSubmitting }
  } = useForm({
    defaultValues: {
      answerForm: answer as string,
      isAnonymous: false
    },
    resolver: zodResolver(replySchema)
  })

  const currentAnswer = watch("answerForm")
  const { mutateAsync } = useUpdateAnswer()

  const onSubmit = async () => {
    try {
      await mutateAsync({ answerId, data: { content: currentAnswer } })
      await queryClient.invalidateQueries({
        queryKey: getShowAnswersQueryKey(Number(questionId))
      })
      toast("응답을 수정했어요!")
      router.back()
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (answer) {
      setValue("answerForm", answer)
    }
  }, [answer, setValue])

  return (
    <form className="mt-[12px] flex h-full w-full flex-col justify-between" onSubmit={handleSubmit(onSubmit)}>
      <section>
        <Textarea
          maxLength={500}
          value={watch("answerForm")}
          onChange={(e) => setValue("answerForm", e.target.value, { shouldValidate: true })}
        />
        <div className="mt-[16px] flex justify-end">
          <Toggle
            label="익명으로 보내기"
            checked={watch("isAnonymous")}
            onChange={(e) => setValue("isAnonymous", e.target.checked)}
          />
        </div>
      </section>
      <Button
        type="submit"
        className="disabled w-full disabled:bg-gray-02 disabled:text-disabled"
        disabled={isSubmitting || currentAnswer === answer || currentAnswer.length === 0}
      >
        수정 완료
      </Button>
    </form>
  )
}
